import { useEffect } from 'react'
import ResultsTable from './resultTable'


import { tableAnimation } from '../../animations/components/table'

const Table = (raceData) => {

    const getRaceName = () => raceData.raceData.raceName;
    const getRaceDate = () => raceData.raceData.date;

    useEffect(() => tableAnimation(), [])

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
