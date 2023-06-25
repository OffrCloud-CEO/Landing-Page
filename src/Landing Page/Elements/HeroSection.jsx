import React from 'react'
import Particles from './Particles';

const HeroSection = () => {
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
                            <a href="#services" className="btnx">Explore</a>
                        </div>
                    </div>
                </div>
                <div className="particles-div">
                    <Particles />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
