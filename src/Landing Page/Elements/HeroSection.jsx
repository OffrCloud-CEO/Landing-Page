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
                            <span>OffrCloud presents a seamless and secure solution, providing</span>
                            <span> a customizable platform for capital acquisition.</span>
                            <span> By utilizing security token offerings, it offers an</span>
                            <span> appealing alternative to high-interest bank loans.</span>
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
