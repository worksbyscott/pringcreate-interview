import { prism } from 'prism-animation'

export const heroAnimation = () => {
    prism(".hero-image", {
        opacity: 1,
        delay: 600,
        duration: 800,
        easing: "inOutCubic",
    })
}