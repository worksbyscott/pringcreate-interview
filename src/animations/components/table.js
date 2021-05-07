import { prism } from 'prism-animation'

export const tableAnimation = () => {
    prism(".results", {
        opacity: 1,
        delay: 700,
        duration: 1000,
        easing: "inOutCubic",
    })
}