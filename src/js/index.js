window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.registerPlugin();
    function menuOpen() {
        let menu_btn = document.querySelector(".menu-box");
        let menu_box = document.querySelector(".menu-container-box");
        let menu_close = document.querySelector(".close-menu");
        var menu_tl = gsap.timeline({
            paused: true,
        });
        var menu_close_tl = gsap.timeline({});

        menu_tl
            .to(menu_box, {
                duration: 1,
                opacity: 1,
                zIndex: 9999,
                display: "flex",
                ease: "power1.inOut",
            })

            .from(
                ".menu-content .link-box",
                {
                    duration: 1,
                    x: -170,
                    opacity: 0,
                    ease: "power1.inOut",
                    stagger: { each: 0.07, from: "start" },
                },
                "<0.3"
            );

        menu_btn.addEventListener("click", () => {
            menu_tl.play(0);
        });

        menu_close.addEventListener("click", () => {
            menu_close_tl.to(menu_box, {
                duration: 1,
                opacity: 0,
                display: "none",
                zIndex: 0,
                ease: "power1.inOut",
            });
        });
    }
    menuOpen();

    let loadingScreen = document.querySelector(".loading-screen");
    let loadingText = document.getElementById("loading-text");
    let percent = 1;
    function updateProgress() {

        loadingText.textContent = percent + " %";
        percent++;
        if (percent <= 100) {
            setTimeout(updateProgress, 10);
        } else {

            let tl = gsap.timeline({});
            tl.to(loadingScreen, { duration: 1, opacity: 0, ease: "power1.inOut" })
                .to(loadingScreen, { duration: 1, display: 'none', })

        }

    }

    updateProgress();

    const mySwiper = new Swiper(".project-swiper", {

        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3000,
        },

        navigation: {
            nextEl: ".project-swiper-next",
            prevEl: ".project-swiper-prev",
        },
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            1025: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    const historySwiper = new Swiper(".history-swiper", {
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3000,
        },

        navigation: {
            nextEl: ".history-swiper-next",
            prevEl: ".history-swiper-prev",
        },
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            1025: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    var rightSwiperIndex;


    if (window_width > 1024) {
        const rightSwiper = new Swiper(".right-swiper", {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 20,
            allowTouchMove: false,
            speed: 1500,
            on: {
                init: function (swiper) {
                    rightSwiperIndex = this.activeIndex;
                },
            },
        });
        rightSwiper.slideTo(rightSwiperIndex + 1);


        const leftSwiper = new Swiper(".left-swiper", {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".left-swiper-next",
                prevEl: ".left-swiper-prev",
            },
            speed: 1500,
            autoplay: {
                delay: 3000,
            },
            allowTouchMove: false,
            on: {
                slideNextTransitionStart: function (swiper) {
                    rightSwiper.slideNext();
                },

                slidePrevTransitionStart: function (swiper) {
                    rightSwiper.slidePrev();
                },
            },
        });
    } else {

        const newsSwiper = new Swiper(".mobile-news2-swiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 1500,
            navigation: {
                nextEl: ".mobile-news2-next",
                prevEl: ".mobile-news2-prev",
            },
        });
    }

    function c1PinAni() {
        gsap.set('.main-content', { marginTop: "-100vh" })
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".c1-container",
                start: "top top",
                end: "+=260%",
                scrub: 2,
                pin: ".c1-container",
                pinSpacing: true,
                invalidateOnRefresh: true
            },
        });

        tl.to(".first-bg", {
            duration: 1,
            filter: "grayscale(0) contrast(1)"
        }, "<")
            .to(".first-bg", {
                duration: 1,
                opacity: 0
            })
            .to(".second-bg", {
                duration: 1,
                opacity: 1
            }, "<")
            .to(".c1-container", {
                duration: 1,
                onComplete: function () {
                    gsap.set(".c1-container", { pinSpacing: false });
                }
            });

    }
    c1PinAni();

    function c2Ani() {

        if (window_width > 1024) {
            let smallENtitleArray = gsap.utils.toArray(".black-text");
            let smallENtitle = smallENtitleArray.map(
                (heading) =>
                    new SplitText(heading, {
                        type: "chars,words,lines",
                        linesClass: "clip-text",
                    })
            );
            let smallENtitle2Array = gsap.utils.toArray(".black2-text");
            let smallENtitle2 = smallENtitle2Array.map(
                (heading) =>
                    new SplitText(heading, {
                        type: "chars,words,lines",
                        linesClass: "clip-text",
                    })
            );
            let smallENtitleGoldArray = gsap.utils.toArray(".gold-text");
            let smallENtitle3 = smallENtitleGoldArray.map(
                (heading) =>
                    new SplitText(heading, {
                        type: "chars,words,lines",
                        linesClass: "clip-text",
                    })
            );

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".main-content",
                    start: "top top",
                    end: "+=300%",
                    scrub: 2,
                    pin: ".main-content",
                    pinSpacing: true,
                },
            });
            tl.to(".black1 .clip-text div div", {
                clipPath: "inset(0% 0% 0% 0%)",
                stagger: {
                    each: 0.05,
                    from: "start",
                },
            })
                .to(
                    ".black2 .clip-text div div",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        stagger: {
                            each: 0.05,
                            from: "start",
                        },
                    },
                    "<"
                )
                .to(
                    ".black3 .clip-text div div",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        stagger: {
                            each: 0.05,
                            from: "start",
                        },
                    },
                    "<"
                )
                .to(
                    ".black4 .clip-text div div",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        stagger: {
                            each: 0.05,
                            from: "start",
                        },
                    },
                    "<"
                )
                .to(".gold1 .clip-text div div", {
                    clipPath: "inset(0% 0% 0% 0%)",
                    stagger: {
                        each: 0.05,
                        from: "start",
                    },
                })
                .to(
                    ".gold2 .clip-text div div",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        stagger: {
                            each: 0.05,
                            from: "start",
                        },
                    },
                    "<"
                )
                .to(
                    ".gold3 .clip-text div div",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        stagger: {
                            each: 0.05,
                            from: "start",
                        },
                    },
                    "<"
                )
                .to(
                    ".gold4 .clip-text div div",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        stagger: {
                            each: 0.05,
                            from: "start",
                        },
                    },
                    "<"
                )
                .to(
                    ".david-ogivy-box .title-box,.david-ogivy-box .bottom-content-box .smaill-title",
                    {
                        opacity: 1,
                        duration: 1,
                    },
                    "<0.3"
                )
                .to(
                    ".david-ogivy-box .bottom-content-box .center-box,.david-ogivy-box .bottom-content-box .right-box",
                    {
                        opacity: 1,
                        duration: 1,
                    },
                    "<0.65"
                )
        }
    }
    c2Ani();

    function historyPin() {
        if (window_width > 1024) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".history-container",
                    start: "-5%",
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false,
                },
            });
        }
    }
    historyPin();

    function joinAni() {
        if (window_width > 1024) {
            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".index-join-container",
                    start: "-30%",
                },
            });

            tl2.from('.index-join-content .ani-text', {
                duration: 1,
                y: '140',
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.1,
                }
            })
        } else {
            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".index-join-container",
                    start: "-45%",
                },
            });

            tl2.from('.index-join-content .ani-text', {
                duration: 1,

                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.1,
                }
            })
        }
    }
    joinAni();

    function projectTextAni() {
        let enTitle = gsap.utils.toArray(".project-container .title-box .en-title");
        let splitEnTitle = enTitle.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".project-container",
                start: "-40%",
            },
        });

        tl.fromTo(splitEnTitle[0].chars, {
            autoAlpha: 0,
            y: 200,
            filter: "blur(10px)",
        }, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            filter: "blur(0px)",
            ease: "power2",
            stagger: {
                each: 0.07,
                from: "random"
            }
        })
    }
    projectTextAni();

    function historyTextAni() {
        let enTitle = gsap.utils.toArray(".history-container .title-box .en-title");
        let splitEnTitle = enTitle.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".history-container",
                start: "-40%",
            },
        });

        tl.fromTo(splitEnTitle[0].chars, {
            autoAlpha: 0,
            y: 200,
            filter: "blur(10px)",
        }, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            filter: "blur(0px)",
            ease: "power2",
            stagger: {
                each: 0.07,
                from: "random"
            }
        })
    }
    historyTextAni();

    function news2TextAni() {
        if (window_width <= 1024) {
            let enTitle = gsap.utils.toArray(".news2-container .title-box .en-title-mobile");
            let splitEnTitle = enTitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".news2-container",
                    start: "-60%",
                },
            });

            tl.fromTo(splitEnTitle[0].chars, {
                autoAlpha: 0,
                y: 200,
                filter: "blur(10px)",
            }, {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                filter: "blur(0px)",
                ease: "power2",
                stagger: {
                    each: 0.07,
                    from: "random"
                }
            })
        } else {
            let enTitle = gsap.utils.toArray(".news2-container .title-box .en-title");
            let splitEnTitle = enTitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".news2-container",
                    start: "-40%",
                },
            });

            tl.fromTo(splitEnTitle[0].chars, {
                autoAlpha: 0,
                y: 200,
                filter: "blur(10px)",
            }, {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                filter: "blur(0px)",
                ease: "power2",
                stagger: {
                    each: 0.07,
                    from: "random"
                }
            })
        }

    }
    news2TextAni();
};
