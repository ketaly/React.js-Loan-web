import React from 'react'
import "./offer.css";


function Offer() {
    return <div className='offerHolder'>
        <div className="offer col-lg-12 col-md-12 col-12">
                    Loan Plan
                </div>
                <div className="offerAll">
                
                <div className='offerAll1'>
                <div className='details col-lg-2 col-md-2 col-6'>
                    <img src={require('./images/individual cash.jpeg')} alt="Reload" className='col-lg-12 col-md-12 col-12' />
                <h3>Individual Loan</h3>
                <p>Welcome to Capital smart Loan™, your trusted destination for individual loans tailored to your financial needs. Our Individual Loan Plan Package offers flexible and competitive loan options to empower individuals like you. Here's what you need to know:</p> 
                </div>

                <div className='details col-lg-2 col-md-2 col-6'>
                    <img src={require('./images/pos.webp')} alt="Reload" className='col-lg-12 col-md-12 col-12'/>
                <h3>Pos Agent</h3>
                <p>Welcome to Capital smart Loan™, the go-to platform for POS agents seeking financial support. Our POS Agent Loan Plan Package is designed exclusively for POS agents like you. Here's a brief overview of what our plan entails:</p> 
                </div>

                <div className='details col-lg-2 col-md-2 col-6'>
                    <img src={require('./images/dis.jpg')} alt="Reload" className='col-lg-12 col-md-12 col-12'/>
                <h3>Distributors</h3>
                <p>Welcome to Capital smart Loan™, the trusted platform for distributors seeking financial assistance. Our Distributors Loan Plan Package is specifically designed to meet the unique needs of distributors like you. Here's a concise overview of our plan:</p> 
                </div>

                <div className='details col-lg-2 col-md-2 col-6'>
                    <img src={require('./images/small.jpg')} alt="Reload" className='col-lg-12 col-md-12 col-12'/>
                <h3>Small business Loan</h3>
                <p>Welcome to Capital smart Loan™, your trusted partner for small business financing. Our Small Business Loan Plan Package is specifically designed to provide entrepreneurs like you with the funding necessary to fuel business growth. Here's an overview of our plan:</p> 
                </div>
                </div>

                <div className='offerAll2'>
                <div className='details col-lg-2 col-md-2 col-6'>
                    <img src={require('./images/keke.jpg')} alt="Reload" className='col-lg-12 col-md-12 col-12'/>
                <h3>Transport vehicle financing</h3>
                <p>Welcome to Capital smart Loan™, your trusted source for transport vehicle financing. Our Transport Vehicle Financing program is designed to provide flexible and affordable financing options for individuals and businesses in need of vehicles for transportation purposes. Here's what you need to know:</p> 
                </div>
                
                <div className='details col-lg-2 col-md-2 col-6'>
                    <img src={require('./images/E-com.jpg')} alt="Reload" className='col-lg-12 col-md-12 col-12'/>
                <h3>E-commerce merchants</h3>
                <p>Welcome to Capital smart Loan™, your trusted partner for E-commerce merchant financing. Our E-commerce Merchant Financing program is designed to provide flexible and tailored financing solutions for online businesses. Here's an overview of our program:</p> 
                </div>
                </div>
            </div>
        
    </div>
    
}

export default Offer