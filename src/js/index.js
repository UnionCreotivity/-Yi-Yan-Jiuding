window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

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
                slidesPerView: 4,
                spaceBetween: 15,
            },
        },
    });

    const newsSwiper = new Swiper(".news-swiper", {

        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3000,
        },

        navigation: {
            nextEl: ".news-next",
            prevEl: ".news-prev",
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

        const newsSwiper = new Swiper(".moblie-news2-swiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 1500,
            // autoplay: {
            //     delay: 3000,
            // },

            navigation: {
                nextEl: ".moblie-news2-next",
                prevEl: ".moblie-news2-prev",
            },


        });
    }






    // function setPlaybackRate() {
    //     var video = document.querySelector("#tree-video");
    //     video.onplay = function () {
    //         video.playbackRate = 0.5;
    //     };
    // }
    // setPlaybackRate();

    function c1PinAni() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".c1-container",
                start: "top top",
                end: "+=180%",
                scrub: 2,
                pin: ".c1-container",
                pinSpacing: true,
            },
        });

        tl.to(".first-bg", { duration: 1, filter: "grayscale(0) contrast(1)" }, "<")
            .to(
                ".c1-container",
                { duration: 1, backgroundImage: "none", backgroundColor: "white" },
                "<"
            )
            .to(
                ".fb-box,.line-box,.yt-box",
                { duration: 1, filter: "grayscale(0) brightness(1)" },
                "<"
            )
            .to(
                ".c1-container .left-box .text-box",
                { duration: 1, color: "black" },
                "<"
            )
            .to(".first-bg", { duration: 1, opacity: 0 })
            .to(".second-bg", { duration: 1, opacity: 1 }, "<");
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

                .to(".black2-1 .clip-text div div", {
                    clipPath: "inset(0% 0% 0% 0%)",
                    stagger: {
                        each: 0.05,
                        from: "start",
                    },
                })
                .to(
                    ".black2-2 .clip-text div div",
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
                    ".black2-3 .clip-text div div",
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
                    ".black2-4 .clip-text div div",
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
                    "<"
                );
        }
    }
    c2Ani();
};
