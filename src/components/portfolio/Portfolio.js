import React from 'react';
import classes from './Portfolio.module.css';

import IMG3 from '../../assets/20945892.jpg';
import IMG4 from '../../assets/20945892.jpg';
import IMG5 from '../../assets/67278.jpg';



const data = [
  {
    id: 3,
    image: IMG3,
    title: 'Figmasdasdasd',
    gitbhub: 'https://github.com',
    demo: 'http://dirbbble.com/short'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figmasdasdasd',
    gitbhub: 'https://github.com',
    demo: 'http://dirbbble.com/short'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Figmasdasdasd',
    gitbhub: 'https://github.com',
    demo: 'http://dirbbble.com/short'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Figmasdasdasd',
    gitbhub: 'https://github.com',
    demo: 'http://dirbbble.com/short'
  },
]

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className={classes.portfolio__container}>
        {/* <article className={classes.portfolio_item}>
          <div className={classes.portfolio__item_image}>
            <img src={IMG1} alt=''></img>
          </div>
          <h3>This is a portfolio</h3>
          <div className={classes.btnD}>
            <a href='http://github.com' className='btn' target='_blank'>github</a>
            <a href='http://' className={classes.btn_primary} class='btn' target='_blank'>live Demo</a>
          </div>
        </article> */}

        {
          data.map(({ id, image, title, gitbhub, demo }) => {
            return (
              <article key={id} className={classes.portfolio_item}>
                <div className={classes.portfolio__item_image}>
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className={classes.btnD}>
                  <a href={gitbhub} className='btn' target='_blank '>github</a>
                  <a href={demo} className={classes.btn_primary} class='btn' target='_blank '>live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio;