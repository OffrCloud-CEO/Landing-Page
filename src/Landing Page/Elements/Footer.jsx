import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <section>
                <div className="foot-row">
                    <a href="https://www.linkedin.com/company/offrcloud/about/" target="_blank" rel="noreferrer" className="img"><img className='mini' src="https://gineousc.sirv.com/Images/icons/linkedin.png" alt="social icon" /></a>
                    <a href="#" target="_blank" rel="noreferrer" className="img"><img className='mini' src="https://gineousc.sirv.com/Images/icons/facebook-new.png" alt="social icon" /></a>
                    <a href="#" target="_blank" rel="noreferrer" className="img"><img className='mini' src="https://gineousc.sirv.com/Images/icons/twitter.png" alt="social icon" /></a>
                    <a href="https://instagram.com/offrcloud?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noreferrer" className="img"><img className='mini' src="https://gineousc.sirv.com/Images/icons/instagram-new--v1.png" alt="social icon" /></a>
                </div>
                <a href='mailto:chris@offrcloud.com' className="foot-row">
                    <img src="https://gineousc.sirv.com/Images/icons/new-post--v1.png" alt="icon mail" />
                    chris@offrcloud.com
                </a>
                <a href='tel:+14046615581' className="foot-row">
                    <img src="https://gineousc.sirv.com/Images/icons/phone.png" alt="icon phone" />
                    +1 (404) 661-5581
                </a>
            </section>
            <section>
                <a href='#top' className="foot-row">Back Top</a>
                <a href='#services' className="foot-row">Services</a>
                <a href='#faq' className="foot-row">FAQ</a>
                <a href='#contact' className="foot-row">Contact Us</a>
            </section>
        </div>
    )
}

export default Footer;
