import React from 'react';
import classes from './Footer.module.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div >
      <footer>
        <a href='# ' className={classes.footer__logo} >AAA</a>

        <ui className={classes.paramlink}>
          <li><a href='# '>HOME</a></li>
          <li><a href='#About'>about</a></li>
          <li><a href='#Experience'>Experience</a></li>
          <li><a href='#Services'>Services</a></li>
          <li><a href='#Portfolio'>Portfolio</a></li>
          <li><a href='#Contact'>Contact</a></li>
        </ui>
        <div className={classes.footer__socials}>
          <a href='https://m.me/ahme22abd22' target='_blank '><BsFacebook /></a>
          <a href='https://instagram.com' target='_blank '><BsInstagram /></a>
          <a href='https://likedin.com' target='_blank '><FaLinkedin /></a>
        </div>

        <div className={classes.footer__copyright}>
          <small>&copy; AAA Tutorial. All right reserved</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer;