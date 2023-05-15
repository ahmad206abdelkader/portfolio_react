import React from 'react';
import CV from '../../assets/cv.png'
import classes from './Header.module.css';

const CTA = () => {
    return (
        <div className={classes.cta}>
            <a href={CV} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA;