import React from 'react'
import classes from './About.module.css';
import ME from '../../assets/personal-assistant-business-hot-helpline-600w-401596996.webp';
import { FiAward } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className={classes.about__container}>
        <div className={classes.about__me}>
          <div className={classes.about__me_image}>
            <img src={ME} alt='about_image' />

          </div>
        </div>

        <div className={classes.about__contant}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <FiAward className={classes.icon} />
              <h5 className={classes.h5}>Experience</h5>
              <small className={classes.small}>2+ working</small>
            </article>
            <article className={classes.about__card}>
              <FiUsers className={classes.icon} />
              <h5 className={classes.h5}>Clients</h5>
              <small className={classes.small}>20+ worldwide</small>
            </article>
            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.icon} />
              <h5 className={classes.h5}>projects</h5>
              <small className={classes.small}>20+ completed</small>
            </article>
          </div>

          <p className={classes.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </p>

          <div className='talk'>
            <a href='#Contact' className='btn btn-primary' >let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;