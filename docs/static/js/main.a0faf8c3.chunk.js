(this["webpackJsonprpi-lab3"] = this["webpackJsonprpi-lab3"] || []).push([[0], {
    74: function (e, t, a) {
    }, 87: function (e, t, a) {
        "use strict";
        a.r(t);
        var c = a(0), n = a(19), s = a.n(n), l = a(11), i = a(7), r = a(99), o = a(102), j = a(93), d = a(101),
            b = a(95), h = a(96), x = a(97), O = (a(52), a(105));

        function u() {
            var e = Object(O.a)(), t = e.t, a = e.i18n;

            function n() {
                var e = localStorage.getItem("lang");
                return null === e ? "en" : e
            }

            return Object(c.useEffect)((function () {
                a.changeLanguage(n())
            }), []), {
                t: t, getCurrLang: n, setLang: function (e) {
                    localStorage.setItem("lang", e), a.changeLanguage(e)
                }
            }
        }

        a(74);
        var m = a(13), g = a(103);

        function p(e) {
            var t = Object(c.useState)(!1), a = Object(m.a)(t, 2), n = a[0], s = a[1], l = Object(c.useRef)(null);

            function i(e, t) {
                var a = t.split("."), c = e;
                return a.forEach((function (e) {
                    c = c.hasOwnProperty(e) ? c[e] : null
                })), c
            }

            return Object(c.useEffect)((function () {
                fetch("/rpi-lab3/db/" + e).then((function (e) {
                    return e.json()
                })).then((function (t) {
                    if (void 0 === t) throw new Error(e + " not found");
                    if (!t.hasOwnProperty("data")) throw new Error("Invalid file format " + e);
                    l.current = t.data, s(!0)
                }))
            }), []), [n, function (e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ("" === t) return l.current;
                var c = [];
                return null !== l.current && l.current.forEach((function (n) {
                    var s = i(n, e);
                    null !== s && (!0 === a && s === t || !1 === a && -1 !== s.toLowerCase().indexOf(t.toLowerCase())) && c.push(n)
                })), c
            }]
        }

        var f = a(1);

        function v(e) {
            var t = u(), a = t.t, n = t.getCurrLang, s = Object(c.useState)(null), i = Object(m.a)(s, 2), r = i[0],
                o = i[1], d = p("poetsShort.json"), b = Object(m.a)(d, 2), h = b[0], x = b[1];
            return Object(c.useEffect)((function () {
                if (h) {
                    var e = x("", ""), t = (a = e.length, Math.floor(Math.random() * a));
                    o(e[t])
                }
                var a
            }), [h]), Object(f.jsx)(j.a, {
                id: e.id,
                style: e.style,
                fluid: !0,
                className: "d-flex flex-column justify-content-center align-items-center",
                children: !0 === h && null !== r ? Object(f.jsxs)(f.Fragment, {
                    children: [Object(f.jsx)("h3", {children: a("landing.poetOfTheDay")}), Object(f.jsxs)(g.a, {
                        className: "text-center",
                        style: {width: "18rem"},
                        bg: "light",
                        children: [Object(f.jsx)(g.a.Img, {
                            variant: "top",
                            src: r.photoUrl
                        }), Object(f.jsxs)(g.a.Body, {
                            children: [Object(f.jsx)(g.a.Title, {children: r.name[n()]}), Object(f.jsxs)(g.a.Subtitle, {
                                className: "font-style: italic",
                                children: [r.dob, " - ", r.dod]
                            }), Object(f.jsx)(g.a.Text, {children: r.description[n()]}), Object(f.jsx)(l.b, {
                                className: "btn btn-dark",
                                to: "/poets/" + r.id,
                                children: a("landing.poetLink")
                            })]
                        })]
                    })]
                }) : Object(f.jsx)("span", {children: "Loading"})
            })
        }

        var N = a(94), y = a(18), A = a.p + "static/media/valera.jpg",
            Bc = a.p + "static/media/Ilya.jpg",
            Cc = a.p + "static/media/egor.jpg",
            k = a.p + "static/media/none.jpg";
        function L() {
            var e = u().setLang;
            return Object(f.jsxs)(r.a, {
                children: [Object(f.jsx)(r.a.Toggle, {
                    variant: "dark",
                    children: Object(f.jsx)(N.a, {})
                }), Object(f.jsxs)(r.a.Menu, {
                    children: [Object(f.jsx)(r.a.Item, {
                        onClick: function () {
                            return e("ru")
                        }, children: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
                    }), Object(f.jsx)(r.a.Item, {
                        onClick: function () {
                            return e("en")
                        }, children: "English"
                    })]
                })]
            })
        }

        var I = function () {
            var e = u().t;
            return Object(f.jsxs)(f.Fragment, {
                children: [Object(f.jsx)(o.a, {
                    fixed: "top",
                    collapseOnSelect: !0,
                    expand: "lg",
                    bg: "dark",
                    variant: "dark",
                    children: Object(f.jsxs)(j.a, {
                        fluid: "md",
                        children: [Object(f.jsx)(y.a, {
                            smooth: !0,
                            className: "navbar-brand",
                            to: "#land",
                            children: "Belarusian Poets"
                        }), " ", Object(f.jsx)(o.a.Toggle, {"aria-controls": "responsive-navbar-nav"}), Object(f.jsx)(o.a.Collapse, {
                            id: "responsive-navbar-nav",
                            children: Object(f.jsxs)(d.a, {
                                className: "ml-auto",
                                children: [Object(f.jsx)(l.b, {
                                    className: "nav-link",
                                    to: "/poets",
                                    children: e("navbar.poets")
                                }), Object(f.jsx)(y.a, {
                                    className: "nav-link",
                                    smooth: !0,
                                    to: "#desc",
                                    children: e("navbar.desc")
                                }), Object(f.jsx)(y.a, {
                                    className: "nav-link",
                                    smooth: !0,
                                    to: "#daily",
                                    children: e("navbar.daily")
                                }), Object(f.jsx)(y.a, {
                                    className: "nav-link",
                                    smooth: !0,
                                    to: "#devs",
                                    children: e("navbar.devs")
                                }), Object(f.jsx)(L, {})]
                            })
                        })]
                    })
                }), Object(f.jsx)(j.a, {
                    id: "land",
                    fluid: !0,
                    style: {backgroundColor: "#29ab49"},
                    children: Object(f.jsxs)(j.a, {
                        style: {height: "100vh", color: "#1e46d7"},
                        fluid: "lg",
                        className: "d-flex flex-column justify-content-center",
                        children: [Object(f.jsx)(b.a, {
                            className: "justify-content-center",
                            children: Object(f.jsx)("h1", {
                                className: "big-heading text-center",
                                children: e("landing.label")
                            })
                        }), Object(f.jsx)(b.a, {
                            className: "justify-content-center",
                            children: Object(f.jsx)("h2", {className: "text-center", children: e("landing.title")})
                        }), Object(f.jsx)(b.a, {
                            className: "justify-content-center",
                            children: Object(f.jsx)(l.b, {
                                className: "btn btn-lg rounded-pill btn-outline-success",
                                to: "/poets",
                                children: e("landing.button")
                            })
                        })]
                    })
                }), Object(f.jsx)(j.a, {
                    id: "desc",
                    fluid: !0,
                    style: {
                        backgroundImage: "linear-gradient(152deg, rgba(242,81,90,1) 0%, rgba(116,57,133,1) 68%, rgba(76,50,119,1) 100%)",
                        height: "100vh"
                    },
                    children: Object(f.jsx)(j.a, {
                        className: "h-100",
                        style: {backgroundImage: "url(" + k + ")", backgroundSize: "cover"},
                        children: Object(f.jsx)(b.a, {
                            className: "h-100",
                            children: Object(f.jsxs)(h.a, {
                                style: {color: "white"},
                                className: "d-flex flex-column justify-content-center align-items-center",
                                children: [Object(f.jsx)("h2", {
                                    className: "display-2 font-weight-normal",
                                    children: e("landing.siteDescTitle")
                                }), Object(f.jsx)("p", {
                                    className: "lead font-weight-normal text-center",
                                    children: e("landing.siteDescText")
                                })]
                            })
                        })
                    })
                }), Object(f.jsx)(v, {style: {height: "100vh"}, id: "daily"}), Object(f.jsx)(j.a, {
                    id: "devs",
                    style: {height: "12vh", color: "gray"},
                    fluid: !0,
                    className: "bg-dark",
                    children: Object(f.jsx)(j.a, {
                        fluid: "md", className: "h-100", children: Object(f.jsxs)(b.a, {
                            className: "h-100 d-flex align-items-center",
                            xs: 2,
                            md: 4,
                            lg: 8,
                            children: [Object(f.jsxs)(h.a, {
                                className: "", children: [Object(f.jsx)(x.a, {
                                    className: "mr-2",
                                    //src: "data:image/png;base64,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",
                                    src: Bc,
                                    roundedCircle: !0
                                }), Object(f.jsx)("a", {
                                    style: {color: "white"},
                                    className: "mb-0",
                                    href: "https://github.com/labovichl333",
                                    children: "Ilya Labovich"
                                })]
                            }), Object(f.jsxs)(h.a, {
                                className: "",
                                children: [Object(f.jsx)(x.a, {
                                    className: "mr-2",
                                    src: A,
                                    roundedCircle: !0
                                }), Object(f.jsx)("a", {
                                    style: {color: "white"},
                                    className: "mb-0",
                                    href: "https://github.com/Valeriy-01",
                                    children: "Valeriy Goreglyad"
                                })]
                            }), Object(f.jsxs)(h.a, {
                                className: "",
                                children: [Object(f.jsx)(x.a, {
                                    className: "mr-2",
                                    src: Cc,
                                    roundedCircle: !0
                                }), Object(f.jsx)("a", {
                                    style: {color: "white"},
                                    className: "mb-0",
                                    href: "https://github.com/voytforblr",
                                    children: "Egor Voytko"
                                })]
                            })]
                        })
                    })
                })]
            })
        }, E = a(98), Y = a(104), w = a(31), W = a.n(w);

        function z(e) {
            var t = u(), a = t.t, c = t.getCurrLang;
            if (null !== e.poets && e.poets.length > 0) {
                var n = [];
                return e.poets.forEach((function (e) {
                    n.push(Object(f.jsx)(h.a, {
                        className: "justify-content-center",
                        md: 4,
                        children: Object(f.jsxs)(g.a, {
                            className: "mb-5",
                            style: {width: "230px", height: "450px"},
                            children: [Object(f.jsx)(g.a.Img, {
                                variant: "top",
                                style: {height: "200px", objectFit: "cover", objectPosition: "left top"},
                                src: e.photoUrl
                            }), Object(f.jsxs)(g.a.Body, {
                                children: [Object(f.jsx)(g.a.Title, {children: e.name[c()]}), Object(f.jsx)(g.a.Text, {children: e.description[c()]}), Object(f.jsx)(l.b, {
                                    className: "mt-auto btn btn-dark",
                                    to: "/poets/" + e.id,
                                    children: a("landing.poetLink")
                                })]
                            })]
                        })
                    }, W()()))
                })), Object(f.jsx)(f.Fragment, {
                    children: Object(f.jsx)(j.a, {
                        fluid: "md",
                        children: Object(f.jsx)(b.a, {children: n})
                    })
                })
            }
            return null
        }

        var C = a(49), D = a(100);

        function q(e) {
            var t = u().getCurrLang, a = Object(c.useState)(!1), n = Object(m.a)(a, 2), s = n[0], l = n[1],
                i = Object(c.useState)(null), r = Object(m.a)(i, 2), o = r[0], d = r[1], x = p("poetsShort.json"),
                O = Object(m.a)(x, 2), g = O[0], v = O[1], N = p("poetsLong.json"), y = Object(m.a)(N, 2), A = y[0],
                k = y[1];
            return Object(c.useEffect)((function () {
                if (!0 === g && !0 === A) {
                    var t = v("id", parseInt(e.id), !0)[0], a = k("id", parseInt(e.id), !0)[0];
                    void 0 !== t && void 0 !== a ? (Object.assign(t, a), d(t), l(!0)) : l(!1)
                }
            }), [e.id, g, A]), Object(f.jsx)(f.Fragment, {
                children: !0 === s ? Object(f.jsxs)(f.Fragment, {
                    children: [Object(f.jsx)(j.a, {
                        className: "mb-5",
                        children: Object(f.jsxs)(b.a, {
                            children: [Object(f.jsx)(h.a, {
                                md: 3,
                                style: {height: "250px"},
                                children: Object(f.jsx)("img", {
                                    className: "w-100 h-100",
                                    style: {objectFit: "cover", objectPosition: "top"},
                                    src: o.photoUrl,
                                    alt: "Avatar"
                                })
                            }), Object(f.jsxs)(h.a, {
                                md: 9,
                                children: [Object(f.jsx)("h3", {children: o.name[t()]}), Object(f.jsxs)("h4", {children: [o.dob, " - ", o.dod]}), Object(f.jsx)("p", {children: o.longDescription[t()]})]
                            })]
                        })
                    }), Object(f.jsx)(j.a, {
                        id: "photos",
                        className: "mb-5",
                        children: Object(f.jsx)(D.a, {
                            style: {backgroundColor: "var(--dark)"}, children: function () {
                                var e = [];
                                return o.photos.forEach((function (t) {
                                    e.push(Object(f.jsx)(D.a.Item, {
                                        children: Object(f.jsx)("img", {
                                            style: {
                                                height: "60vh",
                                                objectFit: "cover",
                                                objectPosition: "top",
                                                margin: "auto"
                                            }, className: "d-block", src: t, alt: "Loading"
                                        })
                                    }, W()()))
                                })), e
                            }()
                        })
                    }), Object(f.jsx)(j.a, {
                        id: "bio",
                        children: Object(f.jsx)(C.Timeline, {
                            lineColor: "#ddd", children: function () {
                                var e = [];
                                return o.bio.forEach((function (a) {
                                    e.push(Object(f.jsxs)(C.TimelineItem, {
                                        dateText: a.date,
                                        children: [Object(f.jsx)("h3", {children: a.title[t()]}), Object(f.jsx)("p", {children: a.text[t()]})]
                                    }, W()()))
                                })), e
                            }()
                        })
                    }), Object(f.jsx)(j.a, {
                        id: "video",
                        style: {height: "60vh"},
                        className: "mb-5",
                        children: Object(f.jsx)("iframe", {
                            className: "w-100 h-100",
                            src: "https://www.youtube.com/embed/" + o.video,
                            title: "Poet video",
                            allowFullScreen: !0
                        })
                    }), Object(f.jsx)(j.a, {
                        id: "map",
                        style: {height: "60vh"},
                        className: "mb-5",
                        children: Object(f.jsx)("iframe", {
                            className: "w-100 h-100",
                            src: "https://www.google.com/maps/embed?pb=" + o.location,
                            title: "Poet location",
                            style: {border: 0},
                            loading: "lazy"
                        })
                    })]
                }) : Object(f.jsx)("h1", {children: "Loading..."})
            })
        }

        var F = function () {
            var e = u(), t = e.t, a = e.getCurrLang, n = Object(i.f)().id, s = p("poetsShort.json"),
                r = Object(m.a)(s, 2), b = r[0], h = r[1], x = Object(c.useState)(null), O = Object(m.a)(x, 2),
                g = O[0], v = O[1], N = Object(c.useState)(""), A = Object(m.a)(N, 2), k = A[0], I = A[1];
            return Object(c.useEffect)((function () {
                !0 === b && v(h("name." + a(), k))
            }), [b, k]), Object(f.jsxs)(f.Fragment, {
                children: [Object(f.jsx)(o.a, {
                    collapseOnSelect: !0,
                    expand: "lg",
                    bg: "dark",
                    className: "mb-5",
                    variant: "dark",
                    children: Object(f.jsxs)(j.a, {
                        fluid: "md",
                        children: [Object(f.jsx)(l.b, {
                            className: "navbar-brand",
                            to: "/",
                            children: "Belarusian Poets"
                        }), " ", Object(f.jsx)(o.a.Toggle, {"aria-controls": "responsive-navbar-nav"}), Object(f.jsx)(o.a.Collapse, {
                            id: "responsive-navbar-nav",
                            children: Object(f.jsxs)(d.a, {
                                className: "ml-auto",
                                children: [void 0 === n ? Object(f.jsx)(E.a, {
                                    className: "mr-4",
                                    children: Object(f.jsx)(Y.a, {
                                        value: k, onChange: function (e) {
                                            return I(e.target.value)
                                        }, placeholder: t("poets.search")
                                    })
                                }) : Object(f.jsxs)(f.Fragment, {
                                    children: [Object(f.jsx)(y.a, {
                                        className: "nav-link",
                                        smooth: !0,
                                        to: "#photos",
                                        children: t("poets.photos")
                                    }), Object(f.jsx)(y.a, {
                                        className: "nav-link",
                                        smooth: !0,
                                        to: "#bio",
                                        children: t("poets.bio")
                                    }), Object(f.jsx)(y.a, {
                                        className: "nav-link",
                                        smooth: !0,
                                        to: "#video",
                                        children: t("poets.video")
                                    }), Object(f.jsx)(y.a, {
                                        className: "nav-link",
                                        smooth: !0,
                                        to: "#map",
                                        children: t("poets.map")
                                    }), Object(f.jsx)(l.b, {
                                        className: "nav-link",
                                        to: "/poets",
                                        children: t("navbar.poets")
                                    })]
                                }), Object(f.jsx)(L, {})]
                            })
                        })]
                    })
                }), Object(f.jsx)(j.a, {children: void 0 === n ? !1 === b ? Object(f.jsx)("h1", {children: "Loading..."}) : Object(f.jsx)(z, {poets: g}) : Object(f.jsx)(q, {id: n})})]
            })
        }, J = function () {
            return Object(f.jsx)("div", {children: "Loading"})
        };
        var G = function () {
            return Object(f.jsx)(c.Suspense, {
                fallback: Object(f.jsx)(J, {}),
                children: Object(f.jsx)(l.a, {
                    basename: "/rpi-lab3",
                    children: Object(f.jsxs)(i.c, {
                        children: [Object(f.jsx)(i.a, {
                            exact: !0,
                            path: "/",
                            component: I
                        }), Object(f.jsx)(i.a, {path: "/poets/:id?", component: F})]
                    })
                })
            })
        }, P = a(50), S = a(62), B = a(32);
        P.a.use(S.a).use(B.e).init({
            backend: {loadPath: "/rpi-lab3/locales/{{lng}}/translation.json"},
            fallbackLng: "en",
            interpolation: {escapeValue: !1}
        });
        P.a;
        s.a.render(Object(f.jsx)(G, {}), document.getElementById("root"))
    }
}, [[87, 1, 2]]]);
//# sourceMappingURL=main.a0faf8c3.chunk.js.map
