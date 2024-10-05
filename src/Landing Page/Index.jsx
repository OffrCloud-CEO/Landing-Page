import React from 'react';
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


const Index = () => {
    return (
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
    )
}

export default Index;