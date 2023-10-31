import React from 'react';
import './about.css';
import Navbar1 from '../Navbar1';
import {FaSortAmountUp} from 'react-icons/fa'
import {FcProcess} from 'react-icons/fc'
import {MdStarRate} from 'react-icons/md'
import {GiDuration} from 'react-icons/gi'
import Easy from '../easyway';
import Myapp from '../myApp';
import Footer from '../footer';



function About() {
    return (
        <>
        <Navbar1/>
        <div className="co">
            <div className="abt">
            <h1>About us</h1>
            <p className='sub-abt'>Your Gateway to Financial Growth in Europe!</p>
            <p>At Capital Smart Loan, we understand that businesses are the backbone of our economy. 
                Whether you're an established enterprise or an ambitious startup, having access to 
                the right financial resources can make all the difference. That's why we have dedicated 
                ourselves to providing comprehensive and tailored business loan solutions exclusively 
                for the European market.</p>
            </div>
            <div className='our'>
            <h4>Our Commitment</h4>
<p className='col-lg-6 mx-auto'>At the heart of our business philosophy lies a strong commitment to empowering European businesses with the capital they need to thrive and prosper. We believe that financial support should never be an obstacle standing in the way of your dreams. With Capital Smart Loan, you can be confident that you'll find the perfect funding solution to match your unique business requirements.</p>
            </div>
            <div className='why'>
            <h4>Why Choose Capital Smart Loan?</h4>
            <div className='mx-5 col-12 col-md-8 col-lg-8 why2'>
<p className=''>Tailored Loan Solutions: We recognize that each business is different and has its own set of challenges and opportunities. That's why our team of financial experts works closely with you to understand your specific needs and design a loan package that aligns perfectly with your goals.</p>
<p>Fast and Efficient Process: Time is of the essence in the business world, and we value yours. Our streamlined application and approval process ensures that you get the financial assistance you need promptly, allowing you to seize opportunities without delay.</p>
<p>Unmatched Expertise: Our seasoned financial professionals possess a deep understanding of the European market and have helped numerous businesses across various industries succeed. You can trust us to provide insightful guidance throughout your loan journey.</p>
<p>Flexible Repayment Options: We understand that businesses go through cycles, and cash flow can fluctuate. That's why we offer flexible repayment options that can be tailored to suit your business's performance.</p>
<p>Transparent and Secure: Transparency is the cornerstone of our operations. You can rely on us to provide clear and concise information about our loan terms, interest rates, and any associated fees. Your data's security is also of paramount importance to us, and we employ the latest technologies to safeguard your information.</p>
<p>Dedicated Customer Support: At Capital Smart Loan, we believe in building lasting relationships with our clients. Our friendly and responsive customer support team is always here to assist you with any inquiries or concerns you may have.</p>
<p>Join the Capital Smart Loan family today, and let's pave the way for your business's success together. Whatever your aspirations may be, we're here to turn them into reality.

Remember, your dreams are our priority. Let's unlock the potential of your business, hand in hand!</p>
</div>
            </div>

            <div className='container col-12 col-md-12 col-lg-12 mt-5'>
        <div className='plan-explain col-12 col-md-12 col-lg-12 text-center d-lg-flex d-md-flex'>
          <div className='col-12 col-md-3 col-lg-3 loan_properties'>
            <div><FaSortAmountUp className='indi-icon'/></div>
            <p style={
              {fontWeight: 'bold',}
            }>₦1,000,000 - ₦20,000,000<br></br>Loan Amount</p>
            <p>per invoice and credit line</p>
          </div>
          <div className='col-12 col-md-3 col-lg-3 loan_properties'>
          <div><FcProcess className='indi-p'/></div>
            <p style={
              {fontWeight: 'bold',}
            }>1%<br></br>Processing Fee and Commitment Fee</p>
            <p>of loan facility and per invoice</p>
          </div>
          <div className='col-12 col-md-3 col-lg-3 loan_properties'>
          <div><MdStarRate className='indi-icon'/></div>
            <p style={
              {fontWeight: 'bold',}
            }>from 3.5% p.m.<br></br>Interest Rate</p>
            <p>on borrowed amount</p>
          </div>
          <div className='col-12 col-md-3 col-lg-3 loan_properties'>
          <div><GiDuration className='indi-p'/></div>
            <p style={
              {fontWeight: 'bold',}
            }>1 - 12 Months<br></br>Duration</p>
            <p>for borrowed amount</p>
          </div>
        </div>
        
        </div>
        </div>
        <Easy/>
        <Myapp/>
    <Footer/>
        </>
    )
}
export default About;