import './App.css'
import { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { cleanDriverData } from '../../utilities.js';
import Header from "../Header/Header";
import RacePage from '../RacePage/RacePage';
import TeamPage from '../TeamPage/TeamPage';
import DriversPage from '../DriversPage/DriversPage';

// when App mounts, fetch all driver rankings for the 2021 Season
// clean data, store it in allDrivers, send to DriversPage
// iterate through and for now keep the rankings and display them as is
// create a function in App that fires when two drivers are chosen and removes them from AllDrivers & then mashes together the leftover teams
// rearrange the standings accordingly

const App = () => {
  const [allDrivers, setAllDrivers] = useState();

  useEffect(() => {
    setAllDrivers(cleanDriverData())
    // cleanDriverData().then(data => setAllDrivers(data))
  }, [])

  return (
    <div>
      {console.log(allDrivers)}
      <Header path={useLocation().pathname} />
      <main>
        <Switch>
        <Route exact path='/'> <RacePage /> </Route>
        <Route path='/team'> <TeamPage /> </Route>
        <Route path='/drivers'> <DriversPage allDrivers={allDrivers} /> </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;