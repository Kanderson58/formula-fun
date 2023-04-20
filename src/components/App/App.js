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
  const [teamName, setTeamName] = useState('Name My Team');

  useEffect(() => {
    setAllDrivers(cleanDriverData());
    // cleanDriverData().then(data => setAllDrivers(data));
    
    // if(drivers.length === 2){
    // // async function fetchData () {
    // //   const singleDriver = await cleanSingleDriver(chosenDriver).then(driver => driver[0]);
    // //   setDriverInfo(singleDriver);
    // // }
    // // fetchData();
    //   setTeam([...team, cleanSingleDriver(drivers[0])]);
    //   setTeam([...team, cleanSingleDriver(drivers[1])]);
    // }
    // console.log(team);
  }, []);

  return (
    <div>
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
            /> 
          </Route>
          <Route path='/drivers'> <DriversPage allDrivers={allDrivers} /> </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;