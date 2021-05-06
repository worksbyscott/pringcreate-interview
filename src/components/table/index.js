import { useEffect } from 'react'
import ResultsTable from './resultTable'
import { prism } from 'prism-animation'

const Table = (raceData) => {

    const getRaceName = () => {
        return raceData.raceData.raceName;
    }

    const getRaceDate = () => {
        return raceData.raceData.date;
    }

    useEffect(() => {

        prism(".results", {
            opacity: 1,
            delay: 700,
            duration: 1000,
            easing: "inOutCubic",
        })

    }, [])



    return (
        <div className="container">
            <div className="row">
                <div className="results">
                    <div className="results-header">
                        <h1>{getRaceName()}</h1>
                        <h1>{getRaceDate()}</h1>
                    </div>
                    <div className="results-table">
                        <ResultsTable raceData={raceData.raceData.Results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
