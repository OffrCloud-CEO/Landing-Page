import React, { useState, useRef, useEffect } from 'react';


const MockUp3 = () => {
    const card1Ref = useRef();
    const card2Ref = useRef();

    const [card1Class, setCard1Class] = useState('');
    const [card2Class, setCard2Class] = useState('');

    useEffect(()=>{
        const card1Observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCard1Class("in-view");
                } else {
                    setCard1Class("");
                }
            }, { threshold: .25 }
        );
        card1Observer.observe(card1Ref.current);
        const card2Observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCard2Class("in-view");
                } else {
                    setCard2Class("");
                }
            }, { threshold: 0.25 }
        );
        card2Observer.observe(card2Ref.current);
        return () => {
            card1Observer.disconnect();
            card2Observer.disconnect();
        }
    },[]);

    return (
        <div className="next-section mock m3">
            <section className={`${card1Class}`} ref={card1Ref}>
                <div className="h1">Expert Guidance & Support for Your Security Token Offering.</div>
                <div className="p">
                    At Offrcloud, we provide customizable software solutions to meet your unique capital raising
                    needs. Our expert team of legal counsels consults on each offering to maintain compliance with
                    regulatory rules & requirements.
                </div>
                <div className="icon-grid">
                    <div>
                        <img src="https://gineousc.sirv.com/Images/icons/training.png" alt="Launch Icon" />
                        <span>Expert Guidance</span>
                    </div>
                    <div>
                        <img src="https://gineousc.sirv.com/Images/icons/decentralized-network.png" alt="Launch Icon" />
                        <span>Cutting-Edge Products</span>
                    </div>
                    <div>
                        <img src="https://gineousc.sirv.com/Images/icons/external-process-digital-globalization-parzival-1997-detailed-outline-parzival-1997.png" alt="Launch Icon" />
                        <span>Streamlined Processes</span>
                    </div>
                </div>
            </section>
            <section className={`img ${card2Class}`} ref={card2Ref}>
                <img src="https://gineousc.sirv.com/Images/Landing%20Page%20Resources/mock004.png" alt="Mock up 1" />
            </section>
        </div>
    )
}

export default MockUp3;