import React, { useEffect, useState } from 'react'

const Nav = () => {
    const [scrollY, setScrollY] = useState(0);
    const [menuDown, setMenuDown] = useState(false);
    const [navPosition, setNavPosition] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`nav-section ${scrollY > 100 && scrollY < 7655 ? "hang" : ""}`}>
            <div className={`case ${menuDown ? "open" : ""}`}>
                <div className="links">
                    <a href='#home' className="logo" onClick={()=>setNavPosition(0)}>
                        <img src="https://gineousc.sirv.com/Images/loader-ico.png" alt="OFFR logo" />
                        <span>OffrCloud {menuDown}</span>
                    </a>
                    <a onClick={()=>setNavPosition(1)} className={`li ${navPosition === 1 ? "active" : ""}`} href='#services'>Our Services</a>
                    <a onClick={()=>setNavPosition(2)} className={`li ${navPosition === 2 ? "active" : ""}`} href='#howto'>How to</a>
                    <a onClick={()=>setNavPosition(3)} className={`li ${navPosition === 3 ? "active" : ""}`} href='#faq'>Frequently Asked Questions</a>
                    <a onClick={()=>setNavPosition(4)} className={`li ${navPosition === 4 ? "active" : ""}`} href='#contact'>Contact Us</a>
                </div>
                <div className="tray">
                    <a onClick={()=>setNavPosition(1)} className={`li ${navPosition === 1 ? "active" : ""}`} href='#services'>Services</a>
                    <a onClick={()=>setNavPosition(2)} className={`li ${navPosition === 2 ? "active" : ""}`} href='#howto'>How to</a>
                    <a onClick={()=>setNavPosition(3)} className={`li ${navPosition === 3 ? "active" : ""}`} href='#faq'>FAQ</a>
                    <a onClick={()=>setNavPosition(4)} className={`li ${navPosition === 4 ? "active" : ""}`} href='#contact'>Contact Us</a>
                </div>
                <a href="#contact" className="btnx">Schedule a Live Demo</a>
                <div className="trigger" onClick={() => setMenuDown(!menuDown)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Nav