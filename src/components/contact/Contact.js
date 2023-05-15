import React from 'react';
import classes from './Contact.module.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nh839hl', 'service_nh839hl', form.current, 'n2AvJAyNe2REB22Ks')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={classes.contact__container}>
        <div className={classes.contact__options}>
          <article className={classes.contact__option}>
            <MdOutlineMailOutline className={classes.contact__icon} />
            <h4>Email</h4>
            <h5>dummyegator@gmial.com</h5>
            <a href='mailto:dummeygator@gmail.com' target='_blank '>Send a message</a>
          </article>
          <article className={classes.contact__option}>
            <RiMessengerLine className={classes.contact__icon} />
            <h4>messenger</h4>
            <h5>ahmad abdelqader</h5>
            <a href='https://m.me/ahme22abd22' target='_blank '>Send a message</a>
          </article>
          <article className={classes.contact__option}>
            <BsWhatsapp className={classes.contact__icon} />
            <h4>whatsapp</h4>
            <h5>078******</h5>
            <a href='https://api.whatsapp.com/send?phone+692****' target='_blank '>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your massage' required></textarea>
          <button type='submit' className={classes.btn}>Send massage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;