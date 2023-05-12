import React, { useState } from 'react';
import Form from './Form';

const ContactUsSection = () => {
    return (
        <div className="next-section contact" id='contact'>
            <div className="contact-div">
                <section>
                    <div className="label">
                        Wield the web as data to outsmart competitors
                    </div>
                    <div className="p">
                        Join the businuess who have begun to edge out competitors by securing the web for "alternative" data.
                    </div>
                    <div className="img">
                        <img src="https://gineousc.sirv.com/Images/Landing%20Page%20Resources/mock001.png" alt="demo-img" />
                    </div>
                </section>
                <section>
                    <Form />
                </section>
            </div>
            <div className="contact-bottom">
                <section>
                    <div className="logo">
                        <img src="https://gineousc.sirv.com/Images/loader-ico.png" alt="logo png" />
                        <span>OffrCloud</span>
                    </div>
                    <div className="p">
                        Security tokens made simple.
                    </div>
                </section>
                <section>
                    <a href="mailto:chris@offrcloud.com" className="contact-box">
                        <img src="https://gineousc.sirv.com/Images/icons/new-post--v1.png" alt="mail icon" />
                        <div className="div">
                            <span>Send us an email</span>
                            <span>chris@offrcloud.com</span>
                        </div>
                    </a>
                    <a href='tel:+14046615581' className="contact-box">
                        <img src="https://gineousc.sirv.com/Images/icons/phone.png" alt="contact icon" />
                        <div className="div">
                            <span>Give us a call</span>
                            <span>(404) 661-5581</span>
                        </div>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default ContactUsSection;