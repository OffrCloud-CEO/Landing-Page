import React, { useContext, useEffect, useRef } from 'react'
import Particles from './Particles';
import { MyContext } from '../../App';

const HeroSection = () => {
    const elementRef = useRef(null);
    const { setScrolledDown } = useContext(MyContext);


    const handleScroll = () => {
        const element = elementRef.current;
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            setScrolledDown(elementPosition < 20);
        }
    };

    useEffect(() => {
        const targetElement = elementRef.current.parentElement.parentElement; // Get the scrollable parent element
        
        targetElement.addEventListener('scroll', handleScroll);
        
        return () => {
            targetElement.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="hero-section" id='top'>
            <div className="content">
                <div className="text-content">
                    <label>What is OFFRCLOUD?</label>
                    <h1>The Future of Finance.</h1>
                    <div className="info-section">
                        <div className="txt">
                            <span>OffrCloud provides a secure, customizable platform to raise USD via crypto.</span>
                        </div>
                        <div className="btn-row">
                            <a href="#contact" className="btnx">Request a Demo</a>
                            <a href="https://demo.offrcloud.com" className="btnx">Connect Wallet</a>
                        </div>
                    </div>
                </div>
                <div className="particles-div">
                    <Particles />
                </div>
            </div>
            <div className='location-marker' ref={elementRef}></div>
        </div>
    )
}

export default HeroSection;
