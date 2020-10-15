(window.webpackJsonp = window.webpackJsonp || []).push([["cf19e21322d7644d3594feafd9858add"], {
    "0Rlc": function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, "default", (function() {
            return c
        }
        ));
        s("91GP"),
        s("ioFf"),
        s("rGqo"),
        s("Btvt");
        var o = s("q1tI")
          , n = (s("17x9"),
        s("ZxpX"));
        function i() {
            return (i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var o in s)
                        Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function a(e, t) {
            if (null == e)
                return {};
            var s, o, n = function(e, t) {
                if (null == e)
                    return {};
                var s, o, n = {}, i = Object.keys(e);
                for (o = 0; o < i.length; o++)
                    s = i[o],
                    t.indexOf(s) >= 0 || (n[s] = e[s]);
                return n
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                    s = i[o],
                    t.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s])
            }
            return n
        }
        class c extends o.Component {
            constructor() {
                super(...arguments),
                this.onChange = e=>{
                    this.props.onChange && this.props.onChange(this.props.name, e.target.checked, e)
                }
            }
            render() {
                var e = this.props
                  , t = e.children
                  , s = e.checked
                  , c = e.disabled
                  , r = e.indeterminate
                  , l = e.name
                  , u = e.id
                  , p = a(e, ["children", "checked", "disabled", "indeterminate", "name", "id"])
                  , d = Object(n.classNames)("CheckBox", p.className, {
                    "CheckBox--disabled": c,
                    "CheckBox--indeterminate": r
                });
                return o.createElement("label", {
                    className: d
                }, o.createElement("input", i({}, p, {
                    className: "CheckBox__input",
                    id: u,
                    type: "checkbox",
                    checked: s,
                    name: l,
                    disabled: c,
                    onChange: this.onChange
                })), o.createElement("span", {
                    className: "CheckBox__indicator",
                    "aria-hidden": !0
                }), t)
            }
        }
    },
    "0toi": function(e, t, s) {
        "use strict";
        s.r(t);
        s("91GP");
        var o = s("q1tI")
          , n = s.n(o)
          , i = (s("17x9"),
        s("r7nW"))
          , a = s("Xq7/")
          , c = s("6aSF")
          , r = function(e) {
            var t = e.children
              , s = e.hasScroll;
            return void 0 === s || s ? n.a.createElement(c.default, {
                className: "ModalBody"
            }, t) : n.a.createElement("div", {
                className: "ModalBody"
            }, t)
        }
          , l = s("7ZXl")
          , u = s("ZxpX");
        function p() {
            return (p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var o in s)
                        Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var d = e=>{
            var t = e.className
              , s = e.appearance
              , n = void 0 === s ? "white" : s
              , c = e.title
              , d = e.actionButtons
              , _ = e.onClose
              , g = e.children
              , h = e.footerHint
              , b = e.hasScroll
              , f = Object(u.classNames)("Modal", "Modal--" + n, t);
            return o.createElement(i.default, p({}, e, {
                className: f
            }), o.createElement(a.ModalHeader, {
                title: c,
                onClose: _,
                appearance: n
            }), Boolean(g) && o.createElement(r, {
                hasScroll: b
            }, g), o.createElement(l.ModalFooter, {
                actionButtons: d,
                hint: h
            }))
        }
        ;
        d.Header = a.ModalHeader,
        d.Body = r,
        d.Footer = l.ModalFooter;
        t.default = d
    },
    "36Mz": function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, "Settings", (function() {
            return M
        }
        ));
        s("Oyvg"),
        s("OG14"),
        s("hhXQ"),
        s("SRfc"),
        s("rGqo"),
        s("Btvt"),
        s("pIFo"),
        s("KKXr"),
        s("HEwt");
        var o = s("zxIV")
          , n = s("t7n3")
          , i = s("ryw6")
          , a = s("lXE5")
          , c = s("Egk5")
          , r = s("v+DW")
          , l = s("4+be")
          , u = s("4tce")
          , p = s("Xrg9")
          , d = s("98sY")
          , _ = s("wVf2")
          , g = s("aong")
          , h = s("EasH")
          , b = s("FWc3")
          , f = s("q1tI")
          , m = s.n(f)
          , O = s("i8i4")
          , j = s.n(O)
          , v = s("0toi")
          , w = s("Ht+d")
          , y = s("0Rlc")
          , B = s("MV/q")
          , x = s("6krn")
          , k = function() {
            for (var e = 0, t = 0, s = arguments.length; t < s; t++)
                e += arguments[t].length;
            var o = Array(e)
              , n = 0;
            for (t = 0; t < s; t++)
                for (var i = arguments[t], a = 0, c = i.length; a < c; a++,
                n++)
                    o[n] = i[a];
            return o
        }
          , C = []
          , S = ""
          , T = function() {
            var e = Object(f.useState)(!1)
              , t = e[0]
              , s = e[1]
              , o = Object(f.useState)("")
              , n = o[0]
              , i = o[1]
              , a = Object(f.useState)([])
              , c = a[0]
              , r = a[1]
              , l = function(e, t) {
                r(t ? k(c, [e]).sort((function(e, t) {
                    return e - t
                }
                )) : c.filter((function(t) {
                    return t !== e
                }
                )))
            }
              , u = c.length > 0 || t && n.length > 0;
            return m.a.createElement(v.default, {
                appearance: "blue",
                actionButtons: m.a.createElement(m.a.Fragment, null, m.a.createElement(w.default, {
                    appearance: "tertiary",
                    onClick: P
                }, Object(x.getLang)("global_cancel")), m.a.createElement(w.default, {
                    disabled: !u,
                    onClick: function() {
                        return function(e) {
                            var t = e.selectedPollVariants
                              , s = e.otherText
                              , o = t.map((function(e) {
                                return C[e]
                            }
                            ));
                            s && o.push(s);
                            P(),
                            N(!1, o)
                        }({
                            selectedPollVariants: c,
                            otherText: n
                        })
                    }
                }, Object(x.getLang)("settings_settings_new_design_turn_off"))),
                title: Object(x.getLang)("settings_new_design_poll_title"),
                onClose: P
            }, m.a.createElement("div", {
                className: "RedesignPollPopup__body"
            }, m.a.createElement("div", {
                className: "RedesignPollPopup__question"
            }, Object(x.getLang)("settings_new_design_poll_why")), C.map((function(e, t) {
                return m.a.createElement("div", {
                    key: e,
                    className: "RedesignPollPopup__checkbox"
                }, m.a.createElement(y.default, {
                    name: t,
                    onChange: l
                }, e))
            }
            )), m.a.createElement("div", {
                className: "RedesignPollPopup__checkbox"
            }, m.a.createElement(y.default, {
                onChange: function(e, t) {
                    s(t)
                }
            }, Object(x.getLang)("settings_new_design_poll_variant_other"))), t && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                className: "RedesignPollPopup__otherLabel"
            }, Object(x.getLang)("settings_new_design_poll_variant_other_hint")), m.a.createElement(B.default, {
                onChange: function(e) {
                    var t = e.target.value;
                    i(t)
                },
                value: n,
                maxLength: "200"
            }))))
        }
          , L = function() {
            return document.querySelector("#redesignPollPopup")
        };
        function P() {
            var e = L();
            e && j.a.unmountComponentAtNode(e)
        }
        function N(e, t) {
            void 0 === t && (t = []),
            window.ajax.post("al_settings.php", {
                act: "toggle_redesign",
                redesign: e ? 1 : 0,
                hash: S,
                reason: t
            }, {
                onDone: function() {},
                onFail: function() {
                    return !0
                }
            })
        }
        var M = {
            toggleRedesign: function(e, t, s) {
                void 0 === s && (s = !0),
                S = e,
                C = [Object(x.getLang)("settings_new_design_poll_variant_unusual"), Object(x.getLang)("settings_new_design_poll_variant_ugly"), Object(x.getLang)("settings_new_design_poll_variant_slow"), Object(x.getLang)("settings_new_design_poll_variant_no_functions"), Object(x.getLang)("settings_new_design_poll_variant_no_time"), Object(l.langSex)(window.vk.sex, Object(x.getLang)("settings_new_design_poll_variant_random", !0)), Object(l.langSex)(window.vk.sex, Object(x.getLang)("settings_new_design_poll_variant_curious", !0))],
                t || s ? N(t) : j.a.render(m.a.createElement(T, null), L())
            },
            go: function(e, t) {
                var s = M.getsect();
                return !1 === Object(c.checkEvent)(t) && (s.className = "",
                e.parentNode.className = "active_link"),
                nav.go(e, t)
            },
            getsect: function() {
                for (var e = Object(o.ge)("settings_filters").firstChild; !Object(o.hasClass)(e, "active_link"); )
                    e = e.nextSibling;
                return e
            },
            showMsg: function(e, t) {
                t || (t = Object(o.ge)("settings_result")),
                e ? (Object(i.showMsg)(t, e, "ok_msg", !0),
                Object(o.show)(t)) : Object(o.hide)(t),
                Object(a.scrollToTop)(0)
            },
            showError: function(e, t) {
                e = e || Object(l.getLang)("global_unknown_error");
                var s = t ? Object(o.ge)("settings_error_" + t) : Object(o.ge)("settings_result");
                Object(i.showMsg)(s, e, "error", !0),
                Object(o.show)(s),
                t || Object(a.scrollToTop)(0)
            },
            toggleBlock: function(e, t) {
                var s, n;
                e && e.target ? (s = e.target,
                n = Object(o.hasClass)(s, "settings_line") ? s : Object(o.gpeByClass)("settings_line", s)) : (e = Object(o.ge)(e),
                s = Object(o.geByClass1)("settings_right_control", e),
                n = Object(o.hasClass)(e, "settings_line") ? e : Object(o.gpeByClass)("settings_line", e)),
                n && Object(o.geByClass1)("settings_change_block", n) && (!Object(o.hasClass)(n, "unfolded") || Object(o.hasClass)(s, "settings_right_control")) && (cur.changingSetting && cur.changingSetting !== n && (Object(o.removeClass)(cur.changingSetting, "unfolded"),
                window.tooltips && tooltips.hideAll()),
                Object(o.toggleClass)(n, "unfolded"),
                cur.changingSetting = n,
                t && Object(o.elfocus)(t))
            },
            savePrivacyKey: function(e) {
                if ("friends" !== e) {
                    var t, s = {
                        key: e,
                        val: Privacy.getValue(e),
                        hash: cur.options.hash
                    };
                    if ("search_access" === e || "updates" === e || "company_messages" === e || "profile_closed" === e || "is_recognize_photo_me_enabled" === e) {
                        if ("updates" === e) {
                            var n = Privacy.getValue(e);
                            if ("0" !== n.substr(0, 1))
                                n.substr(2).length || (Object(o.ge)("privacy_header").innerHTML = Object(o.ge)("privacy_edit_updates").innerHTML = Object(l.getLang)("settings_updates_no_news"))
                        }
                        t = "al_settings.php",
                        s.act = "a_save_special"
                    } else
                        t = "al_friends.php",
                        s.act = "save_privacy";
                    clearTimeout(cur["privacy_timer_" + e]),
                    cur["privacy_timer_" + e] = setTimeout(ajax.post.pbind(t, s, {
                        onDone: function(t) {
                            if (t)
                                return nav.reload({
                                    preventScroll: !0,
                                    onDone: function(e) {
                                        M.savePrivacyShowSaved(e),
                                        updateNarrow()
                                    }
                                    .pbind(e)
                                });
                            M.savePrivacyShowSaved(e)
                        }
                    }), 500)
                } else
                    window.uiPageBlock && uiPageBlock.showSaved("privacy_friends_hide")
            },
            savePrivacyShowSaved: function(e) {
                window.uiPageBlock && uiPageBlock.showSaved("privacy_edit_" + e)
            },
            initPrivacy: function() {
                if (cur.onPrivacyChanged = M.savePrivacyKey,
                cur.privacyNeedConfirm = function(e, t, s) {
                    if ("profile_closed" === e && Object(n.intval)(t)) {
                        var o = new MessageBox({
                            title: Object(l.getLang)("settings_closed_profile_confirm_title")
                        });
                        return o.content(Object(l.getLang)("settings_closed_profile_confirm_text")),
                        o.removeButtons().addButton(Object(l.getLang)("settings_closed_profile_confirm_btn"), (function() {
                            s(),
                            o.hide()
                        }
                        )),
                        o.addButton(Object(l.getLang)("global_cancel"), o.hide, "no"),
                        void o.show()
                    }
                    s()
                }
                ,
                nav.objLoc.hl) {
                    var e = Object(o.geByClass1)("_" + nav.objLoc.hl);
                    M.scrollHighlightPrivacy(e)
                }
            },
            highlightPrivacy(e) {
                (e = Object(o.ge)(e)) && (Object(o.addClass)(e, "setting_row_selected"),
                Object(o.addClassDelayed)(e, "setting_row_animated", 1500),
                Object(o.removeClassDelayed)(e, "setting_row_selected", 2500),
                Object(o.removeClassDelayed)(e, "setting_row_animated", 2500))
            },
            scrollHighlightPrivacy: function(e) {
                (e = Object(o.ge)(e)) && setTimeout((function() {
                    var t = Object(o.getXY)(e)[1]
                      , s = Object(o.getSize)("page_header")[1]
                      , n = Object(a.scrollGetY)()
                      , i = Object(o.clientHeight)();
                    t < s + n || t > n + i ? (Object(a.scrollToY)(t),
                    setTimeout(M.highlightPrivacy.pbind(e), 300)) : M.highlightPrivacy(e)
                }
                ), 0)
            },
            initSearchBox: function(e, t, s) {
                Object(n.extend)(cur, t),
                s && ajax.preload(cur.searchBoxAddress, cur.searchBoxParams, s),
                window.uiScrollBox && uiScrollBox.init(e, {
                    onShow: function() {
                        Object(c.addEvent)(boxLayerWrap, "scroll", M.boxScrollResize),
                        setTimeout(M.boxScrollResize, 0)
                    },
                    onHide: function() {
                        Object(c.removeEvent)(boxLayerWrap, "scroll", M.boxScrollResize)
                    }
                }),
                Object(c.addEvent)(boxLayerWrap, "scroll", M.boxScrollResize),
                M.boxScrollResize()
            },
            boxScrollResize: function() {
                if (!browser.mobile) {
                    var e = lastWindowHeight
                      , t = Object(o.ge)(cur.boxMoreLink);
                    t && Object(o.isVisible)(t) && e > Object(o.getXY)(t, !0)[1] && cur.boxShowMore()
                }
            },
            moreSearchBoxLoaded: function(e, t, s) {
                cur.loading = !1,
                cur.searchBoxParams.offset = t;
                var n = cur.boxRows
                  , i = Object(o.ce)("div", {
                    innerHTML: e
                });
                for (Object(o.toggle)(cur.boxMoreLink, s); i.firstChild; )
                    n.appendChild(i.firstChild)
            },
            moreSearchBox: function(e, t, s) {
                var i = cur.boxMoreLink;
                !(e || Object(o.isVisible)(i) && !Object(o.hasClass)(i, "loading")) || e && s == cur.searchBoxParams.q || (cur.loading ? cur.loading = 2 : (e && (cur.oldBoxParams = {
                    q: cur.searchBoxParams.q,
                    offset: cur.searchBoxParams.offset
                },
                Object(n.extend)(cur.searchBoxParams, {
                    q: s,
                    offset: 0
                })),
                ajax.post(cur.searchBoxAddress, cur.searchBoxParams, {
                    onDone: function(s, i, a, c) {
                        if (e) {
                            if (c)
                                return Object(n.extend)(cur.searchBoxParams, cur.oldBoxParams),
                                Object(o.val)(t, cur.oldBoxParams.q),
                                void (cur.searchBoxFound && cur.searchBoxFound(c));
                            cur.boxRows.innerHTML = s ? "" : cur.boxNoRowsTpl,
                            curBox().tbToTop()
                        }
                        M.moreSearchBoxLoaded.apply(window, arguments)
                    },
                    onFail: function() {
                        return cur.loading = 0,
                        !0
                    },
                    showProgress: function() {
                        Object(o.addClass)(i, "loading")
                    },
                    hideProgress: function() {
                        Object(o.removeClass)(i, "loading")
                    }
                })))
            },
            moreSearchBoxChange: function(e, t) {
                t && "paste" == t.type ? M.moreSearchBox(!0, curBox().tbSearchField, e) : e.length || M.moreSearchBox(!0, curBox().tbSearchField, "")
            },
            initBlacklist: function() {
                Object(o.ge)("settings_bl_msg") && setTimeout(o.removeClass.pbind(Object(o.ge)("settings_bl_msg"), "msg_appear"), 0),
                Object(o.elfocus)("settings_bl_search")
            },
            searchBlacklist: function(e) {
                e && (e = e.toLowerCase());
                var t = Object(o.ge)("settings_bl_empty")
                  , s = Object(l.getLang)("settings_blacklist_not_found_by_query")
                  , n = Object(o.ge)("settings_bl_list")
                  , i = 0;
                Array.from(Object(o.geByClass)("settings_bl_row", n)).forEach(t=>{
                    if (e) {
                        var s = Object(o.geByClass1)("settings_bl_name", t);
                        (Object(o.val)(Object(o.geByTag1)("a", s)) || Object(o.val)(Object(o.geByClass1)("name_label"))).toLowerCase().indexOf(e) > -1 ? (Object(o.show)(t),
                        i++) : Object(o.hide)(t)
                    } else
                        Object(o.show)(t),
                        i++
                }
                ),
                e && !i ? (t.innerHTML = s.split("{query}").join("<b>" + e.replace(/([<>&#]*)/g, "") + "</b>"),
                Object(o.show)(t),
                Object(o.hide)("settings_bl_noempty")) : (Object(o.hide)(t),
                Object(o.show)("settings_bl_noempty"))
            },
            doAddToBlacklist: function(e, t) {
                ajax.post("al_settings.php", {
                    act: "search_blacklist",
                    query: e,
                    hash: cur.options.blacklist_hash
                }, {
                    onDone: function(e, t, s) {
                        curBox().emit("success", s),
                        curBox().hide();
                        var n = Object(o.ge)("settings_bl_summary");
                        e && -1 != e && n && (n.innerHTML = Object(l.langNumeric)(e, "%s", !0));
                        var a = Object(o.ce)("div", {
                            innerHTML: t
                        }).firstChild
                          , c = Object(o.ge)("settings_bl_list");
                        Object(o.re)(a.id),
                        c && (c.insertBefore(a, c.firstChild),
                        Object(o.show)("settings_bl_noempty"),
                        Object(o.hide)("settings_bl_empty"),
                        Object(i.showMsg)("settings_bl_result", s, "ok_msg", !0))
                    },
                    onFail: function(e) {
                        return Object(i.showMsg)("settings_search_rows", e, "error", !0),
                        !0
                    },
                    showProgress: function() {
                        "BUTTON" === t.tagName ? Object(r.lockButton)(t) : uiSearch.showProgress(t)
                    },
                    hideProgress: function() {
                        "BUTTON" === t.tagName ? Object(r.unlockButton)(t) : uiSearch.hideProgress(t)
                    }
                })
            },
            addToBlacklist: function() {
                return showBox("al_settings.php", {
                    act: "blacklist_box"
                }, {
                    params: {
                        dark: !0
                    }
                }),
                !1
            },
            addToBl: function(e, t, s) {
                ajax.post("al_settings.php", {
                    act: "a_add_to_bl",
                    id: e,
                    hash: t,
                    from: "settings"
                }, {
                    onDone: function(n) {
                        n && (Object(o.ge)("settings_bl_summary").innerHTML = Object(l.langNumeric)(n, "%s", !0)),
                        Object(o.hide)("settings_bl_label" + e),
                        s.onclick = function() {
                            return M.delFromBl(e, t, s),
                            !1
                        }
                        ,
                        s.innerHTML = Object(l.getLang)("settings_remove")
                    },
                    onFail: function(e) {
                        return setTimeout(Object(h.showFastBox)({
                            title: Object(l.getLang)("global_error"),
                            dark: 1,
                            bodyStyle: "padding: 20px; line-height: 160%;"
                        }, e).hide, 2e3),
                        !0
                    },
                    showProgress: function() {
                        Object(o.hide)(s),
                        Object(o.show)("settings_progress" + e)
                    },
                    hideProgress: function() {
                        Object(o.show)(s),
                        Object(o.hide)("settings_progress" + e)
                    }
                })
            },
            delFromBl: function(e, t, s) {
                ajax.post("al_settings.php", {
                    act: "a_del_from_bl",
                    id: e,
                    hash: t,
                    from: "settings"
                }, {
                    onDone: function(n) {
                        Object(o.ge)("settings_bl_summary").innerHTML = n ? Object(l.langNumeric)(n, "%s", !0) : "",
                        Object(o.setStyle)("settings_bl_label" + e, "display", "inline"),
                        s.onclick = function() {
                            return M.addToBl(e, t, s),
                            !1
                        }
                        ,
                        s.innerHTML = Object(l.getLang)("settings_restore_blacklist")
                    },
                    onFail: function(e) {
                        return setTimeout(Object(h.showFastBox)({
                            title: Object(l.getLang)("global_error"),
                            dark: 1,
                            bodyStyle: "padding: 20px; line-height: 160%;"
                        }, e).hide, 2e3),
                        !0
                    },
                    showProgress: function() {
                        Object(o.hide)(s),
                        Object(o.show)("settings_progress" + e)
                    },
                    hideProgress: function() {
                        Object(o.show)(s),
                        Object(o.hide)("settings_progress" + e)
                    }
                })
            },
            delTopFromBl: function(e, t, s) {
                var n = Object(o.ce)("img", {
                    src: "/images/upload.gif"
                });
                ajax.post("al_settings.php", {
                    act: "a_del_from_bl",
                    id: e,
                    hash: t,
                    from: "settings"
                }, {
                    onDone: function(s) {
                        s && (Object(o.ge)("settings_bl_summary").innerHTML = s ? Object(l.langNumeric)(s, "%s", !0) : ""),
                        Object(o.setStyle)("settings_bl_label" + e, "display", "inline");
                        var n = Object(o.geByTag1)("a", Object(o.geByClass1)("settings_bl_action", Object(o.ge)("settings_bl_row" + e)));
                        n.onclick = function() {
                            return M.addToBl(e, t, n),
                            !1
                        }
                        ,
                        n.innerHTML = Object(l.getLang)("settings_restore_blacklist"),
                        Object(o.hide)("settings_bl_result")
                    },
                    showProgress: function() {
                        s.parentNode.replaceChild(n, s)
                    },
                    hideProgress: function() {
                        n.parentNode.replaceChild(s, n)
                    }
                })
            },
            saveSmsNotify: function(e) {
                Object(r.lockButton)(e);
                var t = {
                    act: "a_save_sms_notify",
                    hash: cur.options.notify_hash
                };
                Object(n.each)(cur.options.notify_sms_keys, (function(e, s) {
                    t[s] = Privacy.getValue(s)
                }
                )),
                t.smsenabled = Object(r.isChecked)("smsenabled") ? 1 : 0,
                Object(r.isChecked)("daytime") ? (t.daytime_from = Object(o.ge)("daytime_from").value,
                t.daytime_to = Object(o.ge)("daytime_to").value) : (t.daytime_from = 0,
                t.daytime_to = 0),
                Object(o.val)("settings_notify_sms_result", ""),
                ajax.post("al_settings.php", t, {
                    onDone: function(t, s, o) {
                        Object(r.unlockButton)(e),
                        s && o ? Object(h.showFastBox)({
                            title: t,
                            dark: 1,
                            bodyStyle: "padding: 20px; line-height: 160%;"
                        }, s, Object(l.getLang)("settings_subscribe_to_service_btn"), (function() {
                            window.open(o),
                            curBox().hide()
                        }
                        ), Object(l.getLang)("box_cancel"), (function() {
                            Object(r.checkbox)("smsenabled", 0),
                            M.smsNotifyCheck(),
                            M.saveSmsNotify(),
                            curBox().hide()
                        }
                        )) : Object(i.showMsg)("settings_notify_sms_result", t, "ok_msg", !0)
                    },
                    onFail: function(t) {
                        Object(r.unlockButton)(e),
                        Object(r.checkbox)("smsenabled", 0),
                        M.smsNotifyCheck(),
                        M.saveSmsNotify()
                    }
                })
            },
            updateInstantSounds: function(e) {
                Object(o.toggleClass)(Object(o.geByClass1)("_ui_toggler", e), "on"),
                p.default.set("sound_notify_off", Object(o.hasClass)(Object(o.geByClass1)("_settings_isounds"), "on") ? 0 : 1),
                uiPageBlock.showSaved(e)
            },
            saveSiteNotify: function(e) {
                Object(o.toggleClass)(Object(o.geByClass1)("_ui_toggler", e), "on");
                var t = {
                    act: "a_save_site_notify",
                    hash: cur.options.notify_hash,
                    ienable: Object(o.hasClass)(Object(o.geByClass1)("_settings_ienable"), "on") ? 1 : 0,
                    itexts: Object(o.hasClass)(Object(o.geByClass1)("_settings_itexts"), "on") ? 1 : 0
                };
                Object(n.each)(Object(o.geByClass)("_settings_nf_bt"), (function(e, s) {
                    t["nf_bt_" + s.getAttribute("data-id")] = +Object(o.hasClass)(s, "on")
                }
                )),
                cur.options.notify_privacy_keys && cur.options.notify_privacy_keys.forEach((function(e) {
                    t["nf_" + e] = 0 | Privacy.getValue(e)
                }
                )),
                clearTimeout(cur.instantNotifyTO),
                clearTimeout(cur.instantNotifySaveTO),
                cur.instantNotifyTO = setTimeout(ajax.post.pbind("al_settings.php", t, {
                    onDone: function() {
                        cur.instantNotifySaveTO = setTimeout(window.uiPageBlock && uiPageBlock.showSaved.pbind(e), 1e3)
                    }
                }), 500),
                TopNotifier && TopNotifier.invalidate()
            },
            saveBrowserNotify: function(e) {
                var t = "browser_notification"
                  , s = Object(o.ge)("privacy_edit_" + t)
                  , n = Number(Privacy.getValue(t));
                Object(o.addClass)(s, "privacy_link_disabled"),
                pushNotifier.canBeEnabled().then((function(i) {
                    i ? pushNotifier.setupSubscription().then((function() {
                        return Object(o.removeClass)(s, "privacy_link_disabled"),
                        pushNotifier.setState(n, cur.options.push_notify_hash)
                    }
                    )).catch((function(n) {
                        u.default.PUSH_NOTIFIER_BLOCKED_BY_BROWSER_SETTINGS === n ? pushNotifier.showPopupAllowNotification() : Object(h.showFastBox)(Object(l.getLang)("global_error"), Object(l.getLang)("notifications_native_common_error")),
                        Privacy.setValue(t, e),
                        Object(o.removeClass)(s, "privacy_link_disabled")
                    }
                    )) : (Privacy.setValue(t, e),
                    Object(o.removeClass)(s, "privacy_link_disabled"),
                    Object(h.showFastBox)(Object(l.getLang)("global_error"), Object(l.getLang)("notifications_native_common_error")))
                }
                ))
            },
            saveGroupNotify: function(e, t) {
                if (Object(o.hasClass)(Object(o.geByClass1)("_ui_toggler", e), "ui_toggler_disable"))
                    return !1;
                Object(o.toggleClass)(Object(o.geByClass1)("_ui_toggler", e), "on");
                var s = {
                    act: "a_save_group_notify",
                    hash: cur.options.notify_hash,
                    gid: t
                };
                Object(n.each)(Object(o.geByClass)("ui_toggler", Object(o.domClosest)("wide_column", e)), (function(e, t) {
                    s[t.getAttribute("data-id")] = +Object(o.hasClass)(t, "on")
                }
                )),
                clearTimeout(cur.instantNotifyTO),
                clearTimeout(cur.instantNotifySaveTO),
                cur.instantNotifyTO = setTimeout(ajax.post.pbind("al_settings.php", s, {
                    onDone: function() {
                        cur.instantNotifySaveTO = setTimeout(window.uiPageBlock && uiPageBlock.showSaved.pbind(e), 1e3)
                    }
                }), 500),
                TopNotifier && TopNotifier.invalidate()
            },
            checkboxSiteNotify: function(e, t) {
                t.target && Object(o.hasClass)(t.target, "item_sel") || (Object(r.checkbox)(e),
                M.saveSiteNotify(e))
            },
            saveMailNotify: function(e) {
                var t = {
                    act: "a_save_mail_notify",
                    hash: cur.options.notify_hash,
                    mail_period: Privacy.getValue("mail_period")
                };
                Object(n.each)(cur.options.notify_mail_keys, (function(e, s) {
                    t[s] = Object(r.isChecked)(s) ? 1 : 0
                }
                )),
                clearTimeout(cur.mailNotifyTO),
                cur.mailNotifyTO = setTimeout(ajax.post.pbind("al_settings.php", t, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind(e)
                }), 500)
            },
            saveNotifyPrivacyKey: function(e, t) {
                "browser_notification" === e ? M.saveBrowserNotify(t) : "mail_period" === e ? (M.saveMailNotify("privacy_edit_" + e),
                3 == Privacy.getValue(e) ? Object(o.hide)("mail_options") : Object(o.show)("mail_options")) : cur.options.notify_privacy_keys && ~cur.options.notify_privacy_keys.indexOf(e) ? M.saveSiteNotify("privacy_edit_" + e) : "sms_pm_notify" === e && (0 != Privacy.getValue(e) ? Object(o.hide)("sms_pm_privacy_row") : Object(o.show)("sms_pm_privacy_row"))
            },
            initNotify: function() {
                cur.options.msg && M.showMsg(cur.options.msg);
                var e = Object(o.geByClass1)("_settings_isounds");
                Object(o.toggleClass)(e, "on", !p.default.get("sound_notify_off")),
                Object(o.removeClassDelayed)(e, "no_transition"),
                cur.reloadOnMailBind = !0,
                cur.onPrivacyChanged = M.saveNotifyPrivacyKey;
                for (var t = [], s = 24; s--; )
                    t.unshift((s < 10 ? "0" : "") + s + ":00");
                var n = Object(o.ge)("daytime_from")
                  , i = Object(o.ge)("daytime_to");
                n && i && (void 0 !== cur.options.time_from && new Dropdown(n,t,{
                    selectedItems: cur.options.time_from
                }),
                void 0 !== cur.options.time_to && new Dropdown(i,t,{
                    selectedItems: cur.options.time_to
                }))
            },
            smsNotifyCheck: function() {
                Object(r.isChecked)("smsenabled") ? (slideDown(Object(o.ge)("sms_options"), 200),
                Object(o.show)("sms_options_msg")) : Object(o.isVisible)("sms_options") && (Object(o.hide)("sms_options_msg"),
                slideUp(Object(o.ge)("sms_options"), 200))
            },
            smsDayTimeCheck: function() {
                Object(r.isChecked)("daytime") ? slideDown(Object(o.ge)("daytime_from_to"), 200) : slideUp(Object(o.ge)("daytime_from_to"), 200)
            },
            checkPIN: function(e) {
                var t = e.value.replace(/[^0-9]/g, "");
                e.value !== t && (e.value = t)
            },
            updatePIN: function(e) {
                Object(r.lockButton)(Object(o.ge)("pin_btn")),
                Object(o.val)("settings_pin_result", "");
                var t = {
                    act: "a_change_pin",
                    pin: Object(o.ge)("pin").value,
                    hash: e
                };
                ajax.post("al_settings.php", t, {
                    onDone: function(e) {
                        Object(r.unlockButton)(Object(o.ge)("pin_btn")),
                        Object(o.val)("settings_pin_value", t.pin),
                        Object(i.showMsg)("settings_pin_result", e, "ok_msg", !0)
                    },
                    onFail: function(e) {
                        return Object(r.unlockButton)(Object(o.ge)("pin_btn")),
                        Object(i.showMsg)("settings_pin_result", e, "error", !0),
                        !0
                    }
                })
            },
            getAdminSelectShowCt: function(e) {
                return Object.keys(e).filter((function(t) {
                    return e[t]
                }
                )).length
            },
            initMenuBox: function(e, t, s) {
                this.initMenuEvents(e),
                e.setOptions({
                    onHide: function() {
                        cur.adminGroupsDirty && (window.Notifier && Notifier.resetCommConnection(),
                        ajax.post("al_settings.php", {
                            act: "a_get_left_menu"
                        }, {
                            onDone: function(e) {
                                Object(o.geByTag1)("ol", Object(o.ge)("side_bar")).innerHTML = e
                            }
                        })),
                        2 == t && Object(n.isFunction)(cur.settingsBoxSetLeftMenuAppCallback) && cur.settingsBoxSetLeftMenuAppCallback(!1)
                    }
                }),
                cur.menuSettings = s,
                this.updateMenuBoxCount(t)
            },
            initMenuEvents: function(e) {
                var t = Object(o.geByClass1)("olist", e.bodyNode)
                  , s = Object(o.geByClass1)("summary_tabs", e.bodyNode);
                Object(o.setStyle)(s, "display", "inline-block");
                var n = Object(o.getSize)(s)[0] + parseInt(Object(o.getStyle)(s, "marginLeft")) + parseInt(Object(o.getStyle)(s, "marginRight"));
                n > 450 && e.setOptions({
                    width: Math.ceil(n)
                }),
                Object(o.setStyle)(s, "display", null),
                Object(c.addEvent)(t, "scroll", this.onMenuBoxScroll.pbind(e, t)),
                this.onMenuBoxScroll(e, t)
            },
            onMenuBoxScroll: function(e, t) {
                var s = Object(o.domPN)(e.bodyNode)
                  , n = t.scrollHeight
                  , i = t.scrollTop
                  , a = t.offsetHeight || t.clientHeight;
                Object(o.toggleClass)(s, "olist_topsh", i > 0),
                Object(o.toggleClass)(s, "olist_botsh", i + a < n)
            },
            updateMenuBoxCount: function(e) {
                var t = curBox()
                  , s = cur.menuSettings[e] || {}
                  , o = M.getAdminSelectShowCt(s)
                  , n = "";
                if (1 == e || 2 == e) {
                    var i = cur.menuSettings.limits[e];
                    n = '<span class="settings_menu_box_counter">' + Object(l.getLang)("settings_admin_groups_left").replace("{count}", o).replace("{amt}", i) + "</span>"
                }
                t.setControlsText(n)
            },
            toggleMenuBoxRow: function(e, t, s) {
                var n = cur.menuSettings[t] || {}
                  , i = M.getAdminSelectShowCt(n)
                  , a = n[s];
                if (curBox().changed = !0,
                1 == t || 2 == t) {
                    var c = cur.menuSettings.limits[t];
                    if (Object(o.toggleClass)(Object(o.gpeByClass)("olist_section", e), "settings_menu_rows_disabled", !a && i >= c - 1),
                    !a && i >= c)
                        return !1
                }
                return Object(o.toggleClass)(e, "olist_item_wrap_on", !a),
                n[s] = a ? 0 : 1,
                M.updateMenuBoxCount(t),
                !1
            },
            switchMenuBoxSection: function(e, t) {
                var s = curBox();
                Object(n.each)(Object(o.geByClass)("olist_section", s.bodyNode), (function() {
                    Object(o.hide)(this)
                }
                )),
                Object(o.show)("settings_menu_" + t),
                Object(o.geByClass1)("olist", s.bodyNode).scrollTop = 0,
                M.updateMenuBoxCount(t)
            },
            saveMenu: function(e, t) {
                for (var s = curBox(), i = [], a = [], c = [], l = [], u = {
                    hash: e,
                    act: "a_change_services"
                }, p = !1, d = function(e) {
                    var t = cur.menuSettings[e] || {};
                    Object(n.each)(t, (function(t, s) {
                        switch (e) {
                        case 1:
                            s && a.push(t);
                            break;
                        case 2:
                            c.push(t),
                            s && (cur.aid == t && (p = !0),
                            i.push(t));
                            break;
                        case 3:
                            s || l.push(t);
                            break;
                        default:
                            u[t] = s
                        }
                    }
                    ))
                }, _ = 0; _ <= 3; _++)
                    d(_);
                c.length && (u.apps_all = c.join(","),
                u.apps_on = i.join(",")),
                u.groups_list = a.join(","),
                u.service_hidden = l.join(","),
                ajax.post("al_settings.php", u, {
                    onDone: function(e) {
                        Object(o.geByTag1)("ol", Object(o.ge)("side_bar")).innerHTML = e,
                        window.uiPageBlock && uiPageBlock.showSaved("settings_services"),
                        Object(n.isFunction)(cur.settingsBoxSetLeftMenuAppCallback) && cur.settingsBoxSetLeftMenuAppCallback(p),
                        s.hide(),
                        window.Apps && window.Apps.updateAddToMenuAction()
                    },
                    showProgress: r.lockButton.pbind(t),
                    hideProgress: r.unlockButton.pbind(t)
                })
            },
            giftsCheck: function() {
                clearTimeout(cur.giftsUpdateTO),
                cur.giftsUpdateTO = setTimeout(M.giftsSubmit, 200)
            },
            giftsSubmit: function() {
                ajax.post("/al_profile.php", {
                    act: "hide_gifts",
                    hash: cur.options.hide_gifts_hash,
                    shown: Object(o.ge)("settings_hide_gifts").checked ? 0 : 1
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("cposts")
                })
            },
            gifCheck: function() {
                clearTimeout(cur.gifUpdateTO),
                cur.gifUpdateTO = setTimeout(M.gifSubmit, 200)
            },
            gifSubmit: function() {
                ajax.post("/al_settings.php", {
                    act: "a_change_autoplay_gif",
                    hash: cur.options.gif_autoplay_hash,
                    no_autoplay: Object(o.ge)("settings_gif_autoplay").checked ? 0 : 1
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("cposts")
                })
            },
            accessCheck: function() {
                clearTimeout(cur.accessUpdateTO),
                cur.accessUpdateTO = setTimeout(M.accessSubmit, 200)
            },
            accessSubmit: function() {
                ajax.post("/al_settings.php", {
                    act: "a_toggle_access_mode",
                    hash: cur.options.a11y_hash,
                    mode: Object(n.intval)(Object(o.ge)("settings_a11y").checked)
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("settings_a11y")
                })
            },
            stickersHintsCheck: function() {
                clearTimeout(cur.stickersHintsTO),
                cur.stickersHintsTO = setTimeout(M.stickersHintsSubmit, 200)
            },
            stickersHintsSubmit: function() {
                ajax.post("/al_settings.php", {
                    act: "a_change_stickers_hints",
                    hash: cur.options.stickers_hints_hash,
                    hints: Object(o.ge)("settings_stickers_hints").checked ? 1 : 0
                }, {
                    onDone: function() {
                        window.uiPageBlock && uiPageBlock.showSaved("cposts"),
                        window.Emoji && Emoji.updateTabs.apply(window, arguments)
                    }
                })
            },
            videoCheck: function() {
                clearTimeout(cur.videoUpdateTO),
                cur.videoUpdateTO = setTimeout(M.videoSubmit, 200)
            },
            videoSubmit: function() {
                ajax.post("/al_settings.php", {
                    act: "a_change_autoplay_video",
                    hash: cur.options.video_autoplay_hash,
                    video_autoplay: Object(o.ge)("settings_video_autoplay").checked ? 1 : 0
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("cposts")
                })
            },
            videostartCheck: function() {
                clearTimeout(cur.videostartUpdateTO),
                cur.videostartUpdateTO = setTimeout(M.videostartSubmit, 200)
            },
            videostartSubmit: function() {
                ajax.post("/al_settings.php", {
                    act: "a_change_autostart_video",
                    hash: cur.options.video_autostart_hash,
                    video_autostart: Object(o.ge)("settings_video_autostart").checked ? 1 : 0
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("cposts")
                })
            },
            hintachCheck: function() {
                clearTimeout(cur.hintachUpdateTO),
                cur.hintachUpdateTO = setTimeout(M.hintachSubmit, 200)
            },
            hintachSubmit: function() {
                ajax.post("/al_settings.php", {
                    act: "a_change_hintach",
                    hash: cur.options.hintach_hash,
                    hintach: Object(o.ge)("settings_hintach").checked ? 1 : 0
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("cposts")
                })
            },
            drCheck: function() {
                clearTimeout(cur.drUpdateTO),
                cur.drUpdateTO = setTimeout(M.drSubmit, 200)
            },
            drSubmit: function() {
                ajax.post("/al_settings.php", {
                    act: "a_change_dr",
                    hash: cur.options.dr_hash,
                    dr: Object(o.ge)("settings_dr").checked ? 1 : 0
                }, {
                    onDone: nav.reload.pbind()
                })
            },
            externalAuthCheck: function() {
                clearTimeout(cur.externalAuthUpdateTO),
                cur.externalAuthUpdateTO = setTimeout((function() {
                    ajax.post("al_settings.php", {
                        act: "a_change_external_auth",
                        hash: cur.options.external_auth_hash,
                        state: Object(o.ge)("settings_external_auth").checked ? 1 : 0
                    }, {
                        onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("cposts")
                    })
                }
                ), 200)
            },
            videoadsCheck: function() {
                clearTimeout(cur.videoadsUpdateTO),
                cur.videoadsUpdateTO = setTimeout(M.videoadsSubmit, 200)
            },
            videoadsSubmit: function() {
                ajax.post("/al_settings.php", {
                    act: "a_change_ads_video",
                    hash: cur.options.video_ads_hash,
                    video_ads: Object(o.ge)("settings_video_ads").checked ? 1 : 0
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("cposts")
                })
            },
            vkPayEndpointCheck: function() {
                clearTimeout(cur.vkPayEndpointUpdateTO),
                cur.vkPayEndpointUpdateTO = setTimeout(M.vkPayEndpointSubmit, 200)
            },
            vkPayEndpointSubmit: function() {
                ajax.post("/al_settings.php", {
                    act: "a_change_vk_pay_endpoint",
                    hash: cur.options.vk_pay_endpoint_hash,
                    vk_pay_endpoint: Object(o.ge)("settings_vk_pay_endpoint").checked ? 1 : 0
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("cposts")
                })
            },
            microblogCheck: function(e) {
                Object(o.hasClass)(Object(o.ge)("settings_" + e), "disabled") || Object(o.ge)("settings_" + e).disabled || (clearTimeout(cur.microblogUpdateTO),
                cur.microblogUpdateTO = setTimeout(M.microblogSubmit, 200))
            },
            microblogSubmit: function() {
                var e = {
                    act: "a_change_microblog",
                    hash: cur.options.microblog_hash
                };
                Object(n.each)(["status_default", "no_wall_replies"], (function(t, s) {
                    var n = Object(o.ge)("settings_" + s);
                    n && (e[s] = n.checked ? 1 : 0)
                }
                )),
                ajax.post("/al_settings.php", e, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("cposts")
                })
            },
            photoTagFriendsCheck: function() {
                clearTimeout(cur.photoAutoTagFriendsUpdateTO),
                cur.photoAutoTagFriendsUpdateTO = setTimeout(M.photoTagFriendsSubmit, 200)
            },
            photoTagFriendsSubmit: function() {
                ajax.post("/al_settings.php", {
                    act: "a_change_autotag_friends",
                    hash: cur.options.autotag_friends_hash,
                    autotag_friends: Object(o.ge)("settings_autotag_friends").checked ? 1 : 0
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("cposts")
                })
            },
            OTPAuthEnable: function(e) {
                return showBox("al_settings.php", {
                    act: "otp_auth_box",
                    confirm: e,
                    hash: cur.options.otp_hash
                }, {
                    params: {
                        dark: !0
                    }
                }),
                !1
            },
            OTPAuthAppSet: function(e) {
                var t = {
                    act: "otp_auth_app_box"
                };
                return e ? (curBox().hide(),
                t.force = 1,
                t.hash = e) : t.hash = cur.options.otp_hash,
                showBox("al_settings.php", t),
                !1
            },
            OTPAuthDisable: function(e) {
                if (Object(r.isButtonLocked)(e))
                    return !1;
                var t = {
                    type: "otp_auth",
                    hash: cur.options.otp_hash
                };
                ajax.post("al_settings.php?act=a_otp_auth_save", t, {
                    showProgress: ()=>Object(r.lockButton)(e),
                    hideProgress: ()=>Object(r.unlockButton)(e),
                    onFail: e=>void 0 !== e && Object(g.showErrorBox)(e)
                })
            },
            OTPAuthAppDisable: function() {
                if (Object(o.isVisible)(curBox().progress))
                    return !1;
                var e = {
                    type: "otp_auth_by_app",
                    hash: cur.options.otp_hash
                };
                ajax.post("al_settings.php?act=a_otp_auth_save", e, {
                    showProgress: curBox().showProgress,
                    hideProgress: curBox().hideProgress,
                    onDone: function() {
                        Object(o.addClass)("settings_otp_auth_app_set", "settings_otp_app_disabled"),
                        Object(o.val)("settings_otp_auth_app_set_link", Object(l.getLang)("settings_otp_auth_by_app_enable")),
                        curBox().hide()
                    }
                })
            },
            OTPAuthShowReserveCodes: function(e, t) {
                return showBox("al_settings.php", {
                    act: "otp_auth_reserve_codes_box",
                    hash: e,
                    force_new: t ? 1 : 0
                }, {
                    params: {
                        dark: !0
                    }
                }),
                !1
            },
            OTPAuthGetTrusted: function(e) {
                var t = Object(o.ge)("settings_otp_auth_trusted");
                if (t && Object(o.isVisible)(t) && (e || Object(o.geByTag1)("img", t))) {
                    var s = vk.loginscheme != location.protocol.substr(0, location.protocol.length - 1) ? 1 : 0;
                    ajax.post(vk.loginscheme + "://" + location.host + "/al_login.php", {
                        act: "is_trusted_browser",
                        _http: s
                    }, {
                        frame: s,
                        onDone: function(e) {
                            t.innerHTML = e
                        }
                    })
                }
            },
            OTPAuthClearTrusted: function(e, t, s) {
                var n = !1
                  , i = e.getAttribute("confirm");
                function a() {
                    if (!t && cur.options.otp_reset_hash)
                        return cur.onReLoginDoneCallback = function() {
                            var e = Object(o.ge)("settings_reset_sessions_link");
                            e && (e.parentNode.innerHTML = '<div class="settings_labeled_notice">' + Object(l.getLang)("setting_all_sessions_reset") + "</div>")
                        }
                        ,
                        M.reset_sessions = !1,
                        M.resetAllSessions(e, '<input name="otp_reset_hash" value="' + cur.options.otp_reset_hash + '" type="hidden" />', e.getAttribute("complete"), cur.options.logout_hash),
                        void (n && n.hide());
                    var i = Object(o.ce)("img", {
                        src: "/images/upload" + (window.devicePixelRatio >= 2 ? "_2x" : "") + ".gif"
                    }, {
                        width: 32
                    })
                      , a = vk.loginscheme != location.protocol.substr(0, location.protocol.length - 1) ? 1 : 0;
                    ajax.post(vk.loginscheme + "://" + location.host + "/al_login.php", {
                        act: "clear_trusted_browsers",
                        only_cur: t,
                        hash: s,
                        _http: a
                    }, {
                        frame: a,
                        onDone: function(t) {
                            n && n.hide(),
                            e.parentNode.innerHTML = '<div class="settings_labeled_notice">' + e.getAttribute("complete") + "</div>"
                        },
                        showProgress: function() {
                            n ? n.showProgress() : e.parentNode.replaceChild(i, e)
                        },
                        hideProgress: function() {
                            n ? n.hideProgress() : i.parentNode.replaceChild(e, i)
                        }
                    })
                }
                i ? (i = i.split("<!!>"),
                n = Object(h.showFastBox)({
                    title: i[0],
                    dark: 1,
                    bodyStyle: "padding: 20px;"
                }, i[1], i.length > 2 ? i[2] : Object(l.getLang)("box_yes"), a)) : a()
            },
            OTPAppPasswords: function() {
                return showBox("al_settings.php", {
                    act: "otp_auth_app_passwords_box"
                }, {
                    params: {
                        dark: !0
                    }
                }),
                !1
            },
            OTPCreateAppPassword: function(e, t) {
                if (!Object(r.isButtonLocked)(e)) {
                    var s = Object(o.val)("settings_app_password_name");
                    s.length ? (Object(o.val)("settings_app_passwords_error", ""),
                    ajax.post("al_settings.php", {
                        act: "a_otp_auth_create_app_password",
                        name: s,
                        hash: t
                    }, {
                        onDone: function(e, t, s) {
                            Object(h.showFastBox)({
                                title: e,
                                width: 450
                            }, t),
                            Object(o.ge)("settings_app_passwords_table_wrap").innerHTML = s,
                            Object(o.hide)("settings_app_passwords_empty"),
                            Object(o.val)("settings_app_password_name", "")
                        },
                        onFail: function(e) {
                            return e && Object(i.showMsg)("settings_app_passwords_error", e, "error", !0),
                            !0
                        },
                        showProgress: r.lockButton.pbind(e),
                        hideProgress: r.unlockButton.pbind(e)
                    })) : Object(r.notaBene)("settings_app_password_name")
                }
            },
            OTPRemoveAppPassword: function(e, t, s) {
                return ajax.post("al_settings.php", {
                    act: "a_otp_auth_remove_app_password",
                    id: t,
                    hash: s
                }, {
                    onDone: function() {
                        Object(o.re)("settings_app_password" + t),
                        Object(o.geByTag)("tr", "settings_app_passwords_table_wrap").length <= 1 && (Object(o.ge)("settings_app_passwords_table_wrap").innerHTML = "",
                        Object(o.show)("settings_app_passwords_empty"))
                    },
                    showProgress: function() {
                        Object(r.showProgress)(e.parentNode),
                        Object(o.hide)(e)
                    },
                    hideProgress: function() {
                        Object(r.hideProgress)(e.parentNode),
                        Object(o.show)(e)
                    }
                }),
                !1
            },
            passwordDone: function(e, t) {
                var s;
                Object(o.re)(cur.pwchFrame),
                Object(r.unlockButton)(cur.pwchDestroy),
                cur.pwchFrame = !1;
                var n = "settings_new_pwd";
                switch (e) {
                case 1:
                    s = "settings_cant_set_this_password";
                    break;
                case -2:
                    s = "settings_oldpwd_notcorr",
                    n = "settings_old_pwd";
                    break;
                case -3:
                    s = "settings_newpwd_not_good",
                    n = "settings_new_pwd";
                    break;
                case 2:
                    return Object(o.hide)("settings_error_pwd"),
                    Object(o.val)(Object(o.geByClass1)("settings_labeled_text", "chgpass"), Object(l.getLang)("settings_pass_update_just_now")),
                    Object(o.val)("settings_old_pwd", ""),
                    Object(o.val)("settings_new_pwd", ""),
                    Object(o.val)("settings_confirm_pwd", ""),
                    M.toggleBlock("chgpass"),
                    M.showMsg(Object(l.getLang)("settings_pass_success")),
                    void (cur.pwchCaptchaBox && (cur.pwchCaptchaBox.hide(),
                    cur.pwchCaptchaBox = !1));
                case -1:
                    return void (cur.pwchCaptchaBox = showCaptchaBox(t, 1, cur.pwchCaptchaBox, {
                        onSubmit: M.passwordSubmit.pbind(cur.pwchDestroy),
                        onDestroy: function() {}
                    }));
                default:
                    s = "settings_cant_change_password"
                }
                cur.pwchCaptchaBox && (cur.pwchCaptchaBox.hide(),
                cur.pwchCaptchaBox = !1),
                M.showError(Object(l.getLang)(s), "pwd"),
                Object(r.notaBene)(n)
            },
            passwordSubmit: function(e, t, s) {
                var n = Object(o.val)("settings_old_pwd")
                  , i = Object(o.val)("settings_new_pwd")
                  , a = Object(o.val)("settings_confirm_pwd")
                  , c = Object(o.ge)("settings_pwd_tt_place").tt;
                if (!cur.pwchFrame)
                    if (n)
                        if (i)
                            if (a) {
                                if (c && c.hide({
                                    fasthide: !0
                                }),
                                i.match(/\s/))
                                    return M.showError(Object(l.getLang)("settings_pwd_bad"), "pwd"),
                                    Object(r.notaBene)("settings_new_pwd"),
                                    void (c && setTimeout(c.show, 10));
                                if (i.length < 6)
                                    return M.showError(Object(l.getLang)("settings_pwd_bad"), "pwd"),
                                    Object(r.notaBene)("settings_new_pwd"),
                                    void (c && setTimeout(c.show, 10));
                                if (a != i)
                                    return M.showError(Object(l.getLang)("settings_newpwd_notcorr"), "pwd"),
                                    Object(r.notaBene)("settings_confirm_pwd"),
                                    void (c && setTimeout(c.show, 10));
                                cur.pwchDestroy || cur.destroy.push((function(e) {
                                    Object(o.re)(e.pwchFrame)
                                }
                                )),
                                cur.pwchDestroy = e,
                                curBox() || Object(r.lockButton)(cur.pwchDestroy);
                                var u = {
                                    act: "changepass",
                                    _origin: locProtocol + "//" + locHost,
                                    pass: n,
                                    new_pass: i
                                };
                                t && s && (u.captcha_sid = t,
                                u.captcha_key = s),
                                u.phash = cur.options.phash,
                                cur.pwchDone = M.passwordDone,
                                cur.pwchFrame = utilsNode.appendChild(Object(o.ce)("iframe", {
                                    src: Object(_.getLoginDomain)() + "?" + AjaxConvert.toQueryString(u)
                                }))
                            } else
                                Object(r.notaBene)("settings_confirm_pwd");
                        else
                            Object(r.notaBene)("settings_new_pwd");
                    else
                        Object(r.notaBene)("settings_old_pwd")
            },
            mailSubmit: function(e, t) {
                var s;
                if (t)
                    s = "",
                    Object(o.re)(e);
                else {
                    if (!(s = Object(n.trim)(Object(o.val)("settings_new_mail"))))
                        return void Object(r.notaBene)("settings_new_mail");
                    Object(r.lockButton)(e)
                }
                var i = {
                    act: "a_bind_mail",
                    email: s,
                    is_new: 1,
                    hash: cur.options.mail_hash
                };
                return Object(o.ge)("settings_new_mail").blur(),
                Object(o.hide)("settings_error_mail"),
                ajax.post("al_settings.php", i, {
                    onDone: function(t, s) {
                        if (Object(r.unlockButton)(e),
                        s) {
                            var n = Object(o.ge)("chgmail");
                            n.parentNode.replaceChild(Object(o.se)(s), n)
                        }
                        Object(o.ge)("settings_new_mail").value = "",
                        showDoneBox(t, {
                            out: 4e3,
                            w: 400
                        })
                    },
                    onFail: function(t) {
                        return Object(r.unlockButton)(e),
                        Object(n.isUndefined)(t) || M.showError(t, "mail"),
                        !0
                    }
                }),
                !1
            },
            phoneSubmit: function() {
                showBox("activation.php", {
                    act: "change_phone_box",
                    hash: cur.options.phone_hash
                })
            },
            regionalSubmit: function(e) {
                var t = (Object(o.ge)("timezone") || {}).value
                  , s = {
                    act: "a_change_regional",
                    timeoffset: t,
                    hash: cur.options.regional_hash || cur.options.regional_hashes[t]
                };
                Object(r.lockButton)(e),
                ajax.post("al_settings.php", s, {
                    onDone: function(t) {
                        Object(r.unlockButton)(e),
                        M.showMsg(t)
                    },
                    onFail: function(t) {
                        return Object(r.unlockButton)(e),
                        M.showError(t),
                        !0
                    }
                })
            },
            reset_sessions: !1,
            resetAllSessions: function(e, t, s, i) {
                if (M.reset_sessions)
                    return !1;
                M.reset_sessions = !0;
                var a = bodyNode.appendChild(Object(o.ce)("div", {
                    innerHTML: `<form action="${Object(_.getLoginDomain)()}" method="POST" target="reset_sessions_frame">\n  <input name="_origin" value="${locProtocol + "//" + locHost}" type="hidden" />\n  <input name="role" value="al_frame" type="hidden" />\n  <input name="ip_h" value="${vk.ip_h}" type="hidden" />\n  <input name="reset_hash" value="${cur.options.reset_hash}" type="hidden" />${void 0 !== t ? t : ""}\n</form><iframe class="upload_frame" name="reset_sessions_frame"></iframe>`
                }))
                  , c = a.firstChild
                  , r = Object(o.ce)("img", {
                    src: "/images/upload" + (window.devicePixelRatio >= 2 ? "_2x" : "") + ".gif"
                }, {
                    width: 32
                });
                return window.onReLoginDone = function(t, i, c) {
                    if (Object(o.re)(a),
                    "object" == typeof i && (i = c),
                    cur.options.reset_hash = i,
                    e)
                        !0 !== e && r.parentNode.replaceChild(Object(o.ce)("div", {
                            className: "settings_labeled_notice",
                            innerHTML: s || Object(l.getLang)("setting_all_sessions_reset")
                        }), r);
                    else {
                        var u = curBox();
                        u && (u.hideProgress(),
                        u.setControlsText(Object(l.getLang)("setting_all_sessions_reset")));
                        var p = 0;
                        Object(n.each)(Object(o.ge)("activity_history").childNodes, (function(e, t) {
                            1 === t.nodeType && (p > 0 && !Object(o.hasClass)(t, "settings_old_session") && (Object(o.addClass)(t, "settings_old_session"),
                            Object(o.re)(Object(o.geByClass1)("settings_cur_session", t))),
                            p++)
                        }
                        ))
                    }
                    Object(n.isFunction)(cur.onReLoginDoneCallback) && cur.onReLoginDoneCallback(),
                    M.reset_sessions = !1
                }
                ,
                e ? !0 !== e && e.parentNode.replaceChild(r, e) : curBox().showProgress(),
                c.submit(),
                !1
            },
            resetSession: function(e, t, s) {
                var n = {
                    reset_data: t,
                    hash: s
                }
                  , i = function(t) {
                    var s = document.querySelector('.settings_history_row[data-id="' + e + '"]');
                    Object(o.addClass)(s, "settings_old_session"),
                    Object(o.re)(document.querySelector("._settings_reset_session" + e)),
                    showDoneBox(t)
                }
                  , a = Object(l.getLang)("settings_activity_session_reset_box_title")
                  , c = Object(l.getLang)("settings_activity_session_reset_box_text")
                  , r = Object(l.getLang)("settings_activity_session_reset_box_button");
                Object(h.showFastBox)(a, c, r, (function() {
                    ajax.post("/settings?act=a_reset_session", n, {
                        onDone: i
                    }),
                    curBox().hide()
                }
                ), Object(l.getLang)("global_cancel"))
            },
            ipTTClick: function(e, t) {
                Object(c.cancelEvent)(t);
                var s = document.createRange();
                s.selectNodeContents(e);
                var o = getSelection();
                o.removeAllRanges(),
                o.addRange(s),
                document.execCommand("copy"),
                o.removeAllRanges()
            },
            showUserClientTT: function(e, t) {
                var s = "";
                Object(o.hasClass)(e.parentNode.parentNode, "settings_old_session") && (s = '<div style="font-weight:bold; margin-bottom:5px;">' + Object(l.getLang)("settings_session_terminated") + "</div>"),
                cur.options.ua_tooltips[t] && (s += cur.options.ua_tooltips[t]),
                s && Object(b.showTooltip)(e, {
                    text: s,
                    dir: "auto",
                    slide: 15,
                    className: "settings_user_client_tt",
                    hasover: 1
                })
            },
            disabledPrivacy: function() {
                var e = Object(o.geByClass1)("settings_privacy_add_replies_view", Object(o.ge)("content"));
                e && Object(b.showTooltip)(e, {
                    black: !0,
                    hasover: 1,
                    className: "settings_comments_disabled_tt",
                    shift: [0, 5],
                    text: Object(l.getLang)("settings_comments_disabled_tt").replace("{link}", '<a href="/settings?f=cposts" onclick="return nav.go(this, event, {nocur: true})">').replace("{/link}", "</a>")
                })
            },
            checkAddress: function(e) {
                cur.addrUnchecked = 0,
                clearTimeout(cur.addressCheckTO),
                cur.lastAddress != Object(o.val)("settings_addr") && (cur.addressCheckTO = setTimeout(M.doCheckAddress, e || 0))
            },
            doCheckAddress: function() {
                var e = Object(o.ge)("settings_address_submit");
                cur.lastAddress = Object(o.val)("settings_addr"),
                ajax.post("al_settings.php", {
                    act: "a_check_address",
                    name: cur.lastAddress
                }, {
                    onDone: function(t) {
                        cur.addrChecked = 1,
                        Object(r.disableButton)(e, !1),
                        e.innerHTML = t
                    },
                    onFail: function(t) {
                        return cur.addrChecked = -1,
                        e.innerHTML = t,
                        Object(r.disableButton)(e, !0),
                        !0
                    },
                    showProgress: function() {
                        Object(r.lockButton)(e),
                        Object(r.disableButton)(e, !1)
                    },
                    hideProgress: function() {
                        Object(r.unlockButton)(e)
                    }
                })
            },
            addressSubmit: function(e) {
                1 == cur.addrChecked ? (Object(r.lockButton)(e),
                ajax.post("al_settings.php", {
                    act: "a_change_address",
                    hash: cur.options.address_hash,
                    name: Object(o.val)("settings_addr")
                }, {
                    onDone: function(t) {
                        Object(r.unlockButton)(e),
                        M.showMsg(t)
                    },
                    onFail: function(t) {
                        return Object(r.unlockButton)(e),
                        t && M.showError(t, "addr"),
                        !0
                    }
                })) : Object(r.notaBene)("settings_addr")
            },
            init: function() {
                cur.checkboxResultsTOs = {},
                cur.module = "settings",
                cur.options.msg ? M.showMsg(cur.options.msg) : cur.options.err && M.showError(cur.options.err),
                Object(n.each)({
                    settings_status_default: Object(l.getLang)("settings_status_default_about"),
                    settings_no_wall_replies: Object(l.getLang)("settings_no_wall_replies_about"),
                    settings_video_autoplay: Object(l.getLang)("settings_video_autoplay")
                }, (function(e, t) {
                    (e = Object(o.domQuery1)('label[for="' + e + '"]')) && (e.onmouseover = function() {
                        Object(b.showTooltip)(this, {
                            shift: [-20, 8, 8],
                            dir: "auto",
                            text: t,
                            slide: 15,
                            className: "settings_tt",
                            hasover: 1
                        })
                    }
                    )
                }
                ));
                var e = Object(o.ge)("settings_pwd_tt_place");
                Object(n.each)([Object(o.ge)("settings_new_pwd"), Object(o.ge)("settings_confirm_pwd")], (function() {
                    this && (this.onfocus = function() {
                        Object(b.showTooltip)(e, {
                            text: Object(l.getLang)("settings_password_about"),
                            dir: "left",
                            slideX: 15,
                            className: "settings_pwd_tt",
                            shift: [-12, -15, 0],
                            onCreate: function() {
                                Object(c.removeEvent)(e, "mouseout")
                            }
                        })
                    }
                    ,
                    this.onblur = function() {
                        e.tt && e.tt.hide && e.tt.hide()
                    }
                    )
                }
                ));
                var t = Object(o.ge)("settings_addr");
                t.onfocus = function() {
                    Object(b.showTooltip)(t, {
                        text: Object(l.getLang)("settings_addr_intro"),
                        dir: "auto",
                        slide: 15,
                        className: "settings_toup_tt",
                        shift: [Object(o.getSize)("prefix_input_prefix")[0], 10],
                        onCreate: function() {
                            Object(c.removeEvent)(t, "mouseout"),
                            t.onblur = function() {
                                t.tt.hide()
                            }
                        }
                    })
                }
                ,
                cur.lastAddress = Object(o.val)(t);
                var s = Object(o.ge)("settings_new_mail");
                s && (s.onfocus = function() {
                    Object(b.showTooltip)(s, {
                        text: Object(l.getLang)("settings_email_about"),
                        dir: "auto",
                        slide: 15,
                        className: "settings_toup_tt",
                        shift: [0, 10],
                        onCreate: function() {
                            Object(c.removeEvent)(s, "mouseout"),
                            s.onblur = function() {
                                s.tt.hide()
                            }
                        }
                    })
                }
                ),
                Object(n.extend)(cur, {
                    validationLastCallback: function(e) {
                        curBox() && curBox().hide(),
                        e ? M.phoneSubmit() : Object(o.elfocus)("settings_new_phone")
                    }
                }),
                M.initRepliesOrder(),
                setTimeout((function() {
                    if (nav.objLoc.f) {
                        var e = Object(o.ge)(nav.objLoc.f.split(",")[0]);
                        e && Object(o.hasClass)(e, "settings_line") && M.toggleBlock(Object(o.domFC)(e))
                    }
                }
                ), 100),
                cur.destroy.push((function() {
                    window.onLoginDone = nav.reload
                }
                ))
            },
            emailPosts: function(e, t) {
                ajax.post("al_settings.php", {
                    act: "send_email_post",
                    hash: e
                }, {
                    onDone: function(e, s) {
                        Object(o.ge)("settings_email_post_msg").innerHTML = e,
                        Object(o.setStyle)(Object(o.ge)("settings_email_post_msg"), {
                            borderColor: "#D4BC4C",
                            backgroundColor: "#F9F6E7"
                        }),
                        animate(Object(o.ge)("settings_email_post_msg"), {
                            borderColor: "#B9C4DA",
                            backgroundColor: "#FFFFFF"
                        }, 3e3),
                        t.innerHTML = s
                    },
                    showProgress: function() {
                        Object(r.lockButton)(t)
                    },
                    hideProgress: function() {
                        Object(r.unlockButton)(t)
                    }
                })
            },
            showPaymentsMethods: function(e, t, s) {
                return ajax.post("al_settings.php", {
                    act: "a_payments_methods",
                    money_transfer: s ? 1 : 0,
                    hash: t
                }, {
                    onDone: function(t) {
                        if (s)
                            return cur.autoacceptCards = t.cards,
                            cur.autoacceptCardSelected = t.cardSeleceted,
                            void M.initAutoAcceptDD(t.cards, t.cardSeleceted);
                        var n = Object(o.ce)("div", {
                            innerHTML: t,
                            className: "unshown"
                        });
                        e.parentNode.replaceChild(n, e),
                        slideDown(n, 100)
                    },
                    stat: s ? ["ui_controls.js", "ui_controls.css"] : []
                }),
                !1
            },
            initAutoAcceptDD: function(e, t) {
                cur.autoacceptCardDD = new InlineDropdown("settings_p2p_receive_card",{
                    items: e,
                    selected: t,
                    withArrow: !0,
                    onSelect: function(e) {
                        if (-1 == e)
                            M.bindMoneyTransferCard();
                        else if (e != cur.autoacceptCardSelected) {
                            var t = cur.autoacceptCardDD.getSelected()[2];
                            M.saveMoneyTransferCard(e, t),
                            cur.autoacceptCardSelected = e
                        }
                    }
                })
            },
            saveMoneyTransferCard: function(e, t) {
                ajax.post("al_payments.php", {
                    act: "a_remember_money_transfer_accept_card",
                    card_id: e,
                    hash: t,
                    from: "settings"
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("settings_p2p_receive_card")
                })
            },
            bindMoneyTransferCard: function() {
                return showBox("al_payments.php", {
                    act: "card_payment_box",
                    type: "card_bind"
                }, {
                    stat: ["ui_controls.js", "ui_controls.css"]
                }),
                !1
            },
            deletePaymentMethod: function(e, t, s, o) {
                if (o) {
                    var n = e.parentNode;
                    return ajax.post("al_payments.php", {
                        act: "a_del_instant_method",
                        type: t,
                        hash: s
                    }, {
                        onDone: function(e) {
                            n.innerHTML = e
                        },
                        onFail: function(e) {
                            return n.innerHTML = e,
                            !0
                        },
                        showProgress: function() {
                            cur.confirmBox.showProgress()
                        },
                        hideProgress: function() {
                            cur.confirmBox.hide()
                        }
                    }),
                    !1
                }
                cur.confirmBox = Object(h.showFastBox)({
                    title: cur.lang.global_action_confirmation,
                    dark: 1,
                    forceNoBtn: 1,
                    bodyStyle: "padding: 20px; line-height: 160%;"
                }, cur.lang.settings_delete_payment_method_confirm, Object(l.getLang)("global_delete"), (function() {
                    M.deletePaymentMethod(e, t, s, !0)
                }
                ), Object(l.getLang)("global_cancel"))
            },
            showNextPaymentsHistory: function(e, t) {
                var s, n;
                if (!Object(r.isButtonLocked)(e))
                    return Object(r.lockButton)(e),
                    t || (t = "votes"),
                    void 0 === cur.historyOffset[t] && (cur.historyOffset[t] = 5),
                    "transfer" === t ? (s = {
                        act: "a_transfer_history"
                    },
                    n = Object(o.ge)("settings_transfer_history")) : "subscriptions" === t ? (s = {
                        act: "a_payments_subsciptions"
                    },
                    n = Object(o.ge)("settings_payments_subscriptions")) : "games" === t ? (s = {
                        act: "a_payments_games"
                    },
                    n = Object(o.ge)("settings_payments_games")) : (s = {
                        act: "a_votes_history"
                    },
                    n = Object(o.ge)("settings_votes_history")),
                    s.offset = n.rows.length,
                    "subscriptions" === t && (s.extra_items_count = cur.historyExtraItemsSubscriptions),
                    ajax.post("al_settings.php", s, {
                        onDone: function(s, i, a) {
                            var c = n.tBodies[0];
                            if (s) {
                                if (Object(r.unlockButton)(e),
                                browser.msie) {
                                    var l = Object(o.se)("<table>" + s + "</table>");
                                    Array.from(Object(o.geByTag)("tr", l)).forEach(e=>{
                                        1 === e.nodeType && c.appendChild(e)
                                    }
                                    )
                                } else
                                    c.insertAdjacentHTML("beforeEnd", s);
                                "subscriptions" === t && a && (cur.historyExtraItemsSubscriptions = a)
                            }
                            s && !i || (Object(o.addClass)(c.lastChild, "settings_votes_history_last"),
                            Object(o.hide)(e))
                        }
                    }),
                    !1
            },
            switchPaymentsHistoryTab: function(e, t, s) {
                if (Object(c.checkEvent)(s))
                    return !0;
                var i = Object(n.clone)(nav.objLoc);
                return uiTabs.switchTab(e),
                M.hideMoneyLinksTooltip(),
                Object(o.hide)("settings_votes_history_wrap", "settings_payments_subscriptions_wrap", "settings_transfer_history_wrap", "settings_payments_transfer_msg", "settings_payments_games_wrap"),
                "transfer" === t ? (Object(o.show)("settings_transfer_history_wrap", "settings_payments_transfer_msg"),
                i.section = t,
                M.showMoneyLinksTooltip()) : "subscriptions" === t ? (Object(o.show)("settings_payments_subscriptions_wrap"),
                i.section = t) : "games" === t ? (Object(o.show)("settings_payments_games_wrap"),
                i.section = t) : (Object(o.show)("settings_votes_history_wrap"),
                delete i.section),
                nav.setLoc(i),
                !1
            },
            moneyTransferCancel: function(e, t, s, n, i) {
                var a, c, r = Object(o.domClosest)("_row", e), u = Object(o.geByClass1)("_status", r);
                if (!i)
                    return n ? (a = Object(l.getLang)("settings_transfer_decline_confirm"),
                    c = Object(l.getLang)("settings_transfer_decline_btn")) : (a = Object(l.getLang)("settings_transfer_cancel_confirm"),
                    c = Object(l.getLang)("settings_transfer_cancel_btn")),
                    void (cur.confirmBox = Object(h.showFastBox)(Object(l.getLang)("global_action_confirmation"), a, c, M.moneyTransferCancel.pbind(e, t, s, n, 1), Object(l.getLang)("global_cancel")));
                2 !== i && (Object(o.addClass)(r, "settings_history_row_progress"),
                cur.confirmBox && cur.confirmBox.hide()),
                ajax.post("al_payments.php?act=a_cancel_money_transfer", {
                    tx_id: t,
                    hash: s
                }, {
                    onDone: function(e, a) {
                        if (0 === e)
                            return 2 !== i && (Object(o.val)(u, Object(l.getLang)("settings_transfer_status_cancelling")),
                            Object(o.removeClass)(u, "settings_transfer_receive")),
                            void setTimeout(M.moneyTransferCancel.pbind(r, t, s, n, 2), 2e3);
                        Object(o.removeClass)(r, "settings_history_row_progress"),
                        Object(o.val)(u, Object(l.getLang)("settings_transfer_status_cancelled")),
                        Object(o.removeClass)(u, "settings_transfer_receive"),
                        Object(o.addClass)(u, "settings_transfer_status_cancelled"),
                        TopNotifier.invalidate()
                    },
                    onFail: function(e) {
                        return Object(o.removeClass)(r, "settings_history_row_progress"),
                        setTimeout(Object(h.showFastBox)(Object(l.getLang)("global_error"), e).hide, 2e3),
                        !0
                    }
                })
            },
            moneyTransferRepeat: function(e, t) {
                return showBox("al_payments.php?act=money_transfer_box", {
                    repeat_id: e,
                    hash: t
                }),
                !1
            },
            paymentsSubscriptionBox: function(e, t, s, n) {
                if (n) {
                    var i = Object(o.domClosest)("_row", n);
                    cur.onSubscriptionDone = function(e) {
                        var t = Object(o.geByClass1)("settings_history_amount", i);
                        Object(o.val)(t, e.status),
                        Object(o.removeClass)(t, "settings_history_btn"),
                        Object(o.val)(Object(o.geByClass1)("settings_history_actions", i), e.actions)
                    }
                }
                showBox("al_apps.php?act=show_subscription_box", {
                    aid: e,
                    item: t,
                    action: "create",
                    hash: s
                }, {
                    onFail: function(e) {
                        return setTimeout(Object(h.showFastBox)(Object(l.getLang)("global_error"), e).hide, 2e3),
                        !0
                    }
                })
            },
            paymentsSubscriptionCancel: function(e, t, s, n, i) {
                var a = Object(o.domClosest)("_row", e);
                i ? (Object(o.addClass)(a, "settings_history_row_progress"),
                cur.confirmBox && cur.confirmBox.hide(),
                ajax.post("al_apps.php?act=a_cancel_subscription", {
                    aid: t,
                    subscription_id: s,
                    hash: n,
                    from: "settings"
                }, {
                    onDone: function(e, t) {
                        Object(o.removeClass)(a, "settings_history_row_progress"),
                        e ? (Object(o.val)(Object(o.geByClass1)("settings_history_amount", a), e),
                        Object(o.val)(Object(o.geByClass1)("settings_history_actions", a), t)) : Object(o.addClass)(a, "settings_history_row_deleted")
                    },
                    onFail: function(e) {
                        return Object(o.removeClass)(a, "settings_history_row_progress"),
                        setTimeout(Object(h.showFastBox)(Object(l.getLang)("global_error"), e).hide, 2e3),
                        !0
                    }
                })) : cur.confirmBox = Object(h.showFastBox)(Object(l.getLang)("global_action_confirmation"), Object(l.getLang)("settings_subscription_cancel_confirm"), Object(l.getLang)("settings_subscription_cancel_btn"), M.paymentsSubscriptionCancel.pbind(e, t, s, n, 1), Object(l.getLang)("global_cancel"))
            },
            paymentsSubscriptionReactivate: function(e, t, s, n) {
                var i = Object(o.domClosest)("_row", e);
                cur.onSubscriptionDone = function(e) {
                    Object(o.val)(Object(o.geByClass1)("settings_history_amount", i), e.status),
                    Object(o.val)(Object(o.geByClass1)("settings_history_actions", i), e.actions)
                }
                ,
                showBox("al_apps.php?act=show_subscription_box", {
                    aid: t,
                    subscription_id: s,
                    action: "resume",
                    hash: n
                }, {
                    onFail: function(e) {
                        return setTimeout(Object(h.showFastBox)(Object(l.getLang)("global_error"), e).hide, 2e3),
                        !0
                    }
                })
            },
            initAppOrdersDD: function(e, t, s) {
                cur.appOrdersDD = new InlineDropdown("settings_app_orders",{
                    items: e,
                    selected: t,
                    onShow: function() {
                        if (cur.appOrdersDD) {
                            Object(b.showTooltip)(cur.appOrdersDD._els.popupHeader, {
                                text: Object(l.getLang)("settings_payments_app_orders_tt"),
                                width: 250,
                                slideX: -15,
                                className: "pedit_tt",
                                nohide: !0,
                                asrtl: !0,
                                shift: [263, -15, -15],
                                dir: "left"
                            })
                        }
                    },
                    onHide: function() {
                        cur.appOrdersDD && cur.appOrdersDD._els.popupHeader.tt && cur.appOrdersDD._els.popupHeader.tt.destroy()
                    },
                    onSelect: function(e) {
                        M.toggleAppOrders(e && "0" !== e, s)
                    }
                })
            },
            toggleAppOrders: function(e, t) {
                ajax.post("al_payments.php?act=a_toggle_app_orders", {
                    autoconfirm: e,
                    hash: t
                }, {
                    onDone: window.uiPageBlock && uiPageBlock.showSaved.pbind("settings_app_orders")
                })
            },
            initApps: function(e, t) {
                Object(n.extend)(cur, {
                    aSearch: Object(o.ge)("s_search"),
                    lShowMoreButton: Object(o.ge)("ui_apps_load_more"),
                    lContent: Object(o.ge)("settings_apps_list"),
                    aEmptyCont: Object(o.ge)("settings_apps_empty"),
                    aSummaryCounter: Object(o.geByClass1)("page_block_header_count", "wide_column"),
                    onSilentLoad: {},
                    apps: {},
                    deletedApps: {},
                    appTpl: t || function() {
                        return ""
                    }
                }),
                Object(n.extend)(cur, e),
                cur.defaultCount = cur.shownApps,
                cur.appTpl = t || function() {
                    return ""
                }
                ,
                M.scrollNode = browser.msie6 ? pageNode : window,
                Object(c.addEvent)(M.scrollNode, "scroll", M.scrollCheckApps.bind(this)),
                setTimeout((function() {
                    cur.destroy.push((function() {
                        Object(c.removeEvent)(M.scrollNode, "scroll", M.scrollCheckApps.bind(M))
                    }
                    ))
                }
                ), 0),
                cur.silent = !0,
                ajax.post("/al_settings.php", {
                    act: "load_apps_silent"
                }, {
                    cache: 1,
                    local: 1,
                    onDone: function(e) {
                        var t = e;
                        try {
                            e = JSON.parse(e)
                        } catch (e) {
                            Object(d.logEvalError)(e, t)
                        }
                        if (!e)
                            return cur.silent = !1;
                        void 0 === cur.searchOffset && (cur.searchOffset = 0),
                        cur.curList = "all",
                        cur.appsList = e[cur.curList] ? e : {
                            all: []
                        },
                        cur.appsCount = cur.appsList.all.length,
                        this.indexApp((function() {
                            cur.silent = !1,
                            "object" == typeof cur.onSilentLoad && Object.values(cur.onSilentLoad).forEach(e=>{
                                Object(n.isFunction)(e) && e()
                            }
                            )
                        }
                        ))
                    }
                    .bind(this)
                })
            },
            isDelayedOnSilentLoad: function e(t, s) {
                if (cur.silent)
                    return e.count = e.count || 0,
                    e.count++,
                    cur.onSilentLoad[t || "key_" + e.count] = s,
                    !0
            },
            indexApp: function(e) {
                cur.appsIndex = new vkIndexer(cur.appsList.all,(function(e) {
                    try {
                        return cur.apps[parseInt(e[0])] = e,
                        e[3]
                    } catch (e) {
                        return ""
                    }
                }
                ),e)
            },
            scrollCheckApps: function() {
                this.isDelayedOnSilentLoad("scrollCheck", this.scrollCheckApps.bind(this)) || !browser.mobile && !cur.isAppsLoading && !cur.disableAutoMore && Object(o.isVisible)(cur.lShowMoreButton) && (window.innerHeight || document.documentElement.clientHeight || bodyNode.clientHeight) + Object(a.scrollGetY)() + 400 >= cur.lShowMoreButton.offsetTop && this.showAppsRows()
            },
            showAppsRows: function() {
                if (!this.isDelayedOnSilentLoad("showAppsRows", this.showAppsRows.bind(this)) && cur.defaultCount && cur.shownApps < cur.appsCount) {
                    var e = Object(n.clean)(cur.searchStr)
                      , t = ""
                      , s = cur.appsList[cur.curList] || []
                      , i = s.length;
                    if ((s = this.filterApps(s.slice(cur.shownApps)).slice(0, cur.defaultCount)).length && cur.appTpl) {
                        var a = [];
                        Object(n.each)(s, (function(e, t) {
                            t = Object(n.clone)(t),
                            cur.selection && (t[3] = t[3].replace(cur.selection.re, cur.selection.val)),
                            a.push(cur.appTpl(t, e == s.length - 1, !1))
                        }
                        )),
                        t = a.join("")
                    }
                    if (cur.shownApps)
                        t && cur.lContent.appendChild(Object(o.cf)(t));
                    else if (t)
                        cur.lContent.innerHTML = t,
                        cur.aSummaryCounter && (cur.aSummaryCounter.innerHTML = Object(l.langNumeric)(i, "%s", !0)),
                        Object(o.show)("settings_apps_noempty"),
                        Object(o.hide)(cur.aEmptyCont);
                    else {
                        var c = Object(l.getLang)("settings_apps_not_found_by_query").split("{query}").join("<b>" + e.replace(/([<>&#]*)/g, "") + "</b>");
                        cur.aEmptyCont.innerHTML = c,
                        cur.aSummaryCounter && (cur.aSummaryCounter.innerHTML = ""),
                        Object(o.show)(cur.aEmptyCont),
                        Object(o.hide)("settings_apps_noempty")
                    }
                    cur.shownApps += cur.defaultCount,
                    cur.shownApps >= cur.appsCount ? Object(o.hide)(cur.lShowMoreButton) : (Object(o.show)(cur.lShowMoreButton),
                    this.scrollCheckApps()),
                    cur.aSearch && uiSearch.hideProgress(cur.aSearch)
                }
            },
            filterApps: function(e) {
                for (var t = e.length, s = [], o = 0; o < t; o++) {
                    var n = e[o];
                    cur.apps && cur.apps[n[0]] && !cur.apps[n[0]].deleted && s.push(n)
                }
                return s
            },
            searchApps: function(e) {
                if (!this.isDelayedOnSilentLoad("searchApps", this.searchApps.bind(this, e))) {
                    if (e && " " == e[e.length - 1] && (e[e.length - 1] = "_"),
                    e.length < 2 && (e = ""),
                    cur.ignoreEqual || cur.searchStr !== e) {
                        if (cur.searchStr = e || "",
                        e) {
                            var t = cur.appsIndex.search(Object(n.clean)(e));
                            cur.curList = "all_search_" + e,
                            cur.appsList[cur.curList] = t,
                            e += " " + (Object(l.parseLatin)(e) || ""),
                            e = Object(n.trim)(Object(n.escapeRE)(e).split("&").join("&amp;")),
                            cur.selection = {
                                re: new RegExp("(" + e.replace(cur.appsIndex.delimiter, "|") + ")","gi"),
                                val: '<em class="highlight">$1</em>'
                            }
                        } else
                            cur.curList = "all",
                            cur.selection = !1;
                        window.tooltips && tooltips.hideAll(),
                        cur.aSearch && uiSearch.showProgress(cur.aSearch),
                        this.scrollToSearch(),
                        Object(o.hide)(cur.lShowMoreButton),
                        cur.loadMore = 1,
                        cur.shownApps = cur.searchOffset = 0,
                        this.showAppsRows()
                    }
                    delete cur.ignoreEqual
                }
            },
            showAppSettings: function(e) {
                window.tooltips && tooltips.hideAll(),
                showBox("/al_apps.php", {
                    act: "settings_box_info",
                    aid: e,
                    from: "profile_settings"
                }, {
                    stat: ["apps.css"],
                    dark: 1
                })
            },
            removeApp: function(e, t, s, n) {
                if (n && Object(c.cancelEvent)(n),
                this.removingApp)
                    return !1;
                if (this.isDelayedOnSilentLoad("removeApp" + e, this.removeApp.bind(this, e, t, s)))
                    return !1;
                window.tooltips && tooltips.hideAll();
                var i = Object(o.ge)("app" + e)
                  , a = "profile_settings";
                (function() {
                    ajax.post("/al_apps.php", {
                        act: "quit",
                        id: e,
                        hash: t,
                        from: a
                    }, {
                        onDone: function(t) {
                            window.appsListChanged = !0,
                            cur.apps[e] && (cur.appsIndex.remove(cur.apps[e]),
                            cur.apps[e].deleted = !0),
                            cur.deletedApps[e] = {
                                from: a,
                                html: i.innerHTML
                            },
                            i && i.appendChild(Object(o.cf)(t.html)),
                            Object(o.addClass)(i, "deleted")
                        },
                        showProgress: function() {
                            Object(o.addClass)(i, "loading"),
                            this.removingApp = !0
                        }
                        .bind(this),
                        hideProgress: function() {
                            Object(o.removeClass)(i, "loading"),
                            this.removingApp = !1
                        }
                        .bind(this)
                    })
                }
                ).bind(this)()
            },
            restoreApp: function(e, t) {
                if (this.restoringApp)
                    return !1;
                var s = Object(o.ge)("app" + e);
                return ajax.post("/al_apps.php", {
                    act: "join",
                    id: e,
                    hash: t,
                    restore: 1,
                    from: "al_apps",
                    section: "settings"
                }, {
                    onDone: function(t) {
                        cur.deletedApps[e] && (s.innerHTML = cur.deletedApps[e].html,
                        delete cur.deletedApps[e]),
                        cur.apps[e] && (delete cur.apps[e].deleted,
                        cur.appsIndex.add(cur.apps[e])),
                        Object(o.removeClass)(s, "deleted")
                    },
                    showProgress: function() {
                        this.restoringApp = !0,
                        Object(o.addClass)(s, "loading")
                    }
                    .bind(this),
                    hideProgress: function() {
                        this.restoringApp = !1,
                        Object(o.removeClass)(s, "loading")
                    }
                    .bind(this)
                }),
                !1
            },
            ttCommon: function(e, t, s, o, n) {
                return o && Object(c.cancelEvent)(o),
                s ? Object(b.showTooltip)(e, {
                    center: s,
                    shift: n || [0, 8, 8],
                    black: 1,
                    text: t
                }) : showTitle(e, t, n)
            },
            scrollToSearch: function() {
                var e = Object(o.ge)("page_header_cont")
                  , t = Object(o.ge)("settings_search_wrap");
                if (t && e) {
                    var s = Object(o.getXY)(Object(o.domPN)(t))[1] - Object(o.getSize)(e)[1];
                    scrollNode.scrollTop > s && Object(a.scrollToY)(s, 200)
                }
            },
            deactivateBox: function() {
                return showBox("al_settings.php", {
                    act: "deactivate_box"
                }, {
                    params: {
                        dark: !0
                    }
                }),
                !1
            },
            showValidateDevices: function(e, t) {
                return ajax.post("al_settings.php", {
                    act: "a_validate_devices",
                    hash: t
                }, {
                    onDone: function(t) {
                        tooltips.hideAll();
                        var s = Object(o.ce)("div", {
                            innerHTML: t,
                            className: "unshown"
                        });
                        e.parentNode.replaceChild(s, e),
                        slideDown(s, 100)
                    }
                }),
                !1
            },
            deleteValidateDevice: function(e, t, s, o) {
                if (o) {
                    var n = e.parentNode;
                    return ajax.post("al_settings.php", {
                        act: "a_del_validate_device",
                        dhash: t,
                        hash: s
                    }, {
                        onDone: function(e) {
                            n.innerHTML = e
                        },
                        showProgress: function() {
                            cur.confirmBox.showProgress()
                        },
                        hideProgress: function() {
                            cur.confirmBox.hide()
                        }
                    }),
                    !1
                }
                cur.confirmBox = Object(h.showFastBox)({
                    title: cur.lang.global_action_confirmation,
                    dark: 1,
                    forceNoBtn: 1,
                    bodyStyle: "padding: 20px; line-height: 160%;"
                }, cur.lang.settings_delete_validate_device_confirm, Object(l.getLang)("global_delete"), (function() {
                    M.deleteValidateDevice(e, t, s, !0)
                }
                ), Object(l.getLang)("global_cancel"))
            },
            showNotifySubscriptions: function(e) {
                return Object(o.hasClass)(e, "settings_no_subscriptions") || showBox("al_settings.php", {
                    act: "notify_subscriptions_box"
                }, {
                    stat: [jsc("web/indexer.js")]
                }),
                !1
            },
            notifySubscriptionsInit: function(e, t, s) {
                s.onListClick = M.notifySubscriptionToggle,
                cur.subsOList = new OList(e,t,{},s),
                e.removeButtons().addButton(Object(l.getLang)("global_close"), (function() {
                    e.hide(200)
                }
                ), "yes")
            },
            notifySubscriptionToggle: function(e, t) {
                var s = Object(o.geByClass1)("_subscriptions_count")
                  , i = e.id.match(/-?\d+/)[0]
                  , a = !1
                  , c = 0;
                Object(n.each)(cur.subsOList.owners, (function(e, t) {
                    cur.subsOList.selected[t[0]] || c++,
                    !1 === a && this[0] == i && (a = this[4])
                }
                )),
                s && (Object(o.toggleClass)(s, "settings_no_subscriptions", !c),
                Object(o.val)(s, c ? Object(l.getLang)("settings_notify_subscriptions_count", c) : Object(l.getLang)("settings_notify_no_subscriptions"))),
                ajax.post("/al_wall.php", {
                    act: "a_toggle_posts_subscription",
                    subscribe: t ? 1 : 0,
                    oid: i,
                    hash: a
                }, {
                    showProgress: o.addClass.pbind(e, "olist_item_loading"),
                    hideProgress: o.removeClass.pbind(e, "olist_item_loading")
                })
            },
            showGroupNotifySources: function(e, t) {
                return Object(c.cancelEvent)(e),
                showBox("al_settings.php", {
                    act: "group_notify_sources_box",
                    source: t
                }, {
                    params: {
                        dark: 1,
                        width: 450,
                        bodyStyle: "padding: 0",
                        containerClass: "group_notify_sources_box flist_list_radio"
                    }
                }),
                !1
            },
            initShowGroupNotifySourcesBox: function(e, t) {
                var s = window.cur || {};
                Object(n.extend)(s, t),
                e.removeButtons(),
                e.addButton(t.okBtnText, this.groupNotifyPopupSubmit.bind(this)),
                Object(n.extend)(s, {
                    popupSubmitBtnEl: curBox().btns.ok[0],
                    popupSelectedGroup: 0,
                    popupGroupsWrapperEl: Object(o.geByClass1)("_add_community_app_groups"),
                    popupContentEl: Object(o.geByClass1)("_add_community_app_content")
                }),
                Object(r.disableButton)(s.popupSubmitBtnEl, !0),
                s.popupGroupsEls = Object(o.geByClass)("flist_item", s.popupGroupsWrapperEl, "div"),
                1 === s.popupGroupsEls.length && this.groupNotifyPopup(s.popupGroupsEls[0]),
                Object(n.each)(s.popupGroupsEls, function(e, t) {
                    Object(c.addEvent)(t, "click", this.groupNotifyPopup.bind(this, t))
                }
                .bind(this))
            },
            groupNotifyPopup: function(e) {
                var t = Object(n.intval)(e.getAttribute("data-id"));
                cur.popupSelectedGroup = t,
                Object(n.each)(cur.popupGroupsEls, (function(t, s) {
                    (s === e ? o.addClass : o.removeClass)(s.parentNode, "flist_item_checked")
                }
                )),
                Object(r.disableButton)(cur.popupSubmitBtnEl, 0 === cur.popupSelectedGroup)
            },
            groupNotifyPopupSubmit: function() {
                var e = cur.popupSelectedGroup;
                Object(o.isVisible)(cur.popupSubmitBtnEl) && !Object(r.isButtonLocked)(cur.popupSubmitBtnEl) && 0 !== e && TopNotifier.addNewSource(e, cur.popup_hash, 2)
            },
            delGroupNotifySource: function(e, t, s, o) {
                Object(c.cancelEvent)(e);
                var n = Object(h.showFastBox)(Object(l.getLang)("settings_group_notify_disable_title"), Object(l.getLang)("settings_group_notify_disable_text"), Object(l.getLang)("settings_group_notify_disable_yes"), (function() {
                    n.hide(),
                    ajax.post("al_settings.php", {
                        act: "a_group_notify_del_source",
                        gid: t,
                        hash: s
                    }, {
                        onDone: function(e) {
                            t == o ? (TopNotifier && TopNotifier.changeSource("", null, null),
                            nav.go("/settings?act=notify")) : nav.reload()
                        },
                        showProgress: r.lockButton.pbind(cur.popupSubmitBtnEl),
                        hideProgress: r.unlockButton.pbind(cur.popupSubmitBtnEl)
                    })
                }
                ), Object(l.getLang)("global_cancel"))
            },
            addSourcePopup: function(e) {
                Object(o.hide)(Object(o.geByClass1)("notify_sources")),
                TopNotifier && TopNotifier.hide(),
                this.showGroupNotifySources(e, "popup")
            },
            groupNotify_disabledSetting: function(e) {
                showTitle(e, Object(l.getLang)("settings_group_notify_disable_tooltip"), null, {
                    shift: [-17, 14],
                    className: "settings_group_notifications_disable_tooltip",
                    needLeft: 1
                })
            },
            initRepliesOrder: function() {
                var e = Object(o.ge)("settings_replies_order");
                e && cur.options.replies_order_items && (cur.repliesReorderDD = new InlineDropdown(e,{
                    items: cur.options.replies_order_items,
                    selected: cur.options.replies_order_cur || cur.options.replies_order_items[0][0],
                    onSelect: function(e) {
                        ajax.post("al_settings.php", {
                            act: "change_replies_order",
                            order: e,
                            hash: cur.options.replies_order_hash
                        }, {
                            onDone: function() {
                                window.uiPageBlock && window.uiPageBlock.showSaved("settings_replies_order")
                            }
                        })
                    }
                }),
                cur.options.order_settings_feature_tooltip && setTimeout((function() {
                    cur.options && cur.options.order_settings_feature_tooltip_hash && M.showOrderSettingsTooltip(cur.options.order_settings_feature_tooltip_hash)
                }
                ), 800))
            },
            showOrderSettingsTooltip: function(e) {
                var t = Object(o.ge)("settings_replies_order");
                t && (cur.orderSettingsFeatureTT = new ElementTooltip(t,{
                    content: '<div class="feature_tooltip__close" onclick="cur.orderSettingsFeatureTT.hide();"></div>' + Object(l.getLang)("wall_order_settings_feature_text"),
                    forceSide: "top",
                    cls: "feature_intro_tt feature_info_tooltip order_settings_feature_tooltip",
                    autoShow: !1,
                    noHideOnClick: !0,
                    noAutoHideOnWindowClick: !0,
                    appendToParent: !0,
                    offset: [0, -4],
                    onHide: function() {
                        ajax.post("al_index.php", {
                            act: "hide_feature_tt",
                            hash: e,
                            type: "order_settings_web"
                        }),
                        cur.orderSettingsFeatureTT.destroy(),
                        delete cur.orderSettingsFeatureTT
                    }
                }),
                cur.orderSettingsFeatureTT.show())
            },
            showMoneyLinksTooltip: function() {
                var e = Object(o.geByClass1)("_money_request_btn", "wide_column");
                cur.moneylinks_feature_tooltip && e && setTimeout((function() {
                    cur.moneyLinksTooltip = new ElementTooltip(e,{
                        content: '<div class="feature_tooltip__close" onclick="cur.moneyLinksTooltip.hide();"></div>' + Object(l.getLang)("settings_payments_moneylinks_feature_text"),
                        cls: "feature_intro_tt feature_info_tooltip moneylinks_feature_tooltip",
                        forceSide: "top",
                        width: 270,
                        autoShow: !1,
                        noHideOnClick: !0,
                        noAutoHideOnWindowClick: !0,
                        appendToParent: !0,
                        offset: [0, -4],
                        onHide: function() {
                            ajax.post("al_index.php", {
                                act: "hide_feature_tt",
                                hash: cur.moneylinks_feature_tooltip_hash,
                                type: "moneylinks"
                            }),
                            M.hideMoneyLinksTooltip()
                        }
                    }),
                    cur.moneyLinksTooltip.show(),
                    cur.destroy.push(M.hideMoneyLinksTooltip)
                }
                ), 1e3)
            },
            hideMoneyLinksTooltip: function() {
                cur.moneyLinksTooltip && (cur.moneyLinksTooltip.destroy(),
                delete cur.moneyLinksTooltip)
            },
            cancelDonutSubscription: function(e, t, s) {
                return showBox("al_settings.php", {
                    act: "a_cancel_donut",
                    owner_id: t,
                    hash: s
                }, {
                    onDone: function(e) {
                        e.setButtons(Object(l.getLang)("settings_donut_confirm"), (function() {
                            Object(r.lockButton)(e.btns.ok[0]),
                            M.applyCancelDonutSubscription(t, s, e)
                        }
                        ), Object(l.getLang)("settings_donut_cancel_button_cancel"))
                    },
                    onFail: g.showErrorBox
                }),
                Object(c.cancelEvent)(e)
            },
            applyCancelDonutSubscription: function(e, t, s) {
                ajax.post("al_settings.php", {
                    act: "a_cancel_donut_apply",
                    owner_id: e,
                    hash: t
                }, {
                    onDone: function() {
                        s && s.hide(),
                        window.nav.reload({
                            noback: !0
                        })
                    },
                    onFail: function(e) {
                        if (s) {
                            var t = Object(o.geByClass1)("error", s.bodyNode);
                            t && (Object(o.val)(t, e),
                            Object(o.show)(t)),
                            Object(r.unlockButton)(s.btns.ok[0])
                        }
                    }
                })
            },
            showGroupMessagesNotifyBox: function(e, t) {
                return Object(c.cancelEvent)(e),
                showBox("al_settings.php", {
                    act: "group_notify_messages_box",
                    source: t
                }, {
                    params: {
                        dark: 1,
                        width: 560,
                        bodyStyle: "padding: 0",
                        containerClass: "group_notify_messages_box"
                    }
                }),
                !1
            },
            initShowGroupMessagesNotifyBox: function(e, t) {
                var s = this
                  , i = window.cur || {};
                Object(n.extend)(i, t),
                e.removeButtons(),
                e.addButton(t.okBtnText, this.submitSettingsGroupMessagesNotifyPopup.bind(this)),
                e.addButton(t.cancelBtnText, e.hide, "no"),
                Object(n.extend)(i, {
                    popupGroupRowsWrapperToggler: Object(o.geByClass1)("settings_group_rows_wrapper_toggler"),
                    popupGroupRowsWrapper: Object(o.geByClass1)("settings_group_rows_wrapper"),
                    popupSubmitBtnEl: curBox().btns.ok[0]
                }),
                this.toggleSettingsGroupMessagesNotifyRows(!0),
                i.popupGroupsEls = Object(o.geByClass)("flist_item", i.popupGroupRowsWrapper, "div"),
                Object(n.each)(i.popupGroupsEls, (function(e, t) {
                    Object(c.addEvent)(t, "click", s.changeSettingsGroupMessagesNotifyRowState.bind(s, t))
                }
                ))
            },
            toggleSettingsGroupMessagesNotifyRows: function(e) {
                e || Object(o.toggleClass)(cur.popupGroupRowsWrapperToggler, "on");
                var t = Object(o.hasClass)(cur.popupGroupRowsWrapperToggler, "on");
                Object(o.toggleClass)(cur.popupGroupRowsWrapper, "hidden", !t)
            },
            changeSettingsGroupMessagesNotifyRowState: function(e) {
                Object(o.toggleClass)(e, "flist_item_checked")
            },
            saveGroupMessagesNotifySettings: function(e) {
                var t = {
                    is_enabled: e.is_enabled ? 1 : 0,
                    groups_map: JSON.stringify(e.groups_map),
                    promo_group_id: cur.gid,
                    hash: cur.popup_hash
                };
                clearTimeout(cur.instantNotifyTO),
                clearTimeout(cur.instantNotifySaveTO),
                cur.instantNotifyTO = setTimeout(ajax.post.pbind("/settings?act=a_group_messages_notify_save", t, {
                    onDone: e=>{
                        curBox().hide(),
                        cur.instantNotifySaveTO = setTimeout(window.uiPageBlock && uiPageBlock.showSaved.pbind("settings_notify_group_messages_link"), 1e3);
                        var t = Object(o.geByClass1)("settings_separated_row_hint", "settings_group_messages_row");
                        t && (t.innerHTML = e.hint);
                        var s = Object(o.geByClass1)("group-messages-notify-block");
                        s && e.hide_promo && slideUp(s, 200, o.re.pbind(s))
                    }
                    ,
                    showProgress: r.lockButton.pbind(cur.popupSubmitBtnEl),
                    hideProgress: r.unlockButton.pbind(cur.popupSubmitBtnEl)
                }), 500),
                TopNotifier && TopNotifier.invalidate()
            },
            submitSettingsGroupMessagesNotifyPopup: function() {
                var e = {
                    is_enabled: null,
                    groups_map: {}
                };
                Object(o.isVisible)(cur.popupSubmitBtnEl) && !Object(r.isButtonLocked)(cur.popupSubmitBtnEl) && (e.is_enabled = Object(o.hasClass)(cur.popupGroupRowsWrapperToggler, "on"),
                Object(n.each)(cur.popupGroupsEls, (function(t, s) {
                    e.groups_map[s.getAttribute("data-id")] = Object(o.hasClass)(s, "flist_item_checked") ? "1" : "0"
                }
                )),
                this.saveGroupMessagesNotifySettings(e))
            },
            refreshPaymentHistory: function() {
                var e = document.getElementById("settings_payments_history_panel");
                if (e) {
                    var t = {
                        act: "payments_history"
                    };
                    if (nav) {
                        var s = nav.fromStr(nav.strLoc).section;
                        s && (t.section = s)
                    }
                    ajax.post("al_settings.php", t, {
                        onDone: function(t) {
                            t && (e.innerHTML = t)
                        }
                    })
                }
            }
        }
    },
    "6krn": function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, "getLang", (function() {
            return a
        }
        ));
        var o = s("nAFc")
          , n = s("4+be")
          , i = {};
        function a(e, t, s) {
            void 0 === t && (t = !1);
            var a = "number" == typeof t
              , c = t || a
              , r = e + (c ? ".raw" : "");
            if (void 0 === i[r]) {
                var l = c ? Object(n.getLang)(e, "raw") : Object(n.getLang)(e);
                "string" == typeof l ? i[r] = Object(o.decodeHTMLEntities)(l) : Array.isArray(l) && (i[r] = l.map(o.decodeHTMLEntities))
            }
            if (a) {
                var u = t;
                return Object(n.langNumeric)(u, i[r], s)
            }
            return i[r] || ""
        }
        t.default = {
            getLang: a
        }
    },
    "7ZXl": function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, "ModalFooter", (function() {
            return i
        }
        ));
        var o = s("q1tI")
          , n = s.n(o)
          , i = function(e) {
            var t = e.actionButtons
              , s = e.hint;
            return n.a.createElement("div", {
                className: "ModalFooter"
            }, n.a.createElement("div", {
                className: "ModalFooter__inner"
            }, s && n.a.createElement("div", {
                className: "ModalFooter__hint"
            }, s), t))
        }
    },
    "MV/q": function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, "default", (function() {
            return c
        }
        ));
        s("91GP"),
        s("ioFf"),
        s("rGqo"),
        s("Btvt");
        var o = s("q1tI")
          , n = (s("17x9"),
        s("ZxpX"));
        function i() {
            return (i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var o in s)
                        Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function a(e, t) {
            if (null == e)
                return {};
            var s, o, n = function(e, t) {
                if (null == e)
                    return {};
                var s, o, n = {}, i = Object.keys(e);
                for (o = 0; o < i.length; o++)
                    s = i[o],
                    t.indexOf(s) >= 0 || (n[s] = e[s]);
                return n
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                    s = i[o],
                    t.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s])
            }
            return n
        }
        class c extends o.Component {
            constructor(e) {
                super(e),
                this.getRef = e=>{
                    this.element = e
                }
                ,
                this.resize = ()=>{
                    var e = this.element;
                    if (e) {
                        var t = e.offsetHeight
                          , s = e.scrollHeight
                          , o = 0;
                        s + o <= t && (o = 0),
                        e.value && this.setState({
                            height: s - o
                        }),
                        this.setState({
                            height: 0
                        }, ()=>{
                            var t = e.scrollHeight - o;
                            this.setState({
                                height: t
                            }),
                            this.props.onResize(e)
                        }
                        )
                    }
                }
                ,
                this.onChange = e=>{
                    this.props.grow && this.resize(),
                    this.isControlledOutside || this.setState({
                        value: e.target.value
                    }),
                    this.props.onChange && this.props.onChange(e)
                }
                ,
                this.state = {
                    value: void 0 === e.value ? e.initialValue || "" : void 0
                },
                void 0 !== e.value && (this.isControlledOutside = !0)
            }
            componentDidMount() {
                this.props.grow && this.resize()
            }
            render() {
                var e = this.props
                  , t = e.className
                  , s = (e.initialValue,
                e.grow,
                e.style)
                  , c = (e.onResize,
                e.value)
                  , r = a(e, ["className", "initialValue", "grow", "style", "onResize", "value"])
                  , l = this.isControlledOutside ? c : this.state.value
                  , u = this.state.height || s.height || 66;
                return o.createElement("textarea", i({}, r, {
                    value: l,
                    onChange: this.onChange,
                    onInput: this.onChange,
                    onPaste: this.onChange,
                    ref: this.getRef,
                    style: i({}, s, {
                        height: u
                    }),
                    className: Object(n.classNames)("Textarea", t)
                }))
            }
        }
        c.defaultProps = {
            initialValue: "",
            grow: !0,
            onResize: ()=>{}
            ,
            style: {}
        }
    },
    "Xq7/": function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, "ModalHeader", (function() {
            return a
        }
        ));
        var o = s("q1tI")
          , n = s.n(o)
          , i = s("ZxpX")
          , a = function(e) {
            var t = e.title
              , s = e.onClose
              , o = e.appearance
              , a = void 0 === o ? "white" : o
              , c = e.backText
              , r = e.onBack
              , l = Object(i.classNames)("ModalHeader", "ModalHeader--" + a);
            return n.a.createElement("div", {
                className: l
            }, c && n.a.createElement("button", {
                className: "ModalHeader__back",
                onClick: r
            }, c), n.a.createElement("h1", {
                className: "ModalHeader__title"
            }, t), n.a.createElement("button", {
                className: "ModalHeader__cross",
                type: "button",
                onClick: s
            }, "Закрыть"))
        }
    },
    r7nW: function(e, t, s) {
        "use strict";
        s.r(t);
        var o = s("q1tI")
          , n = s("i8i4")
          , i = (s("17x9"),
        s("ZxpX"));
        class a extends o.Component {
            constructor() {
                super(...arguments),
                this.getScrollbarWidth = ()=>{
                    var e = document.createElement("div");
                    e.classList.add("BaseModal__scrollbarMeasure"),
                    document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e),
                    t
                }
                ,
                this.hideScrollBar = ()=>{
                    var e = document.body.getBoundingClientRect()
                      , t = e.left + e.right < window.innerWidth
                      , s = this.getScrollbarWidth();
                    this.calculatedPadding = window.getComputedStyle(document.body)["padding-right"],
                    t && (document.body.style.paddingRight = parseFloat(this.calculatedPadding) + s + "px"),
                    document.body.classList.add("BaseModal__bodyHiddenOverflow")
                }
                ,
                this.showScrollBar = ()=>{
                    document.body.style.paddingRight = this.calculatedPadding,
                    document.body.classList.remove("BaseModal__bodyHiddenOverflow")
                }
                ,
                this.onDocumentKeyDown = e=>{
                    var t = this.props.onClose;
                    "Escape" === e.key && t()
                }
                ,
                this.onBackdropClick = ()=>{
                    var e = this.props
                      , t = e.onClose
                      , s = e.onBackdropClick;
                    e.disableBackdropClick || (s ? s() : t())
                }
            }
            componentDidMount() {
                var e = this.props
                  , t = e.disableEscapeClose
                  , s = e.disableBodyScroll;
                t || document.body.addEventListener("keydown", this.onDocumentKeyDown),
                s && this.hideScrollBar()
            }
            componentWillUnmount() {
                var e = this.props
                  , t = e.disableEscapeClose
                  , s = e.disableBodyScroll;
                t || document.body.removeEventListener("keydown", this.onDocumentKeyDown),
                s && this.showScrollBar()
            }
            renderModal() {
                var e = this.props.className
                  , t = Object(i.classNames)("BaseModal", e);
                return o.createElement("div", {
                    className: t,
                    "aria-modal": "true"
                }, o.createElement("div", {
                    className: "BaseModal__backdrop",
                    onClick: this.onBackdropClick
                }), o.createElement("div", {
                    className: "BaseModal__content"
                }, this.props.children))
            }
            render() {
                return n.createPortal(this.renderModal(), document.body)
            }
        }
        a.defaultProps = {
            className: "",
            children: null,
            disableBackdropClick: !1,
            disableEscapeClose: !1,
            disableBodyScroll: !1
        },
        t.default = a
    }
}]);
try {
    stManager.done("cmodules/bundles/cf19e21322d7644d3594feafd9858add.3c8bf11fdf9db2a7fdef.js")
} catch (e) {}
