import { useState } from 'react';
import PropTypes from 'prop-types';
import Driver from '../Driver/Driver.js';
import './DriversPage.css';

const DriversPage = ({allDrivers}) => {
  const [chosenDriver, setChosenDriver] = useState();
  const [error, setError] = useState();

  const allDriversJSX = allDrivers.map(driver => 
    <div className={`ranked-driver ${chosenDriver === driver.position && 'chosen-driver'}`} 
      id={`${driver.position}`} 
      key={`${driver.position}`} 
      onFocus={(e) => setChosenDriver(parseInt(e.target.id))}
      tabIndex='0'
      >
        <p className='pointer-event'>{driver.position}) {driver.name}</p><p className='pointer-event points'> {driver.points} points</p>
    </div>);

  return (
    <section className='drivers-page'>
      <div className='full-rankings'>
        <h3>SEASON RANKINGS</h3>
        {allDriversJSX}
      </div>
      {chosenDriver && !error && <Driver setError={setError} chosenDriver={allDrivers.find(driver => driver.position === chosenDriver)}/>}
      {!chosenDriver && !error && <p className='selected-driver no-driver'>Click on a driver <br/> to see their stats!</p>}
      {error && <p className='error'>{error}</p>}
    </section>
  )
}

export default DriversPage;

DriversPage.propTypes = { allDrivers: PropTypes.array };