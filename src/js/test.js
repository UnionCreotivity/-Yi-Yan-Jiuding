window.onload = function () {

    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // 獲取畫布元素
    // let canvasEl = document.getElementById('canvas');
    // let context = canvasEl.getContext('2d');

    // // 創建視頻元素
    // let videoEl = document.createElement('video');
    // videoEl.src = '/src/assets/images/BG_black_1.mp4';
    // videoEl.muted = true; // 靜音
    // videoEl.autoplay = false; // 關閉自動播放
    // videoEl.playsInline = true; // 使其能在行內播放（移動端適用）
    // videoEl.style.display = 'none'; // 隱藏視頻元素
    // document.body.appendChild(videoEl);

    // // 當視頻資料加載完成後設定畫布尺寸
    // videoEl.addEventListener('loadeddata', function () {
    //     canvasEl.width = videoEl.videoWidth;
    //     canvasEl.height = videoEl.videoHeight;
    //     // 在觸摸事件中開始播放影片
    //     canvasEl.addEventListener('touchstart', function () {
    //         if (videoEl.paused) {
    //             videoEl.play();
    //         }
    //     });
    //     updateCanvas();
    // });

    // function updateCanvas() {
    //     if (!videoEl.paused && !videoEl.ended) {
    //         // 繪製視頻幀到畫布上
    //         context.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
    //         // 請求下一幀
    //         requestAnimationFrame(updateCanvas);
    //     }
    // }

    function c1Ani() {
        let title1 = gsap.utils.toArray(".index-box .content-box .title-1");
        let splitEN1 = title1.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));
        let title2 = gsap.utils.toArray(".index-box .content-box .title-2");
        let splitEN2 = title2.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));

        let titleZH = gsap.utils.toArray(".index-box .content-box .zh-title");
        let splitZH = titleZH.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.content-box',
                start: 'top top',
                end: '+=100%',
                scrub: 2,
                pin: true,
                pinSpacing: false
            }
        });

        tl.to('.outer', {
            clipPath: 'polygon(11% 33%, 89% 33%, 89% 67%, 11% 67%)',
        }).to('.title-1-box', {
            duration: 1,
            ease: 'power2.inOut',
            left: '33.5%',
            top: '27.5%',
            stagger: {
                each: 0.05,
                from: 'end'
            }
        }, '<')
            .to('.title-2-box', {
                duration: 0.7,
                ease: 'power2.inOut',
                left: '28%',
                top: '60.8%',
                stagger: {
                    each: 0.05,
                    from: 'start'
                }
            }, '<')
            .to('.zh-title', {
                duration: 0.7,
                ease: 'power2.inOut',
                top: '48.5%',
            }, '<')
            .to('.outer', {
                clipPath: 'polygon(-20% -20%, 120% 107%, 120% 120%, -20% -7%)',
            })
            .to(splitEN1[0].chars, {
                duration: 1,
                ease: 'power2.inOut',
                y: 140,
                stagger: {
                    each: 0.07,
                    from: 'end'
                }
            }, '<-0.1')
            .to(splitEN2[0].chars, {
                duration: 1,
                ease: 'power2.inOut',
                y: 300,
                stagger: {
                    each: 0.07,
                    from: 'end'
                }
            }, '<-0.1')
            .to(splitZH[0].chars, {
                duration: 1,
                ease: 'power2.inOut',
                y: 300,
                stagger: {
                    each: 0.07,
                    from: 'end'
                }
            }, '<')
            .to('.outer', {
                clipPath: 'polygon(50% 0%, 50% 100%, 50% 100%, 50% 0%)', //直線
            }, '<0.6')
            .to('.c1-logo', {
                opacity: 0,
                ease: 'power2.inOut',
            }, '<0.3')

    }
    c1Ani();

    function c2Ani() {

        let smallENtitleArray = gsap.utils.toArray(".black-text");
        let smallENtitle = smallENtitleArray.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));

        let smallENtitle2Array = gsap.utils.toArray(".black2-text");
        let smallENtitle2 = smallENtitle2Array.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));

        let smallENtitleGoldArray = gsap.utils.toArray(".gold-text");
        let smallENtitle3 = smallENtitleGoldArray.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.c2-text-content-box',
                // start: 'top top',
                // end: '+=100%',
                start: 'top top',
                end: '+=350%',
                scrub: 3,
                pin: true,
                pinSpacing: true
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
            .to('.red-logo', { duration: 1, opacity: 1, }, '<0.8')
            .to('.red-logo', { duration: 1, opacity: 0, }, '<0.15')
            .to('.c2-img', { duration: 1, opacity: 1, ease: 'power1.inOut', }, '<0.2')
            .to('.c2-video', { duration: 1, maskSize: '7%', ease: 'power1.inOut' }, '<0.3')
            .fromTo('.c2-video', { maskPosition: '53%' },
                { duration: 5, maskSize: '1300%', maskPosition: '45%' })
            .to('.black-box', { duration: 2, y: '-30vw' }, '<0.3')
            .fromTo('.card3', { y: '10vw' }, { y: 0, duration: 3, opacity: 1, ease: 'power1.inOut', }, '<2')


    }
    c2Ani();

    function c3Ani() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.main-content-box',
                start: '-80%',
                end: '+=100%',
                scrub: 2,

            }
        });

        tl.to('.c2-text-content-box', { duration: 1, scale: '0.85' })
    }
    // c3Ani();
}

