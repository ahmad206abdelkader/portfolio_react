import React from 'react';

import classes from './Header.module.css';
import CTA from './CTA';
import me from '../../assets/f45138e5-59dc-4207-9cb1-4f37bed098e2-removebg-preview.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h5>Hello I'm </h5>
        <h1>ahmad abdelqader</h1>
        <h5 className='text-light'>fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div>
          <a href='#Contact' className={classes.scroll__down}>Scroll Down</a>
        </div>

        <div className={classes.me}>
          <div>

            <img src={me} alt='me' />
          </div>
        </div>


      </div>

    </header >
  )
}

export default Header;
