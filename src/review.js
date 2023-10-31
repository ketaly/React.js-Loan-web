import React, {useState,useEffect} from 'react'
import "./review.css"


function Review() {

    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const div = document.getElementById('aniDiv2');
    if (div) {
      const { top } = div.getBoundingClientRect();
      const isVisible = top < window.innerHeight - 100 ;
      setIsVisible(isVisible);
      
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


    return (

<div className="Allreview">
    
<div id="aniDiv2" className={`aniDiv2 col-lg-7 col-md-7 col-12 review  ${isVisible ? 'slide-in' : ''}`}>
    <h3 style={{color:'green'}}>What Our Customers Say</h3>
    <h1>Helping</h1>
    <h1>Businesses Grow</h1>
    <button className='mt-5 bg-success btn btn-success apply custom-button' style={{color:'white'}}><span>Write your own Capital Loan Smart Experience</span></button>
</div>

         <div id="carouselExampleIndicators" class="carousel slide col-lg-5 col-md-5 col-12">

   <div class="carousel-inner resize col-lg-5 col-md-5 col-12">
     <div class="carousel-item active">
        <div className='mainReview text-center'>
            <div className='profile'>
            <img src={require('./images/E-com.jpg')} alt="Reload"/>
            <div>
                <p>Stanley <br /> Individual loan<br/><span style={{color:'green'}}>Lagos state</span></p>
                <p></p>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
        </div>
     </div>
     <div class="carousel-item">
     <div className='mainReview text-center'>
            <div className='profile'>
            <img src={require('./images/E-com.jpg')} alt="Reload"/>
            <div>
                <p>Sopiah <br /> Pos Agent<br/><span style={{color:'green'}}>Lagos state</span></p>
                <p></p>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
        </div>
     </div>
     <div class="carousel-item">
     <div className='mainReview text-center'>
            <div className='profile'>
            <img src={require('./images/E-com.jpg')} alt="Reload"/>
            <div>
                <p>Emmanuel <br /> Small business Loan<br/><span style={{color:'green'}}>Anambra state</span></p>
                <p></p>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
        </div>
     </div>
     <div class="carousel-item">
     <div className='mainReview text-center'>
            <div className='profile'>
            <img src={require('./images/E-com.jpg')} alt="Reload"/>
            <div>
                <p>Michael <br/> Individual loan <br/><span style={{color:'green'}}>Kano state</span></p>
                <p></p>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
        </div>
     </div>
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
   </button>
 </div>
</div>


    )
}

export default Review;