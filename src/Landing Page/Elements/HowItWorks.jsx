import React, { useState, useRef, useEffect } from 'react';
import HowItWorksBottom from './HowItWorksBottom';

const HowItWorks = () => {
    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();
    
    const [card1Class, setCard1Class] = useState('');
    const [card2Class, setCard2Class] = useState('');
    const [card3Class, setCard3Class] = useState('');

    useEffect(()=>{
        const card1Observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCard1Class("in-view");
                } else {
                    setCard1Class("");
                }
            }, { threshold: .15 }
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
            card1Observer.disconnect();
            card2Observer.disconnect();
            card3Observer.disconnect();
        }
    },[])

    return (
        <div className="next-section how" id='howto'>
            <div className="hanging-img l">
                <img src="https://gineousc.sirv.com/Images/icons/undraw_questions_re_1fy7.svg" alt="" />
            </div>
            <div className="hanging-img r">
                <img src="https://gineousc.sirv.com/Images/icons/undraw_reading_book_re_kqpk.svg" alt="" />
            </div>
            <div className={`title-middle`}>
                <div className={`${card1Class}`} ref={card1Ref}>Discover the simple steps to Launch your Security token with us.</div>
                <span className={`${card2Class}`} ref={card2Ref}>our streamlined process makes it easy to create, launch, and manage your security token, providing you with peace of mind and security for your business</span>
                <a href='#contact' className="btnx">Schedule a live demo</a>
            </div>

            <HowItWorksBottom refTag={card3Ref} classData={card3Class} />
        </div>
    )
}

export default HowItWorks;