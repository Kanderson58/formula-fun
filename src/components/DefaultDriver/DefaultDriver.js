import { useState } from 'react';
import PropTypes from 'prop-types';
import defaultdriver from '../../images/defaultdriver.jpeg';
import './DefaultDriver.css';
import { cleanSingleDriver } from '../../utilities';

const DefaultDriver = ({setError, allDrivers, drivers, setDrivers}) => {
  const [buttonText, setButtonText] = useState('Sign my driver!');
  const availableDrivers = allDrivers
    .filter(driver => !drivers.map(test => test.name).includes(driver.name))
    .sort((a, b) => (a.name < b.name) ? -1 : 0)
    .map(driver => <option value={driver.name} key={driver.name}>{driver.name}</option>);

  const checkInput = (driver) => {
    if(driver !== 'default') {      
      async function fetchData () {
        const singleDriver = await cleanSingleDriver(driver).then(driver => driver[0]);
        typeof(singleDriver) === 'string' ? setError('🚩 Uh oh, red flag!  We could not find that driver.  Please try again later! 🚩') : setDrivers([...drivers, singleDriver])
      }
      fetchData();
    } else { 
      setButtonText('Please choose a driver!')
    };
  }

  return (
    <div className='default-driver'>
      <img src={defaultdriver} className='driver-img' alt='example driver'/>
      <div className='driver-select'>
        Pick your driver:
        <select defaultValue='default' onChange={() => setButtonText('Sign my driver!')}>
          <option value='default' defaultValue='default' disabled>Choose Your Driver...</option>
          {availableDrivers}
        </select>
        <button className='submit-driver' onClick={(e) => checkInput(e.target.previousSibling.value)}>{buttonText}</button>
      </div>
    </div>
  )
}

export default DefaultDriver;

DefaultDriver.propTypes = {
  setError: PropTypes.func,
  allDrivers: PropTypes.array,
  drivers: PropTypes.array,
  setDrivers: PropTypes.func
};