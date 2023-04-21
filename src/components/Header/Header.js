import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import f1header from '../../images/f1header.png';
import './Header.css'

const Header = ({path}) => {
  const [selected, setSelected] = useState(path);
  const expand = <span className="material-symbols-outlined expand">expand_more</span>

  useEffect(() => {
    setSelected(path);
  }, [path])

  return (
    <header>
      <Link to='/' className='title'>
        <img src={f1header} alt='Formula Fun' className='header-img'/>
        <em className='motto'>For those of us who wheel never get tire-d of Formula One!</em>
      </Link>
      <nav>
        <Link to='/' className={`nav-link ${selected === '/' && 'selected'}`}> HOME{selected !== '/' && expand} </Link>
        <Link to='/team' className={`nav-link ${selected === '/team' && 'selected'}`}> MY TEAM{selected !== '/team' && expand} </Link>
        <Link to='/drivers' className={`nav-link ${selected === '/drivers' && 'selected'}`}> DRIVER STATS{selected !== '/drivers' && expand} </Link>
      </nav>
    </header>
  )
}

export default Header;

Header.propTypes = { path: PropTypes.string };