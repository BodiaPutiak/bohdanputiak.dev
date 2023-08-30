// import Loader from 'react-loaders';
import './index.scss';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react'



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs.sendForm('service_46wmfps', 'template_x8zfxre', form.current, 'QY5UQg9ukh6FuqcuP')
        .then(() => {alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, try again')
        });
    };
    return(
        <>
        <div className='container'>
            <div className='container contact-page'>
                <div className="text-zone">
                    <h1>
                        Contact me
                    </h1>

                    <p>
                    I am interested in job opportunities in a junior developer position. 
                    If you have questions or other requests you can contact me using the form below 
                    or my contacts at the bottom of the page. I am available at any time. Have a nice day.
                    </p>

                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <div className='halfs-container'>
                                    <li className='half'>
                                        <input type='text' name='name' placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type='text' name='email' placeholder='Email' required />
                                    </li>
                                </div>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />    
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        {/* <Loader type='pacman' /> */}
        </>
    )
}

export default Contact;