import React,{useState,useEffect} from 'react';
import "./modal.css";
import {FcGoogle} from 'react-icons/fc';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const SignUpModal = ({ isOpen, onClose}) => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
   
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    phoneNumber: false,
    password: false,
   
  });


  const [isRegistered, setIsRegistered] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])/;
    return passwordRegex.test(password);
  };

  const validatePhoneNumber = (phoneNumber) => {
    try {
      
      const phoneRegex = /^\+234\d{10}$/;
       return phoneRegex.test(phoneNumber);
    } catch (error) {
      return false;
    }
  };

  
  const handleSubmit = () => {
    
    const { username, email, phoneNumber, password } = formData;

    if (!username || !email || !phoneNumber || !password) {
      setErrors({
        username: !username,
        email: !email,
        phoneNumber: !phoneNumber,
        password: !password,
      });
    } else if (!validatePassword(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: true,
      }));
    } else if (!validatePhoneNumber(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: true,
      }));
    } else {
      setIsRegistered(true);
     
    }
  };

  useEffect(() => {
    let timeoutId;

    if (isRegistered) {
      timeoutId = setTimeout(() => {
        setIsRegistered(false);
        Navigate('/UserDetails');
      }, 5000); 
      
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isRegistered,Navigate]);
 



  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content"
       style={{
        backgroundImage: `url(${require('../images/pexels-photo-7412098.jpeg')})`
    }}
      >
        
        <div className='col-6 col-md-6 col-lg-6 log'>
        <button onClick={onClose} className='btn-close'></button>
        <h2>Sign Up</h2>
        <h6>Input Your Correct Details</h6>
        <div className='log-input col-12 col-md-12 col-lg-12'>
       
           <input 
        type="text"
        name="username"
        id="username"
        onChange={handleInputChange}
        style={{ borderColor: errors.username && 'red'}}
        required placeholder='Username'
        className='log-input col-8 col-md-8 col-lg-8'
        />
        {errors.username && <p className='error-text'>Please provide your username</p>}
      

         <input 
        type="email"
        name="email"
        id="email"
        onChange={handleInputChange}
        style={{ borderColor: errors.email && 'red' }}
        required placeholder='Email address'
        className='log-input col-8 col-md-8 col-lg-8'/>
        {errors.email && <p className='error-text'>Please provide a valid email</p>}

        <input 
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        onChange={handleInputChange}
        style={{ borderColor: errors.phoneNumber && 'red' }}
        required placeholder='Mobile number'
        className='log-input col-8 col-md-8 col-lg-8'/>
         {errors.phoneNumber && <p className='error-text'>Please provide a valid phone number</p>}

         <input
      type='password'
      name="password"
      id="password" 
      onChange={handleInputChange}
      style={{ borderColor: errors.password && 'red' }}
      required placeholder='Password' 
      className='log-input col-8 col-md-8 col-lg-8'/>
      {errors.password && (
        <p className='error-text'>
          Password must contain an<br></br>  uppercase letter,<br></br>  a lowercase letter,<br></br>  a number,<br></br>  and a symbol.
        </p>
      )}
           <input 
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        required placeholder='confirmPassword'
        className='log-input col-8 col-md-8 col-lg-8'/>
 
     
</div>
       
          
          
          <button className='col-8 col-md-8 col-lg-8 btn custom-button mt-2 bg-black'><span style={{color: 'white'}} onClick={handleSubmit} >
          Sign Up
            </span></button>

            {isRegistered && (
        <div className="popup">
          <div className="popup-content">
            <p>Registration successful!</p>
            <div class="loading-circle"></div>
          </div>
        </div>
      )}

          <div className="forgot-password">
          <Link>Already have an account?</Link>
         
          </div>
          <button className='col-8 col-md-8 col-lg-8 btn custom-button mt-3 mb-3'><span><FcGoogle/></span><span style={{fontSize:'10px'}}>
          
          Sign up with your Google account</span></button>
        
      </div>
    
      </div>
    </div>
  );
};

export default SignUpModal;
