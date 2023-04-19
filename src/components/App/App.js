import './App.css'
import { useState, useEffect } from 'react';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import { cleanDriverData } from '../../utilities';
import Header from "../Header/Header";
import RacePage from '../RacePage/RacePage';
import TeamPage from '../TeamPage/TeamPage';
import DriversPage from '../DriversPage/DriversPage';

const App = () => {
  const [allDrivers, setAllDrivers] = useState([]);
  const [team, setTeam] = useState({});

  useEffect(() => {
    setAllDrivers(cleanDriverData());
    // cleanDriverData().then(data => setAllDrivers(data))
  }, []);

  const setTeamDrivers = (drivers, name) => {
    setTeam({'drivers': drivers, 'name': name});
  }
  
  return (
    <div>
      <Header path={useLocation().pathname} />
      <main>
        <Switch>
          <Route exact path='/'> 
            <RacePage allDrivers={allDrivers} setTeamDrivers={setTeamDrivers} />
          </Route>
          <Route path='/team'> <TeamPage teamName={team.name}/> </Route>
          <Route path='/drivers'> <DriversPage allDrivers={allDrivers} /> </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;