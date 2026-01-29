import {
    bgNoise as e
} from "./modules/bg-noise.js";
import {
    navigation as o
} from "./modules/hamburger.js";
import {
    ddlMenu as t
} from "./modules/ddl-menu.js";
import {
    textAnim as r
} from "./modules/text-anim.js";
import {
    lazyLoad as s
} from "./modules/lazy-load.js";
import {
    cursor as a
} from "./modules/custom-cursor.js";
import {
    getStarted as z
} from "./datepicker.js";
import {
    buttons as i,
    circleButtons as n,
    marquise as l,
    accordion as c,
    directionSpin as m,
    inView as d,
    locationView as u,
    customSelect as p,
    showHideNav as q,
    heroImage as x
} from "./modules/small-animations.js";
import {
    testimonials as f
} from "./modules/testimonials.js";
import {
    video as g
} from "./modules/video.js";
import {
    spinner as y
} from "./modules/spinner.js";
import {
    timeline as h
} from "./modules/timeline.js";
import {
    svgLineAnim as v
} from "./modules/svg-line-anim.js";
import {
    teamBio as j
} from "./modules/team.js";
import {
    locationSlider as _
} from "./modules/location-slider.js";
import {
    sharePin as S
} from "./modules/blog.js";
let intro = function() {
        var e, o;
        document.querySelector(".home") && document.querySelector("body").classList.contains("loading") ? Promise.all([new FontFaceObserver("Solaris").load()]).then(function() {
            var e = document.querySelector(".intro-loader img"),
                o = document.querySelector(".intro-loader div"),
                t = (gsap.set(e, {
                    yPercent: -200
                }), gsap.set(["#ball", "#cursor"], {
                    scale: 0
                }), new SplitText(".home #hero h1", {
                    type: "lines, chars"
                })),
                a = (gsap.set(t.chars, {
                    transformOrigin: "0% 100%",
                    xPercent: -50,
                    scaleX: .25,
                    opacity: 0
                }), gsap.timeline());
            a.to(e, {
                scale: 1,
                duration: 2,
                yPercent: -50,
                // rotate: 1080,
                ease: "expo.inOut"
            }), a.to(e, {
                scale: 0,
                duration: 1,
                // rotate: 3080,
                ease: "expo.inOut"
            }), a.to(o, {
                scale: 1,
                duration: 1,
                ease: "expo.inOut"
            }, "<"), a.to(".intro-loader", {
                opacity: 0,
                pointerEvents: "none",
                ease: "power4",
                duration: .4
            }, "-=.2"), a.to(t.chars, {
                opacity: 1,
                duration: 1,
                scaleX: 1,
                xPercent: 0,
                stagger: {
                    amount: .25
                },
                ease: "expo"
            }, "-=.2"), a.from(".home #hero h2", {
                opacity: 0,
                duration: .5,
                y: -40,
                ease: "expo"
            }, "-=1"), a.from(".home #hero .button-wrap", {
                opacity: 0,
                duration: .5,
                y: -20,
                ease: "expo"
            }, "-=.8"), a.to(["#ball", "#cursor"], {
                scale: 1
            }, "<"), a.to(["#logo", "#navigation", "#hamb-icon"], {
                opacity: 1,
                duration: .5,
                ease: "expo",
                onComplete() {
                    document.querySelector("body").classList.remove("loading")
                }
            }, "-=.8"), a.from([".home #hero video"], {
                opacity: 0,
                duration: 1,
                ease: "power4.inOur"
            }, "-=.5")
        }) : document.querySelector(".home") && !document.querySelector("body").classList.contains("loading") && (e = new SplitText(".home #hero h1", {
            type: "lines, chars"
        }), gsap.set(e.chars, {
            transformOrigin: "0% 100%",
            xPercent: -50,
            scaleX: .25,
            opacity: 0
        }), (o = gsap.timeline()).to(e.chars, {
            opacity: 1,
            duration: 1,
            scaleX: 1,
            xPercent: 0,
            stagger: {
                amount: .25
            },
            ease: "expo"
        }, "-=.2"), o.from(".home #hero h2", {
            opacity: 0,
            duration: .5,
            y: -40,
            ease: "expo"
        }, "-=1"), o.from(".home #hero .button-wrap", {
            opacity: 0,
            duration: .5,
            y: -20,
            ease: "expo"
        }, "-=.8"))
    },
    cursorAction = (document.addEventListener("DOMContentLoaded", () => {
        e(), intro(), t(), a(), smoothScroll(), o(), y(), r(), i(), n(), l(), c(), f(), g(), _(), v(), m(), s(), d(), u(), h(), j(), S(), p(), q(), x(), z(), document.querySelector(".home") || document.querySelector("body").classList.remove("loading"), document.querySelector(".video-wrap") && !isMobile() && smoother.effects(".video-wrap", {
            speed: .8
        }), document.querySelector(".img-wrap") && !isMobile() && smoother.effects(".img-wrap", {
            speed: .8
        })
    }), function() {
        var e = document.querySelectorAll("a"),
            o = document.querySelectorAll(".team-list article");
        e.forEach(e => {
            e.addEventListener("mouseenter", function() {
                gsap.to("#cursor", {
                    scale: 4,
                    duration: .25,
                    ease: "power4"
                })
            }), e.addEventListener("mouseleave", function() {
                gsap.to("#cursor", {
                    scale: 1,
                    duration: .25,
                    ease: "power4"
                })
            })
        }), o.forEach(e => {
            e.addEventListener("mouseenter", function() {
                gsap.to("#cursor", {
                    scale: 4,
                    duration: .25,
                    ease: "power4"
                })
            }), e.addEventListener("mouseleave", function() {
                gsap.to("#cursor", {
                    scale: 1,
                    duration: .25,
                    ease: "power4"
                })
            })
        })
    }),
    navTag = (cursorAction(), document.querySelector("#navigation")),
    burger = document.querySelector("#hamb-icon");
if (1024 < window.innerWidth) {
    let e = function() {
            burger.classList.add("scrolled"), navTag.classList.add("scrolled")
        },
        o = function() {
            burger.classList.remove("scrolled"), navTag.classList.remove("scrolled")
        };
    ScrollTrigger.create({
        id: "hamb",
        trigger: bodyTag,
        start: "top -300",
        toggleActions: "play none none reverse",
        onEnter: e,
        onLeaveBack: o
    })
}
let loadIco = function() {
    var e;
    document.querySelector(".blog") && (e = gsap.utils.toArray(".load-articles i"), gsap.set(e, {
        scale: 0
    }), gsap.timeline({
        repeat: -1,
        scrollTrigger: {
            trigger: "#blog-listing",
            start: "bottom bottom",
            end: "bottom top",
            toggleActions: "play pause play pause"
        }
    }).to(e, {
        scale: 1,
        duration: .5,
        stagger: {
            amount: .25,
            from: "start",
            yoyo: !0,
            repeat: -1
        },
        ease: "power4.inOut"
    }))
};
loadIco(), $(".page-link").click(function(e) {
    var o;
    $("#smooth-wrapper").hasClass("no-smoothState-at-all") || (e.preventDefault(), e = $("#smooth-wrapper").smoothState().data("smoothState"), o = $(this).attr("href"), e.load(o))
}), $(function() {
    "use strict";
    $.getScript("./local-mc-validate.js");
    var o = $("#smooth-wrapper").smoothState({
        prefetch: !0,
        blacklist: ".no-smoothState",
        cacheLength: 2,
        onStart: {
            duration: 850,
            render: function(e) {
                e.addClass("is-exiting"), o.restartCSSAnimations(), gsap.to("#noise", {
                    opacity: .25,
                    duration: .6,
                    ease: "power2.in"
                }), gsap.to(wrapperTag, {
                    opacity: 0,
                    duration: .6,
                    ease: "power2.in"
                }), isMobile() && gsap.to(["#logo", "#hamb-icon"], {
                    yPercent: 0,
                    duration: .3,
                    ease: "power4"
                })
            }
        },
        onReady: {
            render: function(e, o) {
                e.removeClass("is-exiting pending"), e.addClass("is-animating"), e.html(o), ScrollTrigger.killAll()
            }
        },
        onAfter: function(e, o) {
            e.removeClass("is-animating"), gsap.to("#noise", {
                opacity: .08,
                duration: .65,
                ease: "linear"
            }), gsap.fromTo(wrapperTag, {
                opacity: 0
            }, {
                opacity: 1,
                duration: .65,
                ease: "linear"
            }), burger.classList.remove("scrolled"), navTag.classList.remove("scrolled"), 1024 < window.innerWidth && ScrollTrigger.create({
                id: "hamb",
                trigger: bodyTag,
                start: "top -300",
                toggleActions: "play none none reverse",
                onEnter: function() {
                    burger.classList.add("scrolled"), navTag.classList.add("scrolled")
                },
                onLeaveBack: function() {
                    burger.classList.remove("scrolled"), navTag.classList.remove("scrolled")
                }
            }), $.getScript("./local-mc-validate.js"), cursorAction(), smoothScroll(), y(), r(), i(), n(), l(), c(), f(), g(), _(), v(), m(), s(), d(), u(), h(), j(), S(), z(), loadIco(), p(), q(), x(), intro(), document.querySelector(".video-wrap") && !isMobile() && smoother.effects(".video-wrap", {
                speed: .8
            }), document.querySelector(".img-wrap") && !isMobile() && smoother.effects(".img-wrap", {
                speed: .8
            })
        }
    }).data("smoothState")
});