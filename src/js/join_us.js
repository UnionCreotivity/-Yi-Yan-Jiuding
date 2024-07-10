window.onload = function () {

    // let loadingScreen = document.querySelector(".loading-screen");
    // let loadingText = document.getElementById("loading-text");
    // let percent = 1;
    // function updateProgress() {

    //     loadingText.textContent = percent + " %";
    //     percent++;
    //     if (percent <= 100) {
    //         setTimeout(updateProgress, 10);
    //     } else {

    //         let tl = gsap.timeline({});
    //         tl.to(loadingScreen, { duration: 1, opacity: 0, ease: "power1.inOut" })
    //             .to(loadingScreen, { duration: 1, display: 'none', })

    //     }

    // }

    // updateProgress();

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
                    stagger: {
                        each: 0.07,
                        from: "start"
                    },
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

    var swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
        spaceBetween: 0,
        pagination: {
            el: ".swiperpagination1",
            clickable: true,
            type: "bullets",
        },
        navigation: {
            prevEl: ".prev1",
            nextEl: ".next1",
        },
        breakpoints: {
            1025: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
            },
        },
    });

    function uploadFile() {
        let file = document.querySelector("#file-input");

        file.addEventListener("change", function () {
            let fileName = this.files[0] ? this.files[0].name : "尚未上傳附件";
            document.querySelector(".file-name").textContent = fileName;
        });
    }
    uploadFile();

    function changeContent() {
        let tabs = document.querySelectorAll(".tab");
        let list = document.querySelectorAll(".join-us-box");

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", (e) => {
                tabs.forEach((t) => {
                    t.classList.remove("tab-active");
                });

                list.forEach((content) => {
                    content.classList.remove("active");
                    content.style.display = "none";
                });

                tab.classList.add("tab-active");

                list[index].style.display = "flex";

                setTimeout(() => {
                    list[index].classList.add("active");
                }, 10);
            });
        });
    }
    changeContent();
};
