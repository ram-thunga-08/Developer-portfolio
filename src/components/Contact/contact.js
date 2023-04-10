import './contact.scss';
import React, {useRef} from 'react';
import emailjs from 'emailjs-com'
import {HiOutlineMail} from 'react-icons/hi';

const Contact = ()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ufotw7f', 'template_5iurgko', form.current, '38r5rVjtYPNawYN_7')
          .then((result) => {
            if(result.text==='OK') {
                alert("Message sent succesfully!!");
            }
          }, (error) => {
            console.log(error);
            alert("Opps!! An error while sending message. Please try again.");
          });
        
          e.target.reset();
    };
    return (
        <section id='contact'>
            <div className="container contact__container">
                <div className="content flex-centered">
                    <span>Get In Touch</span>
                </div>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <HiOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>thungarama08@gmail.com</h5>
                        <a href='mailto:thungarama08@gmail.com' rel="noreferrer" target='_blank'>Send a message</a>
                    </article>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' name='name' placeholder='Your Full Name' required/>
                        <input type='email' name='email' placeholder='Your Email' required/>
                        <textarea name='message' rows='7' placeholder='Your Message' required/>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
                
            </div>
        </section>
    )
}

export default Contact