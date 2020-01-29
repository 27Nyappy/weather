import React from 'react';
import styles from './Header.css';
import logo from '../assets/logo.png';

const Header = () => (
  <header className={styles.Header}>
    <div>
      <img src={logo}/>
    </div>
    <h1>Weather Forecast</h1>
  </header>
);

export default Header;