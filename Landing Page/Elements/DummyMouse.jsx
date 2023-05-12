import React, { useContext, useEffect, useState } from 'react'
import { landingPageContext } from '../Index';

const DummyMouse = () => {
    const { isHoveringImportant } = useContext(landingPageContext);

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const handleMouseMove = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY});
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={`dummmyMouse ${isHoveringImportant ? "hoverLink" : ""}`} style={{left: `${mousePosition.x -10}px`, top: `${mousePosition.y-10}px`}}>
        </div>
    )
}

export default DummyMouse