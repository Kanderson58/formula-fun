import { useState } from 'react';
import Driver from '../Driver/Driver';
import DefaultDriver from '../DefaultDriver/DefaultDriver';
import './TeamPage.css';

const TeamPage = ({allDrivers, drivers, setDrivers, teamName, setTeamName}) => {
  const [editMode, setEditMode] = useState(false);

  const editName = () => {
    setEditMode(true);
  }
  
  const submitTeamName = (e) => {
    e.preventDefault();
    setTeamName(e.target.previousSibling.value);
    setEditMode(false);
  }

  return (
    <section className='team-page'>
      <section className='drivers'>

        {!drivers[0] && <DefaultDriver allDrivers={allDrivers} drivers={drivers} setDrivers={setDrivers} />}
        {drivers[0] && <Driver chosenDriver={drivers[0]}/>}
   
        {!drivers[1] && drivers[0] && <DefaultDriver allDrivers={allDrivers} drivers={drivers} setDrivers={setDrivers}/>}
        {drivers[1] && <Driver chosenDriver={drivers[1]}/>}

      </section>
      {drivers.length === 2 && <div className='team'>
        <div className='team-info'>

          {!editMode && <div className='team-header'>
            <h2>{teamName}</h2><span className='material-symbols-outlined edit' onClick={editName}>edit</span>
          </div>}

          {editMode && <div className='team-header'>
            <input type='text' placeholder={teamName} maxLength='30' className='name-input' />
            <input type='submit' className='name-submit' onClick={(e) => submitTeamName(e)} />
          </div>}
        </div>
        <section className='race-result'>Race 1 Result</section>
        <section className='race-result'>Race 2 Result</section>
        <section className='race-result'>Race 3 Result</section>
      </div>}
    </section>
  )
}

export default TeamPage;