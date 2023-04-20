import { useState } from 'react';
import './DefaultDriver.css'

const DefaultDriver = ({allDrivers, drivers, setDrivers}) => {
  const [buttonText, setButtonText] = useState('Sign my driver!');

  const noDriverImage = <img src='https://t3.ftcdn.net/jpg/00/88/78/20/360_F_88782064_x9Ow2lKie1fr4ncBYLE88x6InooDKAq7.jpg' className='driver-img' alt='example driver'/>

  const availableDrivers = allDrivers
    .filter(driver => !drivers.includes(driver.name))
    .map(driver => <option value={driver.name} key={driver.name}>{driver.name}</option>);

  const checkInput = (driver) => {
    driver !== 'default' ? setDrivers([...drivers, driver]) : setButtonText('Please choose a driver!');
  }

  return (
    <div className='default-driver'>
      {noDriverImage}
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