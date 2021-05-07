import { prism } from 'prism-animation'

export const navAnimation = () => {
    prism("nav", {
        height: "160px",
        duration: 500,
        easing: "inOutCubic",
    });
    prism(".nav-logo", {
        opacity: 1,
        delay: 450,
        duration: 500,
        easing: "inOutCubic"
    })
}