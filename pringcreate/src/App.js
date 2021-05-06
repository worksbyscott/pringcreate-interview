import { useEffect, useState } from 'react'
import axios from 'axios'

import Navigation from './components/navigation'
import Table from './components/table'
import HeroImage from './components/hero'
import Introduction from './components/introduction'

import './styles/App.scss';

const App = () => {

  //Introduction allows axios to retrieve the data without place holders
  const [completeIntroduction, setIntroduction] = useState(true)
  const [raceResults, setRaceResults] = useState(null)

  //Get Race results from API 
  useEffect(() => {
    axios.get('http://ergast.com/api/f1/current/last/results.json')
      .then((response) => setRaceResults(response.data.MRData.RaceTable.Races[0]))
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className="App">
      {completeIntroduction ? (
        <Introduction remove={setIntroduction} />
      ) : (
        <div className="page-content">
          <Navigation />
          <HeroImage raceData={raceResults} />
          <Table raceData={raceResults} />
        </div>

      )}
    </div>
  );
}

export default App;
