import React, {useEffect,useState,useRef} from 'react'
import handleClick from './UserInputedDetails';
import './UserInputedDetails.css';





const Stepper = ({steps, currentStep}) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

const updateStep = (stepNumber, steps) => {
  const newSteps = [...steps]
  let count =0;

while (count < newSteps.length) {

  if (count === stepNumber){
    newSteps[count]={
      ...newSteps[count],
      highlighted: false,
      selected: true,
      completed: false,
    };
    count++;
  }else if (count < stepNumber){
    newSteps[count]={
      ...newSteps[count],
      highlighted: true,
      selected: true,
      completed: true,
    };
    count++;
  }else{
    newSteps[count]={
      ...newSteps[count],
      highlighted: false,
      selected: false,
      completed: false,
    };
    count++;
  }
  
}

return newSteps;

};

  useEffect (() => {
    const stepsState = steps.map((step,index)=>
    Object.assign({},
      {
      description: step,
      completed: false,
      highlighted: index === 0 ? true : false,
      selected: index === 0 ? true : false,
    })
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep -1, stepRef.current);
    setNewStep(current);
  },[steps, currentStep]);

  const displaySteps = newStep.map((step, index,handleClick) =>{
return(
  <div key={index} className='' onClick={()=>handleClick("next")}>


   
        <div className={`pro-circle ${step.selected ? "bg-success":""}`}>
          {step.completed ? (
            <span style={{color:'white',fontSize: '25px'}}>&#10003;</span>
          ):(index + 1)}
        </div>
       
        

        <div className={`display-description`}>
        {step.highlighted ? <span style={{color:'green'}}>{step.description}</span>:<span>{step.description}</span>}
        </div>
      </div> 
      
  
 
)
  });

  return (
    <div className='Stepper mx-4 p-4'>
      <div className='progress'>
      {displaySteps}
      </div>
      
    </div>
  )
}

export default Stepper
