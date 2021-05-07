import { prism } from 'prism-animation'

export const introAnimation = (remove) => {
    prism(".intro-background", {
        width: 0,
        delay: 4000,
        duration: 2000,
        easing: "inOutCubic",
        onComplete: () => { remove(false) }
    });
    prism(".intro-logo", {
        opacity: 1,
        scale: 1,
        duration: 3000,
        easing: "inOutCubic"
    })
}