import { useState } from 'react';
import PropTypes from 'prop-types';
import Driver from '../Driver/Driver.js';
import './DriversPage.css';

const DriversPage = ({allDrivers}) => {
  const [chosenDriver, setChosenDriver] = useState();

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

DriversPage.propTypes = { allDrivers: PropTypes.array };