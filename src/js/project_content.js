window.onload = function () {
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

    const swiper1 = new Swiper(".project-swiper", {
        loop: true,

        speed: 1500,
        effect: "fade",
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: ".swiperpagination1",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            prevEl: ".prev1",
            nextEl: ".next1",
        },
    });

    $(".scroll-top").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 800);
    });
};
