import './App.css'
import { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { cleanDriverData } from '../../utilities';
import Header from "../Header/Header";
import RacePage from '../RacePage/RacePage';
import TeamPage from '../TeamPage/TeamPage';
import DriversPage from '../DriversPage/DriversPage';
import ResetPage from '../ResetPage/ResetPage';

const App = () => {
  const [allDrivers, setAllDrivers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    cleanDriverData().then(data => {
      if(typeof(data) === 'string') {
        setError(data);
      } else {
        setAllDrivers(data);
      }
    });
  }, []);

  const resetTeam = () => {
    setDrivers([]);
    setTeamName('');
  }

  return (
    <div>
      <Header path={useLocation().pathname} />
      <main>
        <Switch>
          <Route exact path='/'> 
            {drivers.length !== 2 && !error && <RacePage />}
            {drivers.length === 2 && !error && <ResetPage resetTeam={resetTeam} constructor={false} />}
            {error && <p className='error'>{error}</p>}
          </Route>
          <Route path='/team'> 
            <TeamPage 
              allDrivers={allDrivers} 
              drivers={drivers} 
              setDrivers={setDrivers} 
              teamName={teamName}
              setTeamName={setTeamName}
              resetTeam={resetTeam}
            /> 
          </Route>
          <Route path='/drivers'> <DriversPage allDrivers={allDrivers} /> </Route>
          <Route path='*'><p className='error'>No such page exists!</p></Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;