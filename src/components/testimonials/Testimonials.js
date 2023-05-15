import React from 'react';
import classes from './Testimonials.module.css';
import AVATAR from '../../assets/67278.jpg';
import AVATAR2 from '../../assets/67278.jpg';
import AVATAR3 from '../../assets/67278.jpg';
import AVATAR4 from '../../assets/67278.jpg';

// import Swiper core and required modules


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR,
    name: 'tunadsas',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in',
  },
  {
    avatar: AVATAR2,
    name: 'tunadsas',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in',
  },
  {
    avatar: AVATAR3,
    name: 'tunadsas',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in',
  },
  {
    avatar: AVATAR4,
    name: 'tunasssdsas',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in',
  },

]

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className={classes.Testimonials__container}>



        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className={classes.Testimonials} key={index}>
                <div className={classes.client__avatar} >
                  <img src={avatar} alt='avatar' />
                </div>

                <h5 className={classes.client__name}>{name}</h5>
                <small className={classes.client_review}>
                  {review}
                </small>
              </SwiperSlide>
            );
          })
        }



      </Swiper>
    </section>
  )
}

export default Testimonials;