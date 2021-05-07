import { ReactComponent as Logo } from '../styles/assets/logo.svg'
import { useEffect } from 'react'
import { navAnimation } from "../animations/components/navigation";

const Navigation = () => {

    useEffect(() => navAnimation(), [])

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
