import React from 'react';
import classes from './Experience.module.css';
import { HiBadgeCheck } from 'react-icons/hi';

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={classes.Experience__container}>
        <div className={classes.Experince__frontend}>
          <h3 className={classes.h3}>Frontend Devlopment</h3>
          <div className={classes.Experience__contant}>
            <article className={classes.Experience__details}>
              <HiBadgeCheck className={classes.icon} />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className={classes.Experience__details}>
              <HiBadgeCheck className={classes.icon} />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className={classes.Experience__details}>
              <HiBadgeCheck className={classes.icon} />
              <div>
                <h4>css</h4>
                <small className='text-light'>Intermated</small>
              </div>
            </article>
            <article className={classes.Experience__details}>
              <HiBadgeCheck className={classes.icon} />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className={classes.Experience__details}>
              <HiBadgeCheck className={classes.icon} />
              <div>
                <h4>MUI</h4>
                <small className='text-light'>basic</small>
              </div>
            </article>

          </div>
        </div>

        <div className={classes.Experince__backend}>
          <h3 className={classes.h3}>backend Devlopment</h3>
          <div className={classes.Experience__contant}>
            <article className={classes.Experience__details}>
              <HiBadgeCheck className={classes.icon} />
              <div>
                <h4>expressjs</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className={classes.Experience__details}>
              <HiBadgeCheck className={classes.icon} />
              <div>
                <h4>mongoodb</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className={classes.Experience__details}>
              <HiBadgeCheck className={classes.icon} />
              <div>
                <h4>Nextjs</h4>
                <small className='text-light'>basic</small>
              </div>
            </article>
            <article className={classes.Experience__details}>
              <HiBadgeCheck className={classes.icon} />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>basic</small>
              </div>
            </article>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;