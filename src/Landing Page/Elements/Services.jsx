import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
    const labelRef = useRef();
    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();

    const [labelClass, setLabelClass] = useState('');
    const [card1Class, setCard1Class] = useState('');
    const [card2Class, setCard2Class] = useState('');
    const [card3Class, setCard3Class] = useState('');

    useEffect(() => {
        const labelObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLabelClass("in-view");
                } else {
                    setLabelClass("");
                }
            }, { threshold: 0.15 }
        );

        labelObserver.observe(labelRef.current);

        const card1Observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCard1Class("in-view");
                } else {
                    setCard1Class("");
                }
            }, { threshold: 0.15 }
        );

        card1Observer.observe(card1Ref.current);

        const card2Observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCard2Class("in-view");
                } else {
                    setCard2Class("");
                }
            }, { threshold: 0.15 }
        );

        card2Observer.observe(card2Ref.current);

        const card3Observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCard3Class("in-view");
                } else {
                    setCard3Class("");
                }
            }, { threshold: 0.15 }
        );

        card3Observer.observe(card3Ref.current);

        return () => {
            labelObserver.disconnect();
            card1Observer.disconnect();
            card2Observer.disconnect();
            card3Observer.disconnect();
        }
    }, []);
    return (
        <div className="next-section serv" id='services'>
            <>
                <div className={`title ${labelClass}`} ref={labelRef}>
                    <div>OffrCloud Products & Services</div>
                </div>
                <div className="hang-pic">
                    <img src="https://gineousc.sirv.com/Images/icons/undraw_product_tour_re_8bai.svg" alt="friendly Pic" />
                </div>
                <div className="p">
                    OffrCloud provides secure, customizable products for token offerings with expert tech support. Leverage blockchain & cryptocurrencies.
                </div>
                <div className="services">
                    <section ref={card1Ref} className={`${card1Class}`}>
                        <label>Debt Token Offering</label>
                        <div className="p">
                            OffrCloud’s platform enables enterprises to launch security tokens with customizable solutions to raise capital & repay token holders.
                        </div>
                        <div className="img">
                            <img src="https://gineousc.sirv.com/Images/icons/undraw_searching_re_3ra9.svg" alt="" />
                        </div>
                    </section>
                    <section ref={card2Ref} className={`${card2Class}`}>
                        <label>Asset Transfer</label>
                        <div className="p">
                            Our asset transfer service offers a secure & streamlined way for token holders to buy & sell
                            debt tokens on the blockchain. Our expert support team helps your token holders liquidate or
                            strengthen their position.
                        </div>
                        <div className="img">
                            <img src="https://gineousc.sirv.com/Images/icons/undraw_logic_re_nyb4.svg" alt="" />
                        </div>
                    </section>
                    <section ref={card3Ref} className={`${card3Class}`}>
                        <label>More Products & Intergration</label>
                        <div className="p">
                        We offer more blockchain-based products & integration services. Our team can help you integrate existing products & services with blockchain technology for seamless efficiency.
                        </div>
                        <div className="img">
                            <img src="https://gineousc.sirv.com/Images/icons/undraw_selecting_re_5ff6.svg" alt="" />
                        </div>
                    </section>
                </div>
            </>
            <a href="#contact" className="btnx">
                Schedule a Live Demo
            </a>
        </div>

    )
}

export default Services;