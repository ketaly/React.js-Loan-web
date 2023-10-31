import React, {useState,useEffect} from 'react'
import Navbar1 from '../Navbar1'
import Footer from '../footer'
import Myapp from '../myApp'
import Review from '../review'
import './individual.css'
import {FaSortAmountUp} from 'react-icons/fa'
import {FcProcess} from 'react-icons/fc'
import {MdStarRate} from 'react-icons/md'
import {GiDuration} from 'react-icons/gi'



function Transport() {

  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true)
  }, []);

  return (
    <>
     <Navbar1/>
     <div className='indi'>
      
<div>
      <div className="container">
        <div className="indivi">
        <div className="col-md-6 col-12 col-lg-6 head">
            <h2 className='heading' style={{color: "green"}}>Transport Vehicle Financing</h2>
            <h5 style={{color:'white',fontWeight:'600'}}>from ₦150,000 for Drivers</h5>
            <p id="indi-animatedDiv" className={`indi-animated-div pes ${isVisible ? 'indi-slide-in' : ''}`}>
            Transport Vehicle Financing

            Welcome to Capital Smart Loan, your trusted source for transport vehicle financing. Our Transport Vehicle Financing program is designed to provide flexible and affordable financing options for individuals and businesses in need of vehicles for transportation purposes. Here's what you need to know:
<p>Loan Purpose: Whether you're looking to purchase a new or used vehicle for your transport business, expand your fleet, or replace an existing vehicle, our Transport Vehicle Financing program is tailored to meet your specific transportation needs.</p>
<p>Quick Approval: We understand the importance of getting your vehicle on the road promptly. Our efficient loan approval process ensures fast turnaround times, enabling you to access the financing you need quickly.</p>
<p>Flexible Repayment Options: We know that different businesses have different cash flow cycles. That's why our Transport Vehicle Financing program offers flexible repayment options, allowing you to choose a schedule that aligns with your revenue streams and business operations.</p>



<p>Disclaimer: Loan terms, conditions, and eligibility criteria are subject to change and final approval. Please refer to our website or contact our customer service for the most up-to-date information.</p>
<button className='btn btn-success custom-button'><span>Apply now</span></button>
            </p>
          </div>
          <div  className="col-md-5 col-11 col-lg-5 blur">
          <div className="indi-img col-md-11 col-11 col-lg-11">
            <img src="./images/individual cash.jpeg" alt="" srcset="" className='col-md-8 col-10 col-lg-8'/>
          </div>
          </div>
        </div>
      </div>
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
    <Review/>
    <Myapp/>
    <Footer/>   

</>
  
  )
}

export default Transport;
