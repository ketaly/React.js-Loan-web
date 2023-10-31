import React from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import './UserInputedDetails.css';
import PersonalInfo from "./Steps/Step1";
import CircularDivsSelector from "./Steps/Step2";
import EmploymentStat from "./Steps/Step3";
import HouseInfo from "./Steps/Step4";
import { useState } from "react";
import { StepperContext } from "./contexts/StepperContext";
import Navbar2 from "../../Navbar2";


function UserDetails() {
    
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);

    const steps =[
        "P-Info",
        "Loan Plan",
        "E-stat",
        "H-Info",
        
    ];

   const displayStep = (step) => { 
        switch (step) {
            case 1:
                return <PersonalInfo/>
            case 2: 
                return <CircularDivsSelector/>
            case 3: 
                return <EmploymentStat/>
            case 4:
                return <HouseInfo/>
        
            default:
        }}

const handleClick = (direction) => {
let newStep = currentStep;

direction === "next" ? newStep++ : newStep--;
newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
}


    return(
        <>
        <Navbar2/>
        <div className="UserDetails col-md-6 col-lg-6 col-12 mx-auto">

        <div className="UserDetails-background w-100 align-items-center">
            <div className="mt-5">
            <Stepper
            steps={steps}
            currentStep={currentStep}
            />

       <div className="my-10 p-10">
        <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
        }}>
            {displayStep(currentStep)}
        </StepperContext.Provider>
       </div>

            </div>

            <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
            />
            </div>



            
        </div>
    
        </>
    )
}



export default UserDetails;