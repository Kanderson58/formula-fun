import './App.css'
import { Route, Switch } from 'react-router-dom';
import Header from "../Header/Header";
import RacePage from '../RacePage/RacePage';
import TeamPage from '../TeamPage/TeamPage';
import DriversPage from '../DriversPage/DriversPage';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
        <Route exact path='/'> <RacePage /> </Route>
        <Route path='/team'> <TeamPage /> </Route>
        <Route path='/drivers'> <DriversPage /> </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;