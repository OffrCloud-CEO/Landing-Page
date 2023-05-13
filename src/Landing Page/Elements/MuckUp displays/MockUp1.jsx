import React, { useState, useRef, useEffect } from 'react';

const MockUp1 = () => {
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
        <div className="next-section mock m2">
            <section className={`${card1Class}`} ref={card1Ref}>
                <div className="h1">Launch Your Security Token in Minutes.</div>
                <div className="p">
                    OffrCloud offers a secure & easy-to-use platform to create & manage security tokens. With
                    our streamlined process, customize & launch a token that fits your needs. We include a
                    user-friendly interface to manage token sale, dividend distribution, crypto to USD conversion, &
                    other essential functions.
                </div>
                <div className="icon-grid">
                    <div>
                        <img src="https://gineousc.sirv.com/Images/icons/launch.png" alt="Launch Icon" />
                        <span>Launch Tokens</span>
                    </div>
                    <div>
                        <img src="https://gineousc.sirv.com/Images/icons/ui.png" alt="Launch Icon" />
                        <span>Customizable Solutions</span>
                    </div>
                    <div>
                        <img src="https://gineousc.sirv.com/Images/icons/manage.png" alt="Launch Icon" />
                        <span>Easy Management</span>
                    </div>
                </div>
            </section>
            <section className={`img ${card2Class}`} ref={card2Ref}>
                <img src="https://gineousc.sirv.com/Images/Landing%20Page%20Resources/mock001.png" alt="Mock up 1" />
            </section>
        </div>
    )
}

export default MockUp1;