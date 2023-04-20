import { useState } from 'react';
import defaultdriver from '../../images/defaultdriver.jpeg';
import './DefaultDriver.css';

const DefaultDriver = ({allDrivers, drivers, setDrivers}) => {
  const [buttonText, setButtonText] = useState('Sign my driver!');
  const availableDrivers = allDrivers
    .filter(driver => !drivers.includes(driver.name))
    .map(driver => <option value={driver.name} key={driver.name}>{driver.name}</option>);

  const checkInput = (driver) => {
    driver !== 'default' ? setDrivers([...drivers, driver]) : setButtonText('Please choose a driver!');
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