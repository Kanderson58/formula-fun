import { useState } from 'react';
import './TeamPage.css'

const TeamPage = () => {
  return (
    <section className='team-page'>
      <section className='drivers'>
        <div className='driver'>Driver 1</div>
        <div className='driver'>Driver 2</div>
      </section>
      <div className='team'>Team</div>
    </section>
  )
}

export default TeamPage;