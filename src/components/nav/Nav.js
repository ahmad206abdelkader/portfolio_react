import React from 'react';
import classes from './Nav.module.css';
import { GoHome } from 'react-icons/go';
import { SiAboutdotme } from 'react-icons/si';
import { FiBook } from 'react-icons/fi';
import { MdMiscellaneousServices } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';


const Nav = () => {
  return (
    <div className={classes.Nav}>
      <a href='# ' className={classes.active}><GoHome /></a>
      <a href='#About' ><SiAboutdotme /></a>
      <a href='#Experience' ><FiBook /></a>
      <a href='#Services' ><MdMiscellaneousServices /></a>
      <a href='#Contact' ><IoMdContact /></a>
    </div >
  )
}

export default Nav;