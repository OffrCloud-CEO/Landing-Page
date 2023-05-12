import React, { useState } from 'react';
import HeroSection from './Elements/HeroSection';
import Services from './Elements/Services';
import MockUp1 from './Elements/MuckUp displays/MockUp1';
import MockUp2 from './Elements/MuckUp displays/MockUp2';
import MockUp3 from './Elements/MuckUp displays/MockUp3';
import FaqSection from './Elements/FaqSection';
import ContactUsSection from './Elements/ContactUsSection';
import Footer from './Elements/Footer';
import Nav from './Elements/Nav';
import { Toaster } from 'react-hot-toast';

export const landingPageContext = React.createContext();
const Index = () => {
    const [supContactType, setSupContactType] = useState(0);
    return (
        <landingPageContext.Provider value={{ supContactType, setSupContactType }}>
            <div className="landing">
                <Toaster
                    containerStyle={{
                        zIndex: 999999999999
                    }}
                    position='bottom-right'
                />
                <Nav />
                <HeroSection />
                <Services />
                <MockUp1 />
                <MockUp2 />
                <MockUp3 />
                <FaqSection />
                <ContactUsSection />
                <Footer />
            </div>
        </landingPageContext.Provider>
    )
}

export default Index;