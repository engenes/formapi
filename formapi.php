<?php
namespace Drupal\online_booking\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Datetime\DrupalDateTime;

class AvailableTime extends ConfigFormBase  {
  public function buildForm(array $form, FormStateInterface $form_state) {


    $form['#attached']['library'][] = 'online_booking/online_booking.time_form';
    $form['#tree'] = TRUE;

    //создаем группу полей в которую удем устанавливать свободное время
    $form['times_fieldset'] = [
      '#type' => 'fieldset',
      '#prefix' => '<div id="available-time-fieldset-wrapper">',
      '#suffix' => '</div>',
    ];

    //проверяем были ли клик по ajax кнопкам
    if($form_state->getTriggeringElement()){
      //если клик был, то получаем массив available_time из $form_state
      $available_time_array = $form_state->get('available_time');
    }else{
      //иначе получаем из базы
      $available_time_array = $this->config('online_booking.settings')->get('available_time');
    }

    //если полученный массив не пустой
    if(!empty($available_time_array)){
      $length = count($available_time_array);
      //генерируем группу полей времени
//      на этом этапе массив соответствует ожидаемому
//      то есть если у меня в инпутах содержится
//      [
//        12:32,
//        22:22,
//        false,
//        false,
//        12:32,
//      ]
//      то после удаления 2 элемента 22:22
//      массив выглядит так
//      [
//        12:32,
//        false,
//        false,
//        12:32,
//      ]

      foreach ($available_time_array as $key => $time){
        //форматируем фремя ля того чтобы оно корректно записалось в поле времмени
        $format_time = $time ? DrupalDateTime::createFromTimestamp(strtotime($time)) : false;

        //задаем обертку для группы (поле ввода - кнопка удалить)
        $form['times_fieldset']['time'][$key] = [
          '#type' => 'container',
          '#attributes' => ['class' => ['time-item'], 'id'=>'time-item-'.$key]
        ];
        $form['times_fieldset']['time'][$key]['input'] = [
          '#type' => 'datetime',
          '#date_date_element' => 'none',
          '#date_time_element' => 'time',
          '#date_time_format' => 'H:i',
          '#date_increment' => 60,
          '#default_value' => $format_time
        ];
        //если длина массива со времнем больше 1, то добавляем в группу кнопку удалить
        if($length>1){
          $form['times_fieldset']['time'][$key]['remove'] = [
            '#type' => 'submit',
            '#value' => $this->t('Remove'),
            '#submit' => ['::removeCurrent'],
            '#name' => 'remove-'.$key,
            '#ajax' => [
              'callback' => '::add_remove_callback',
              'wrapper' => 'available-time-fieldset-wrapper',
              'progress' => [
                'type' => 'throbber',
              ]
            ],
            '#attributes' => ['class' => ['hidden']],
            '#prefix' => '<span class="glyphicon glyphicon-remove button" aria-hidden="true"></span>',
          ];
        }
      }
    }else{
      $form['times_fieldset']['time'][0] = [
        '#type' => 'container',
        '#attributes' => ['class' => ['time-item'], 'id'=>'time-item-0']
      ];
      $form['times_fieldset']['time'][0]['input'] = [
        '#type' => 'datetime',
        '#date_date_element' => 'none', // hide date element
        '#date_time_element' => 'time', // you can use text element here as well
        '#date_time_format' => 'H:i',
        '#date_increment' => 60,
      ];
    }

    $form['times_fieldset']['actions'] = [
      '#type' => 'actions',
    ];
    //добавляем в группу поле кнопку для добавляения еще одного инпута
    $form['times_fieldset']['actions']['add_time'] = [
      '#type' => 'submit',
      '#value' => $this->t('Add one more'),
      '#submit' => ['::addOne'],
      '#name' => 'addone',
      '#ajax' => [
        'callback' => '::add_remove_callback',
        'wrapper' => 'available-time-fieldset-wrapper',
      ],
    ];
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
      '#name' => 'save'
    ];
    return $form;
  }
  public function getFormId() {
    return 'online_booking_available_time';
  }
  protected function getEditableConfigNames() {
    return ['online_booking.settings'];
  }
  //возвращаем массив группы полей после выполнения ajax
  public function add_remove_callback(array &$form, FormStateInterface $form_state) {
    return $form['times_fieldset'];
  }

  public function addOne(array &$form, FormStateInterface $form_state) {
    $available_time = $form_state->getValue(['times_fieldset', 'time']);
    //получаем значения всех полей после нажатие на кнопку добавить
    foreach ($available_time as $time){
      $available_time_array[] = !empty($time['input']) ? $time['input']->format('H:i:s') : false;
    }
    //добавляем еще одно время в массив со значеним false
    $available_time_array[] = false;
    //помещаем массив в $form_state
    $form_state->set('available_time', $available_time_array);
    $form_state->setRebuild();
  }

  public function removeCurrent(array &$form, FormStateInterface $form_state){
    //получаем index текущей пары (поля ввода -кнопки удаляить)
    $index = $form_state->getTriggeringElement()['#array_parents'][2];

    $available_time = $form_state->getValue(['times_fieldset', 'time']);

    //получаем значения всех полей после нажатие на кнопку удалить
    $pre_available_time = [];
    foreach ($available_time as $time){
      $pre_available_time[] = !empty($time['input']) ? $time['input']->format('H:i:s') : false;
    }
    unset($pre_available_time[$index]);
    //поле удаления получаем массив с неправильными ключами
    //пересобираем его присваивая ключи попорядку 0, 1, 2, ...

    $available_time_array = [];
    foreach ($pre_available_time as  $time){
      $available_time_array[] = $time;
    }

    //помещаем массив в $form_state
    $form_state->set('available_time', $available_time_array);
    $form_state->setRebuild();
  }



  public function validateForm(array &$form, FormStateInterface $form_state) {
      $name = $form_state->getTriggeringElement()['#name'];
      if($name == 'save'){
        $available_time = $form_state->getValue(['times_fieldset', 'time']);
        foreach ($available_time as $time){
          if(!empty($time['input'])){
            $available_time_array[] = $time['input']->format('H:i:s');
          }
        }
        if(empty($available_time_array)){
          $form_state->setErrorByName('times_fieldset', 'Установите доступное для записи время');
        }
      }
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $available_time = $form_state->getValue(['times_fieldset', 'time']);

    foreach ($available_time as $time){
      if(!empty($time['input'])){
        $available_time_array[] = $time['input']->format('H:i:s');
      }
    }

    $this->config('online_booking.settings')
      ->set('available_time', $available_time_array)
      ->save();
    $this->messenger()->addMessage('Доступное для записи время сохранено');
  }
}
