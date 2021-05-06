import Hero from '../../styles/assets/Portugal.jpg'
import { useEffect } from 'react'
import { prism } from 'prism-animation';

const HeroImage = (raceData) => {

    useEffect(() => {
        prism(".hero-image", {
            opacity: 1,
            delay: 600,
            duration: 800,
            easing: "inOutCubic",
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="hero-image">
                    <div className="hero-label">
                        <h3>{raceData.raceData.raceName}</h3>
                    </div>
                    <div className="hero-overlay" />
                    <div className="hero-wrapper">
                        <img src={Hero}></img>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroImage