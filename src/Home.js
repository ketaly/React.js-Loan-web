import React from 'react';
import Navbar1 from './Navbar1';
import Footer from './footer';
import LoanMetre from './loanMetre';
import Myapp from './myApp';
import Offer from './offer';
import Review from './review';
import Easy from './easyway';





function Home() {
    return (
        <div>
        <Navbar1/>
        <LoanMetre/>
        <Easy/>
        <Offer/>
        <Review/>
        <Myapp/>
        <Footer/>
        </div>
    )
}

export default Home;