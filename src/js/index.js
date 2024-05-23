window.onload = function () {
    // gsap.to('.outer', {
    //     clipPath: 'polygon(6% 33%, 94% 33%, 94% 67%, 6% 67%)',
    //     clipPath: 'polygon(0% -13%, 100% 87%, 100% 121%, 0% 17%)',
    //     scrollTrigger: {
    //         trigger: '.outer',
    //         start: 'top top',
    //         end: '+=100%',
    //         scrub: true,
    //         pin: true
    //     }
    // })
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // clipPath: 'polygon(27% 12%, 73% 12%, 73% 88%, 27% 88%)',
    //     clipPath: 'polygon(15% 25%, 85% 25%, 85% 75%, 15% 75%)',
    //clipPath: 'polygon(6% 33%, 94% 33%, 94% 67%, 6% 67%)',
    // clipPath: 'polygon(0% -13%, 100% 87%, 100% 121%, 0% 17%)',//斜切


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.outer',
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true
        }
    });

    tl.to('.outer', {

        clipPath: 'polygon(6% 33%, 94% 33%, 94% 67%, 6% 67%)',//寬長方形

    }).to('.outer', {
        clipPath: 'polygon(0% -13%, 100% 87%, 100% 121%, 0% 17%)', //斜切
    })

}