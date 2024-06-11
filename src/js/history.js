window.onload = function () {
    var window_width = window.screen.width;
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

    if (window_width > 1024) {
        const mySwiper = new Swiper(".history-swiper", {
            slidesPerView: 5,
            loop: true,

            spaceBetween: 55,
            navigation: {
                nextEl: ".history-next",
                prevEl: ".history-prev",
            },
            breakpoints: {
                1920: {
                    spaceBetween: 55,
                },
                1440: {
                    spaceBetween: 30,
                },
                1366: {
                    spaceBetween: 35,
                },
            },
            on: {
                slideChange: function () {
                    const index_currentSlide = this.realIndex;
                    const banner_text = document.querySelectorAll(
                        ".swiper-project-contnet"
                    );

                    banner_text.forEach((text, index) => {
                        text.style.display = index === index_currentSlide ? "flex" : "none";
                    });
                },
            },
        });
    }
};
