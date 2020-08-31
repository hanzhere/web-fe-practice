const circleType = new CircleType(document.getElementById('rotated'))

TweenMax.from(".artist", 2, {
    delay: 5.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".watch", 2, {
    delay: 5.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".menu", 2, {
    delay: 5.6,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".rotatethis", 2, {
    delay: 6,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".social-media ul li", 2, {
    delay: 3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.1)

TweenMax.fromTo(".hero-title h1", 0.3, {
    x: -6,
    y: 2,
    opacity: 0
},
{
    delay: 5,
    x: 6,
    y: -2,
    opacity: 1,
    ease: RoughEase.ease.config({
        strength: 8,
        points: 40,
        template: Linear.easeNone,
        randomize: false
    }), clearProps: "all"
})

TweenMax.fromTo(".hero-title p", 0.3, {
    x: -6,
    y: 2,
    opacity: 0
},
{
    delay: 1,
    x: 6,
    y: -2,
    opacity: 1,
    ease: RoughEase.ease.config({
        strength: 8,
        points: 40,
        template: Linear.easeNone,
        randomize: false
    }), clearProps: "all"
})