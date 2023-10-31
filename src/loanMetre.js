import React, { useState } from 'react';
import "./loanMetre.css";
import LoginModal from './modal/login';
import "./loanMetre_respo.css";
import {FaCartShopping,FaCalendarCheck,FaBagShopping,FaCalendarDays,FaPercent,FaCodeCompare} from 'react-icons/fa6'






function LoanMetre() {

    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const toggleLoginModal = () => {
        setLoginModalOpen(!loginModalOpen);
      };




  const [loanAmount, setLoanAmount] = useState(1000);
  const [loanDuration, setLoanDuration] = useState(1);

  const interestRate = 0.05;
  const interestCharged = loanAmount * interestRate;

  const monthlyRepayment = (loanAmount + interestCharged)*loanDuration;

  const handleLoanAmountChange = (event) => {
    const value = parseInt(event.target.value);
    setLoanAmount(value);
  };

  const handleLoanDurationChange = (event) => {
    const value = parseInt(event.target.value);
    setLoanDuration(value);
  };
    return(
        <>
    
        <div className="banner-Image w-100 align-items-center" style={{
            backgroundImage: `url(${require('./images/pexels-photo-7412098.jpeg')})`
        }}>
            <div className="content col-12 col-md-12 col-lg-8">
                <h2 className="need ">
Need quick cash for that
</h2>
<h1 className="urgent">URGENT Need?</h1>

<div className='p-3 loan-chart col-lg-12 col-md-9 m-auto'>
                            <div class="LOANCALCULATOR">
                                <div class="LABELSLIDER">
                                    <div class="small text-light">
                                    <FaCartShopping  className='icon-green-div'/>
                                    <br />
                                    Loan Amount
                                    
                                    </div> 
                                
                                    <input value={loanAmount}  id="loanAmount" className='col-lg-6 col-6'
                                      type="range"
                                      min={1000}
                                      max={1000000}
                                      step={1000} 
                                    onChange={handleLoanAmountChange}/>
                                    
                                    <div className="pull-right"><span>₦{loanAmount}</span>
                                    </div>
                                </div>

                                <div class="LABELSLIDER">
                                    <span><FaCalendarCheck className='icon-green-div'/>
                                    <br />
                                    Loan Duration</span>                       
                                <input
                                    id="loanDuration"
                                    value={loanDuration}
                                    className='col-lg-6 col-6'
                                    type="range"
                                    min={1}
                                    max={12}
                                    step={1}
                                    onChange={handleLoanDurationChange}
                                   /> {loanDuration} Months</div>
                            </div>
                    </div>

                    
            <div class="p-3 col-md-9 ll m-auto col-lg-12">
                        <div class="row">
                            <div class="col-md-3 col-12 col-lg-3">
                                <div class="LABELBOXES">
                                    <FaBagShopping className='icon-white-div'/>
                                    <br/>
                                    LOAN AMOUNT
                                    <div class="LABELBOXESDOWN">
                                        <input class="LABELNUMBERS col-6" id="DumpVal" disabled="" type="text" value={loanAmount}/>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-lg-1">
                                <div class="LABELBOXES">
                                    <FaCalendarDays className='icon-white-div'/>
                                    <br/>
                                    LOAN DURATION
                                    <div class="LABELBOXESDOWN">
                                        <input class="LABELNUMBERS col-6" id="duration" disabled="" type="text" value={loanDuration}/>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-lg-3">
                                <div class="LABELBOXES">
                                    <FaPercent className='icon-white-div'/>
                                    <br/>
                                    INTEREST CHARGED
                                    <div class="LABELBOXESDOWN">
                                    <spam>₦<input class="LABELNUMBERS col-6" id="amount3" type="text" value={interestCharged.toFixed(2)}/></spam>
                                        
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-3 col-lg-3">
                                <div class="LABELBOXES">
                                    <FaCodeCompare className='icon-white-div'/>
                                    <br/>
                                    REPAYMENT (PM)
                                    <div class="LABELBOXESDOWN">
                                      <span>
                                    ₦<input class="LABELNUMBERS col-6" id="mRepay" type="text" value={monthlyRepayment.toFixed(2)}/></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="text-center pt-5">
                        <span class="small-note font-weight-bold">NB: This facility is available for all customers</span>
                        </div>
                    </div>

                    <div class="pt-3 pb-5 apply ">
                        <button class="btn btn-success col-lg-2 apply custom-button" onClick={toggleLoginModal}><span>APPLY FOR LOAN</span></button>
                        <LoginModal isOpen={loginModalOpen} onClose={toggleLoginModal} />
                    </div>



            </div>
        </div>
                    
                

    </>

    
    )

}





export default LoanMetre;