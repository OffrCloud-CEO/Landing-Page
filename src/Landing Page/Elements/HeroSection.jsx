import React from 'react'
import Particles from './Particles';

const HeroSection = () => {
    return (
        <div className="hero-section" id='top'>
            <div className="content">
                <div className="text-content">
                    <label>What is OFFRCLOUD?</label>
                    <h1>The Future of Finance is Here.</h1>
                    <div className="info-section">
                        <div className="txt">
                            "OffrCloud offers a secure, customizable platform for raising capital through security token offerings, as an alternative to high-interest bank loans. Join their network now to simplify security token management."
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