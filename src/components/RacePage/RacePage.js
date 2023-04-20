import { useState } from 'react'
import { Link } from 'react-router-dom'
import './RacePage.css'

const RacePage = () => {
  return (
    <section className='race-page'>
      <h1>Welcome to Formula Fun!</h1>
      <p>Get ready to take on the racing world with your very own F1 team!</p>
      <Link to='/team' className='see-team'>Take Me To My Team!!</Link>
    </section>
  )
}

export default RacePage