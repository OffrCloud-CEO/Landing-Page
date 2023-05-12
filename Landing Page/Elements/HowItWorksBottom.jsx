import React, { useEffect, useState } from 'react';

const HowItWorksBottom = ({refTag, classData}) => {
    const [triggerState, setTriggerState] = useState(0);

    const [txtContent, setTxtContent] = useState({
        txt1: "Request Demo",
        txt2: "Create",
        txt3: "Lauch",
        txt4: "Manage",
    });

    const [txtimgContent, setTxtimgContent] = useState({
        txtImg1: "Request Demo",
        txtImg2: "Create",
        txtImg3: "Lauch",
        txtImg4: "Manage",
    });

    useEffect(()=>{

    }, [triggerState]);

    return (
        <div className={`how-bottom ${classData}`} ref={refTag}>
            <section>
                <span>2 lvl</span>
                <span>Request Demo</span>
            </section>
            <section>
                <span>2 lvl</span>
                <span>Create</span>
            </section>
            <section>
                <span>1,589</span>
                <span>Launch</span>
            </section>
            <section>
                <span>11.9k</span>
                <span>Manage</span>
            </section>
            <div className="hanging-div">
                <span onClick={()=>setTriggerState(0)} className={`${triggerState === 0 ? "active": ""}`}>Get Started</span>
                <span onClick={()=>setTriggerState(1)} className={`${triggerState === 1 ? "active": ""}`}>Token Logic</span>
                <span onClick={()=>setTriggerState(2)} className={`${triggerState === 2 ? "active": ""}`}>Dividend Logic</span>
                <span onClick={()=>setTriggerState(3)} className={`${triggerState === 3 ? "active": ""}`}>Dapp</span>
            </div>
        </div>
    )
}

export default HowItWorksBottom;