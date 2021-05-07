import Hero from '../../styles/assets/Portugal.jpg'
import { useEffect } from 'react'
import { heroAnimation } from '../../animations/components/hero'

const HeroImage = (raceData) => {

    useEffect(() => heroAnimation(), [])

    return (
        <div className="container">
            <div className="row">
                <div className="hero-image">
                    <div className="hero-label">
                        <h3>{raceData.raceData.raceName}</h3>
                    </div>
                    <div className="hero-overlay" />
                    <div className="hero-wrapper">
                        <img alt="" src={Hero}></img>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroImage
