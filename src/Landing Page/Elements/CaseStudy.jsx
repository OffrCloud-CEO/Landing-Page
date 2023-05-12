import React, { useEffect, useRef, useState } from 'react';
import AnimatedPNG from './AnimatedPNG';

const CaseStudy = () => {
    const labelRef = useRef();
    const [labelClass, setLabelClass] = useState('');

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

        return () => {
            labelObserver.disconnect();
        }
    }, []);

    return (
        <div className="next-section case">
            <div className={`title ${labelClass}`} ref={labelRef}>
                <div>Checkout these case studies</div>
            </div>
            <div className="grid-box">
                <section>
                    <div className="img">
                        <img src="https://gineousc.sirv.com/Images/icons/Logo%20list/logo2.png" alt="coinbase logo" />
                    </div>
                </section>
                <section>
                    <div className="img">
                        <img src="https://gineousc.sirv.com/Images/icons/Logo%20list/logo3.png" alt="fireblock logo" />
                    </div>
                </section>
                <section>
                    <div className="img">
                        <img src="https://gineousc.sirv.com/Images/icons/Logo%20list/logo4.png" alt="tokeny" />
                    </div>
                </section>
                <section>
                    <div className="img">
                        <img src="https://gineousc.sirv.com/Images/icons/Logo%20list/logo5.png" alt="Bitbond Logo" />
                    </div>
                </section>
            </div>

            <AnimatedPNG />
        </div>
    )
}

export default CaseStudy