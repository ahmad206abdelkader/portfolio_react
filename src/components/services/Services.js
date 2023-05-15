import React from 'react';
import classes from './Services.module.css';
import { HiCheck } from 'react-icons/hi';

const Services = () => {
  return (
    <section id='Services' className={classes.display}>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={classes.Services__container}>
        <article className={classes.Services}>
          <div className={classes.Services_head}>
            <h3>UI/UX design</h3>
          </div>
          <ui className={classes.services__list}>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
          </ui>

        </article>
        <article className={classes.Services}>
          <div className={classes.Services_head}>
            <h3>web devlopment</h3>
          </div>
          <ui className={classes.services__list}>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>

            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>

          </ui>

        </article>

        <article className={classes.Services}>
          <div className={classes.Services_head}>
            <h3>Content Credtion</h3>
          </div>
          <ui className={classes.services__list}>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dusssssmmy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
            <li>
              <HiCheck className={classes.services__list_icon} />
              <p>Lorem Ipsum is simply dummy </p>
            </li>
          </ui>

        </article>
      </div>
    </section>
  )
}

export default Services;