import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Stats from './Stats';
import Eduction from './Eductation';
import OpenAccount from '../OpenAccount';


import Signup from '../signup/Signup';
import PricingPage from '../pricing/PricingPage';
import AboutPage from '../about/AboutPage';

import ProductPage from '../products/ProductPage';
import SupportPage from '../support/SupportPage';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage () {
    return ( 
        <>
        
        <Hero />
        <Awards />
        <Stats />
        <Pricing  />
        <Eduction />
        <OpenAccount/>
        
        <Signup/>
       <AboutPage/>
       <PricingPage/>
       <ProductPage/>
       <SupportPage/>
       
       
       
        

        </>
     );
}

export default HomePage ;