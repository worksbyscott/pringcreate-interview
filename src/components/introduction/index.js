import { introAnimation } from '../../animations/components/introduction'
import { ReactComponent as Logo } from "../../styles/assets/logo.svg"
import { useEffect } from 'react'

const Introduction = ({ remove }) => {

    useEffect(() => introAnimation(remove), [])

    return (
        <div className="intro-background">
            <div className="intro-logo">
                <Logo />
            </div>
        </div>

    )
}

export default Introduction
