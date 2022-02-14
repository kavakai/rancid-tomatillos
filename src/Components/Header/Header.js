import React from 'react';
import './Header.css';
import Tomatillo from '../../Tomatillo.png';

const Header = () => {
  return (
    <header className='header'>
      <img className='tomatillo' src={Tomatillo} alt='Tomatillo'/>
      <h1>Rancid Tomatillos</h1>
      <img className='tomatillo' src={Tomatillo} alt='Tomatillo' />
    </header>
  )
};

export default Header;