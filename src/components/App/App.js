import './App.css'
import { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { cleanConstructors, cleanDriverData, cleanSingleDriver } from '../../utilities';
import Header from "../Header/Header";
import RacePage from '../RacePage/RacePage';
import TeamPage from '../TeamPage/TeamPage';
import DriversPage from '../DriversPage/DriversPage';

const App = () => {
  const [allDrivers, setAllDrivers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [team, setTeam] = useState([]);
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    // setAllDrivers(cleanDriverData());
    cleanDriverData().then(data => setAllDrivers(data));
  }, []);

  return (
    <div>
      {console.log('app state', drivers)}
      <Header path={useLocation().pathname} />
      <main>
        <Switch>
          <Route exact path='/'> 
            {drivers.length !== 2 && <RacePage />}
          </Route>
          <Route path='/team'> 
            <TeamPage 
              allDrivers={allDrivers} 
              drivers={drivers} 
              setDrivers={setDrivers} 
              teamName={teamName}
              setTeamName={setTeamName}
              team={team}
              setTeam={setTeam}
            /> 
          </Route>
          <Route path='/drivers'> <DriversPage allDrivers={allDrivers} /> </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;