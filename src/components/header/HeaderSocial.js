import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsGit } from 'react-icons/bs';
import classes from './Header.module.css';


const HeaderSocial = () => {
    return (
        <div className={classes.header__socials}>
            <a href='http://linkedin.com' target='blank'><BsLinkedin /></a>
            <a href='http://github.com' target='blank'><BsGit /></a>
            <a href='http://facebook.com' target='blank'><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocial;