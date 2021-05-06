const ResultsTable = (raceData) => {

    const getDriveResults = () => raceData.raceData.sort((a, b) => a.position - b.position);

    const generateRows = () => {
        return getDriveResults().map(driver => (
            <tr key={driver.id}>
                <td>{driver.position}</td>
                <td>{driver.Driver.givenName + driver.Driver.familyName}</td>
                <td>{driver.Constructor.name}</td>
                <td>{driver.points}</td>
            </tr>
        ))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>POS</th>
                    <th>DRIVER</th>
                    <th>TEAM</th>
                    <th>PTS</th>
                </tr>
            </thead>
            <tbody>
                {generateRows()}
            </tbody>
        </table>
    )
}

export default ResultsTable
