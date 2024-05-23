window.onload = function () {

    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    let smallENtitle1Array = gsap.utils.toArray(".black1");
    let smallENtitle1 = smallENtitle1Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));
    let smallENtitle2Array = gsap.utils.toArray(".black2");
    let smallENtitle2 = smallENtitle2Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));
    let smallENtitle3Array = gsap.utils.toArray(".black3");
    let smallENtitle3 = smallENtitle3Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));
    let smallENtitle4Array = gsap.utils.toArray(".black4");
    let smallENtitle4 = smallENtitle4Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));


    let smallENtitleGold1Array = gsap.utils.toArray(".gold1");
    let smallENtitleGold1 = smallENtitleGold1Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));
    let smallENtitleGold2Array = gsap.utils.toArray(".gold2");
    let smallENtitleGold2 = smallENtitleGold2Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));
    let smallENtitleGold3Array = gsap.utils.toArray(".gold3");
    let smallENtitleGold3 = smallENtitleGold3Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));
    let smallENtitleGold4Array = gsap.utils.toArray(".gold4");
    let smallENtitleGold4 = smallENtitleGold4Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));

    let smallENtitlebalck1Array = gsap.utils.toArray(".black2-1");
    let smallENtitleblack1 = smallENtitlebalck1Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));
    let smallENtitleblack2Array = gsap.utils.toArray(".black2-2");
    let smallENtitleblack2 = smallENtitleblack2Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));
    let smallENtitleblack3Array = gsap.utils.toArray(".black2-3");
    let smallENtitleblack3 = smallENtitleblack3Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));
    let smallENtitleblack4Array = gsap.utils.toArray(".black2-4");
    let smallENtitleblack4 = smallENtitleblack4Array.map(heading => new SplitText(heading, {
        type: "chars,words,lines", linesClass: "clip-text"
    }));

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.content-box',
            start: 'top top',
            end: '+=100%',
            scrub: 4,
            pin: true
        }
    });
    tl
        .to('.black1 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        })

        .to('.black2 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        }, '<')

        .to('.black3 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        }, '<')

        .to('.black4 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        }, '<')

        .to('.gold1 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        })
        .to('.gold2 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        }, '<')
        .to('.gold3 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        }, '<')
        .to('.gold4 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        }, '<')

        .to('.black2-1 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        })
        .to('.black2-2 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        }, '<')
        .to('.black2-3 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        }, '<')
        .to('.black2-4 .clip-text div div', {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: {
                each: 0.05,
                from: 'start'
            }
        }, '<')
}

