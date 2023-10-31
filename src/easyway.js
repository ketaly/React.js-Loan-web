import React, { useEffect, useState } from 'react';
import "./easyway.css";
import {CgProfile} from 'react-icons/cg'




function Easy() {



    const [count, setCount] = useState(0);

    useEffect(() => {
      const targetDiv = document.getElementById('targetDiv');
  
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounter();
          }
        });
      }; 
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
      });
      return () => {
        observer.observe(targetDiv);
      };
    }, []);
  
    const startCounter = () => {
      let startTime = null;
      const duration = 1000;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const increment = (1200 / duration) * progress;
        setCount(Math.round(increment, 1200));
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };




    //javascript for transtisions by Stanley KK
        const [isVisible, setIsVisible] = useState(false);
        const handleScroll = () => {
          const div = document.getElementById('animatedDiv');
          if (div) {
            const { top } = div.getBoundingClientRect();
            const isVisible = top < window.innerHeight - 100; 
            setIsVisible(isVisible);
          }
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    
        
    return(<div className="easy w-100 d-flex align-items-center">
                <div className='col-lg-6'>
                    <div>
                      <h1 className='E'>Easiest way to get</h1>
                      <h1 className='l'>LOAN </h1>  
                    </div>
                    <div id="animatedDiv" className={`animated-div ${isVisible ? 'slide-in' : ''}`}>
                        <p className='w'>Capital smart Loan™ <br />is an innovative personal lending platform created to <br /> connect people with their dreams by providing finance  <br />and financial resources that is easily accessible and affordable. </p>
                        <button className='btn btn-success but custom-button'><span>How it works</span></button>
                    </div>
                </div>
                <div className='col-lg-6 num' >
                    <span><CgProfile className='easy-icon'/></span>
                    <p id="targetDiv">
                    {count}
                    </p>
                    <p id="animatedDiv" className={`animated-div2 ${isVisible ? 'slide-in2' : ''}`}>Customers and counting</p>
                </div>
              
            </div>
           
        
    );


    
}



export default Easy;

