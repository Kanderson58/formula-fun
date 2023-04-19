import { useState, useEffect } from 'react';
import { cleanDriverData } from '../../utilities.js';
import Driver from '../Driver/Driver.js';
import './DriversPage.css';

const DriversPage = () => {
  const [chosenDriver, setChosenDriver] = useState();
  const [allDrivers, setAllDrivers] = useState([]);

  useEffect(() => {
    setAllDrivers(cleanDriverData());
    // cleanDriverData().then(data => setAllDrivers(data))
  }, [])

  const allDriversJSX = allDrivers.map(driver => 
    <div className={`ranked-driver ${chosenDriver === driver.position && 'chosen-driver pointer-event'}`} 
      id={`${driver.position}`} 
      key={`${driver.position}`} 
      onClick={(e) => setChosenDriver(parseInt(e.target.id))}
      >
        <p className='pointer-event'>{driver.position}) {driver.name}</p><p className='pointer-event points'> {driver.points} points</p>
        {chosenDriver === driver.position && <span className="material-symbols-outlined driver-arrow">arrow_circle_right</span>}
    </div>);

  return (
    <section className='drivers-page'>
      <div className='full-rankings'>
        <h3>SEASON RANKINGS</h3>
        {allDriversJSX}
      </div>
      {chosenDriver ? <Driver chosenDriver={allDrivers.find(driver => driver.position === chosenDriver)}/> : <p className='selected-driver no-driver'>Click on a driver <br/> to see their stats!</p>}
    </section>
  )
}

export default DriversPage;