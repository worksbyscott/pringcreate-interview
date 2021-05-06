import { ReactComponent as Logo } from '../styles/assets/logo.svg'
import { useEffect } from 'react'
import { prism } from 'prism-animation';

const Navigation = () => {

    useEffect(() => {
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
    }, [])

    return (
        <nav>
            <div className="container">
                <div className="row v-center">
                    <div className="nav-logo">
                        <Logo />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
