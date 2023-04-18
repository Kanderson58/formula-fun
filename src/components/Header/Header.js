import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import f1header from '../../images/f1header.png';

const Header = () => {
  const [selected, setSelected] = useState('/');
  const expand = <span className="material-symbols-outlined expand">expand_more</span>

  return (
    <header>
      <Link to='/' className='title' onClick={() => setSelected('/')}>
        <img src={f1header} alt='Formula Fun' className='header-img'/>
        <em className='motto'>For those of us who wheel never get tire-d of Formula One!</em>
      </Link>
      <nav>
        <Link to='/' onClick={() => setSelected('/')} className={`nav-link ${selected === '/' ? 'selected' : null}`}> HOME{selected !== '/' ? expand : null} </Link>
        <Link to='/team' onClick={() => setSelected('/team')} className={`nav-link ${selected === '/team' ? 'selected' : null}`}> MY TEAM{selected !== '/team' ? expand : null} </Link>
        <Link to='/drivers' onClick={() => setSelected('/drivers')} className={`nav-link ${selected === '/drivers' ? 'selected' : null}`}> DRIVER STATS{selected !== '/drivers' ? expand : null} </Link>
      </nav>
    </header>
  )
}

export default Header;