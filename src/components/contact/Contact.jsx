import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
// import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };



  return (
    <section id='contact'>
      <h5>Let's talk!</h5>
      <h2>Contact</h2>

      <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <HiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>gk577098@gmail.com</h5>
              <a href='gk577098@gmail.com' target="_blank">send a message</a>
            </article>

            {/* <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messeger</h4>
              <h5>Mardoqueu Sousa</h5>
              <a href='https://m.me/mardoqueu.telvina' target="_blank">Enviar uma mensagem</a>
            </article> */}

            <article className='contact__option'>
              <AiOutlineWhatsApp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>8750033319</h5>
              {/* <a  target="_blank">Send a message</a> */}
            </article>
          </div>
          {/* END OF CONTACT OPTIONS*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Name' required></input>
            <input type='email' name='email' placeholder='E-mail' required></input>
            <textarea name='message' rows='7' placeholder='Mensagem' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact