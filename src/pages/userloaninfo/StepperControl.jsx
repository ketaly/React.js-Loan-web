import React from 'react';
import './UserInputedDetails.css';

const StepperControl = ({handleClick,currentStep,steps}) => {
  return (
    <div className=' con mt-4 mb-8'>
      <button
       onClick={()=>handleClick()}
       className={` custom-button btn ${currentStep===1 ? "opacity-50 , cursor: not-allowed" :""}`}>
       <span>back</span> 
      </button>

      <button
       onClick={()=>handleClick("next")}
      className=' custom-button btn bg-black'>
        <span style={{color: 'white'}}>{currentStep === 4 ? "Confirm" : "Next"}</span>
      </button>
    </div>
  )
}

export default StepperControl
