window.onload = function () {

    var window_width = window.innerWidth;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

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

    function contentChange() {
        let tabs = document.querySelectorAll(".tab");
        let tabContent = document.querySelectorAll(".about-tab-content");

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", (e) => {
                tabs.forEach((t) => {
                    t.classList.remove("tab-active");
                });

                tabContent.forEach((content, order) => {
                    content.classList.remove("active");
                    content.style.display = "none";
                });

                tab.classList.add("tab-active");

                tabContent[index].style.display = "flex";
                if (index === 1) {
                    circlePinAni();
                    circleScrollAni();
                }

                if (index === 2) {
                    mobileSwiperNav();
                }


                setTimeout(() => {
                    tabContent[index].classList.add("active");
                }, 10);
            });
        });
    }
    contentChange();

    function circleScrollAni() {

        if (window_width <= 1024) {


        }
        else {

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".uniuqe-box",
                    start: "top top",
                    // end: '+=180%',
                    end: "+=250%",
                    scrub: 2,
                },
            });

            tl.to(".left-circle-box", { duration: 1, x: "65%", width: "34%", y: "60%" })
                .to(
                    ".center-circle-box",
                    { duration: 1, x: "3%", width: "34%", y: "1.2%" },
                    "<"
                )
                .to(
                    ".right-circle-box",
                    { duration: 1, x: "-35%", width: "34%", y: "63%" },
                    "<"
                )
                .to(".circle-box div .zh-text", {
                    opacity: 1,
                    duration: 3,
                    ease: "power1.inOut",
                    stagger: {
                        each: 0.2,
                        from: "start",
                    },
                })
                .to(
                    ".circle-box div .en-text",
                    {
                        opacity: 1,
                        ease: "power1.inOut",
                        duration: 3,
                        stagger: {
                            each: 0.3,
                            from: "start",
                        },
                    },
                    "<"
                )
                .to(
                    ".circle-add",
                    {
                        opacity: 1,
                        ease: "power1.inOut",
                        duration: 1,
                        stagger: {
                            each: 0.5,
                            from: "start",
                        },
                    },
                    "<"
                )
                .to(".center-circle-box", { duration: 2, width: "31.5%", y: "-12%" })
                .to(
                    ".left-circle-box",
                    { duration: 2, width: "31.5%", y: "75%", x: "115%" },
                    "<"
                )
                .to(
                    ".right-circle-box",
                    { duration: 2, width: "31.5%", y: "78%", x: "-85%" },
                    "<"
                )
                .to(
                    ".center-circle-box .zh-text,.center-circle-box .en-text,.center-circle-box .circle-add",
                    { duration: 1, y: "-5%", opacity: 0 },
                    "<0.2"
                )
                .fromTo(
                    ".about-logo",
                    { scale: "0.3" },
                    { scale: "0.8", duration: 1.5, opacity: 1 },
                    "<"
                )
                .to(
                    ".left-circle-box .zh-text,.left-circle-box .en-text,.left-circle-box .circle-add",
                    { duration: 1, y: "-5%", opacity: 0 },
                    "<0.2"
                )
                .to(
                    ".right-circle-box .zh-text,.right-circle-box .en-text",
                    { duration: 1, y: "-5%", opacity: 0 },
                    "<0.2"
                )
                .to(".center-circle-box", { duration: 2, y: "2%" })
                .to(".left-circle-box", { duration: 2, y: "65.6%", x: "152.15%" }, "<")
                .to(".about-logo", { duration: 1, scale: "1.5" }, "<")
                .to(".right-circle-box", { duration: 2, y: "68.9%", x: "-128.8%" }, "<")
                .to(".left-circle-box", { duration: 1, opacity: 0 })
                .to(".right-circle-box", { duration: 1, opacity: 0 })
        }

    }

    function circlePinAni() {
        if (window_width <= 500) {

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".uniuqe-box .content-mobile",
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    pin: ".circle-box",
                    pinSpacing: true,
                },
            });
            tl.to('.right-circle-box', { duration: 1, y: '75%' })
                .to('.left-circle-box', { duration: 1, y: '-77%' }, '<')
                .to('.right-circle-box,.left-circle-box', { opacity: 0, }, '<0.85')
                .to(".circle-box div .zh-text", { opacity: 0, }, '<')
                .to(".circle-box div .en-text", { opacity: 0, }, "<")
                .to(".circle-add", { opacity: 0, }, "<")
                .fromTo(".about-logo", { scale: "0.4" }, { scale: "1", duration: 1, opacity: 1 }, "<0.3")

        } else if (window_width <= 1024) {

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".circle-box",
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    pin: ".circle-box",
                    pinSpacing: true,
                },
            });
            tl.to('.right-circle-box', { duration: 1, y: '78%' })
                .to('.left-circle-box', { duration: 1, y: '-80%' }, '<')
                .to('.right-circle-box,.left-circle-box', { opacity: 0, }, '<0.85')
                .to(".circle-box div .zh-text", { opacity: 0, }, '<')
                .to(".circle-box div .en-text", { opacity: 0, }, "<")
                .to(".circle-add", { opacity: 0, }, "<")
                .fromTo(".about-logo", { scale: "0.4" }, { scale: "1", duration: 1, opacity: 1 }, "<0.3")

        }
        else {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".circle-box",
                    start: "top top",
                    end: "+=300%",
                    end: "+=330%",
                    scrub: 2,
                    pin: true, pinSpacing: false,
                },
            });
        }
    }
    // circlePinAni()

    function leftYearButton() {
        let yearTabs = document.querySelectorAll(".year-tiem");
        let yearContent = document.querySelectorAll(".year-tab-box");

        yearTabs.forEach((tab, index) => {
            tab.addEventListener("click", (e) => {
                yearTabs.forEach((t) => {
                    t.classList.remove("tab-active");
                });

                yearContent.forEach((content) => {
                    content.classList.remove("active");
                    content.style.display = "none";
                });

                tab.classList.add("tab-active");

                yearContent[index].style.display = "flex";

                setTimeout(() => {
                    yearContent[index].classList.add("active");
                }, 10);
            });
        });
    }
    leftYearButton();

    function mobileSwiperNav() {


        const IMGSwiper = new Swiper(".mobile-content-img-swiper", {
            loop: true, effect: 'fade',
            fadeEffect: {
                crossFade: true,
            }
        });
        const textSwiper = new Swiper(".mobile-content-text-swiper", {
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            }
        });

        const navSwiper = new Swiper(".mobile-nav-swiper", {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
            navigation: {
                nextEl: ".mobile-nav-next",
                prevEl: ".mobile-nav-prev",
            },
            on: {
                slideNextTransitionStart: function (swiper) {
                    IMGSwiper.slideNext();
                    textSwiper.slideNext();
                },

                slidePrevTransitionStart: function (swiper) {
                    IMGSwiper.slidePrev();
                    textSwiper.slidePrev();
                },
            },
        });
    }

};
