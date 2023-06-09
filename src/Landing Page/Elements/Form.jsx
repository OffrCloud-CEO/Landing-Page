import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const Form = () => {
    const [contactType, setContactType] = useState(1);
    const [busSector, setBusSector] = useState(0);
    const [dateText, setDateText] = useState(`${new Date().toISOString().split('T')[0]}`);
    const [status, setStatus] = useState(false);
    const btnRef = useRef();

    function sendEmail(e) {
        e.preventDefault();
        const promise = sendEmailFunc(e);
        toast.promise(promise,{
            loading: 'Processing...',
            success: 'Email sent Successfully.',
            error: 'An error Occurred.',
        });
    }

    const sendEmailFunc = async(e) => {
        setStatus(true);

        // Sanitize user input to prevent XSS attacks
        const sanitize = (str) => {
            return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };

        // Get the form data and sanitize it
        let formData = {};
        switch (contactType) {
            case 0:
                formData = {
                    fName: sanitize(e.target.fName.value),
                    lName: sanitize(e.target.lName.value),
                    bEmail: sanitize(e.target.bEmail.value),
                    message: sanitize(e.target.message.value),
                };
                break;
            case 1:
                formData = {
                    bEmail: sanitize(e.target.bEmail.value),
                    cName: sanitize(e.target.cName.value),
                    cPhone: sanitize(e.target.cPhone.value),
                    rName: sanitize(e.target.rName.value),
                    sector: sanitize(e.target.sector.value),
                    ourTime: sanitize(e.target.ourTime.value),
                    message: sanitize(e.target.message.value),
                };
                break;
            default:
                break;
        }

        // Check for empty required fields
        for (const input of document.querySelectorAll('input[required], select[required], textarea[required]')) {
            if (!input.value) {
                alert(`Please enter your ${input.name}`);
                return;
            }
        }

        // Check if the email address is valid
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(formData.bEmail)) {
            alert("Please enter a valid email address");
            return;
        }

        // Send the email using the EmailJS service
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId_schedule = process.env.REACT_APP_SCHEDULE_EMAIL_ID;
        const templateId_contact = process.env.REACT_APP_CONTACT_US_EMAIL_ID;
        const userID = process.env.REACT_APP_USER_ID;

        try {
            switch (contactType) {
                case 0:
                    await emailjs.sendForm(serviceId, templateId_contact, e.target, userID)
                        .then((result) => {
                            // Clear the form fields
                            e.target.reset();
                        }, (error) => {
                            console.error(error);
                            throw Error(error);
                        });
                    break;
                case 1:
                    await emailjs.sendForm(serviceId, templateId_schedule, e.target, userID)
                        .then((result) => {
                            // Clear the form fields
                            e.target.reset();
                        }, (error) => {
                            console.error(error);
                            throw Error(error);
                        });
                    break;
            
                default:
                    break;
            }

            setStatus(false);
        } catch (error) {
            setStatus(false);
            console.log(error)
            throw Error(error);
        }
    }

    return (
        <form action="" method="post" onSubmit={sendEmail}>
            {status && <div className="loadingScreen">
                <div className="loadingio-spinner-gear-abqyc1i9wu"><div className="ldio-r68llg26yv">
                    <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div></div>
            </div>}
            <div className="choose">
                <div className={`choice ${contactType === 1 ? "active" : ""}`} onClick={() => setContactType(1)}>
                    <img src="https://gineousc.sirv.com/Images/icons/demo.png" alt="icon choice" />
                    <span>Schedule Demo</span>
                </div>
                <div className={`choice ${contactType === 0 ? "active" : ""}`} onClick={() => setContactType(0)}>
                    <img src="https://gineousc.sirv.com/Images/icons/contact-card.png" alt="icon choice" />
                    <span>Get in touch</span>
                </div>
            </div>
            {contactType === 0 && <div className="label">Get in Touch</div>}
            {contactType === 1 && <div className="label">Let's schedule your Live Demo</div>}
            {contactType === 0 && <div className={`form-g imp ${Number(contactType) === 0 ? "" : "compressed"}`}>
                <label>First Name</label>
                <input type="text" className="inp" name='fName' placeholder='Chris' required={contactType === 0} />
            </div>}
            {contactType === 0 && <div className={`form-g imp ${Number(contactType) === 0 ? "" : "compressed"}`}>
                <label>Last Name</label>
                <input type="text" name='lName' className="inp" placeholder='Wilkinsion' required={contactType === 0} />
            </div>}
            {<div className="form-g imp">
                <label>{contactType === 1 ? "Business" : "Your"} Email</label>
                <input type="email" name='bEmail' placeholder='business@company.com' className="inp" required/>
            </div>}

            {contactType === 1 && <div className="p">For a more tailored Live Demo, please tell us about your company:</div>}

            {contactType === 1 && <div className={`group ${contactType === 1 ? "show" : ""}`}>
                <div className="form-g imp">
                    <label>Company Name</label>
                    <input type="text" className="inp" name='cName' placeholder='Company name' required={contactType === 1} />
                </div>
                <div className="form-g imp">
                    <label>Phone</label>
                    <input type="text" className="inp" name='cPhone' placeholder='+1 555 555 5555' required={contactType === 1} />
                </div>
                <div className="form-g imp">
                    <label>Representative Name</label>
                    <input type="text" className="inp" name='rName' placeholder='Chris Wilkinson' required={contactType === 1} />
                </div>
                <div className="form-g imp">
                    <label>Business Sector</label>
                    <select className="inp" name='sector' required={contactType === 1} onChange={(e)=>setBusSector(e.target.value)}>
                        <option value="0">----- Choose Business Sector -----</option>
                        <option value="Real Estate Trust">Real Estate Trust</option>
                        <option value="Private Equity Firm">Private Equity Firm</option>
                        <option value="Hegde Fund">Hegde Fund</option>
                        <option value="Bank">Bank</option>
                        <option value="SPAC">SPAC</option>
                        <option value="6">Others</option>
                    </select>

                </div>
                <div className={`form-g imp ${Number(busSector) === 6 ? "" : "compressed"}`}>
                    <label>Others:</label>
                    <input type="text" className="inp" name='sector' placeholder='Sector' required={Number(busSector) === 6 && contactType === 1} />
                </div>
                <div className={`form-g imp`}>
                    <label>Preferred Date and Time:</label>
                    <input type="date" className="inp" value={dateText} onChange={(e)=>setDateText(e.target.value)} min={new Date().toISOString().split('T')[0]} name='ourTime' placeholder='Lex Corp' required={contactType === 1} />
                </div>
            </div>}
            <div className="form-g">
                <label>{contactType === 1 ? "Potentional Use-Case:" : "Message:"}</label>
                <textarea className="inp" cols={"30"} name='message' placeholder="Tell us more about your needs and how you might benefit from our Service"></textarea>
            </div>
            <br />
            <div className={`form-g ${status ? "disabled" : ""}`}>
                <div>
                    <div className="p">Field marked with <span className='imp'>*</span> are required to complete Scheduling Live Demo.</div>
                    {contactType === 1 && <div className="btnx" onClick={() => btnRef.current.click()}>{!status ? "Schedule Now" : "Scheduling..."}</div>}
                    {contactType === 0 && <div className="btnx" onClick={() => btnRef.current.click()}>{!status ? "Get in touch" : "Getting in touch..."}</div>}
                    <input ref={btnRef} type="submit" hidden />
                </div>
            </div>
        </form>
    )
}

export default Form;
