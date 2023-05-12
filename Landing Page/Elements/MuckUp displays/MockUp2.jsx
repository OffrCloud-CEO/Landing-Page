import React, { useState, useRef, useEffect } from 'react';

const MockUp2 = () => {
    const card1Ref = useRef();
    const card2Ref = useRef();

    const [card1Class, setCard1Class] = useState('');
    const [card2Class, setCard2Class] = useState('');

    useEffect(() => {
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
    }, []);

    return (
        <div className="next-section mock m1">
            <section className={`${card1Class}`} ref={card1Ref}>
                <div className="h1">Intuitive and Responsive Dapp UI for Token Holders.</div>
                <div className="p">
                    “Our platform is designed with an intuitive and fully responsive Dapp UI for your token holders.
                    We offer a comprehensive suite of features to help your stakeholders manage their tokens,
                    including dividend management. Our team of experts will guide your stakeholders through the
                    process of purchasing and tracking their tokens performance, ensuring their confidence and
                    trust in your token offering."
                </div>
                <div className="icon-grid">
                    <div>
                        <img src="https://gineousc.sirv.com/Images/icons/mr.png" alt="Launch Icon" />
                        <span>Responsive UI</span>
                    </div>
                    <div>
                        <img src="https://gineousc.sirv.com/Images/icons/ui.png" alt="Launch Icon" />
                        <span>Intuitive Dapp</span>
                    </div>
                    <div>
                        <img src="https://gineousc.sirv.com/Images/icons/coin-in-hand--v2.png" alt="Launch Icon" />
                        <span>Token Sale</span>
                    </div>
                </div>
            </section>
            <section className={`img ${card2Class}`} ref={card2Ref}>
                <img src="https://gineousc.sirv.com/Images/Landing%20Page%20Resources/mock003.png" alt="Mock up 1" />
            </section>
        </div>
    )
}

export default MockUp2;