import { prism } from 'prism-animation'
import { ReactComponent as Logo } from "../../styles/assets/logo.svg"
import { useEffect } from 'react'

const Introduction = ({ remove }) => {

    useEffect(() => {
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
    }, [])

    return (
        <div className="intro-background">
            <div className="intro-logo">
                <Logo />
            </div>
        </div>

    )
}

export default Introduction
