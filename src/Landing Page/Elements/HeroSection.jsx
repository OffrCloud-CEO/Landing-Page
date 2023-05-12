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
                            “Is your business looking for an alternative to high interest bank loans? OffrCloud is a compliant,
                            secure, and useful platform to raise capital via security token offerings. Customize our platform
                            with your business logo, color scheme and other pertinent information then seamlessly launch
                            your token to the blockchain. Manage your security token performance with our intuitive user
                            interface designed to make security tokens simple. Join our network now to experience the
                            benefits”.

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