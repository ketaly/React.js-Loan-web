import React, {useState, useEffect} from 'react';
import "./modal.css";
import { Link } from 'react-router-dom';
import SignUpModal from './register';






const LoginModal = ({ isOpen, onClose }) => {

  //Resgister js
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const toggleSignUpModal = () => {
    setSignUpModalOpen(!signUpModalOpen);
  };
  ///////////////////////////////////////////////////////




  const [isRegistered, setIsRegistered] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  
  const [formData, setFormData] = useState({
    email: '',
    password: '', 
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
   
  });

 

  //input validation
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

  //password js
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])/;
    return passwordRegex.test(password);
  };

  //Login successfully
  const handleSubmit = () => {
    const { email, password } = formData;
  

    if ( !email || !password) {
      setErrors({
        email: !email,
        password: !password,
      });
    } else if (!validatePassword(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: true,
      }));
    } else {
      setIsRegistered(true);
    }
  };

  //timeout
  useEffect(() => {
    let timeoutId;

    if (isRegistered) {
      timeoutId = setTimeout(() => {
        setIsRegistered(false);
      }, 5000); 
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isRegistered]);
////////////////////////////////////////




  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content2"
      style={{
        backgroundImage: `url(${require('../images/pexels-photo-7412098.jpeg')})`
    }}
      >
      
      <div className='col-6 col-md-6 col-lg-6 log'>
        <button onClick={onClose} className='btn-close'></button>
        <h2>Login</h2>
        <p>Welcome back</p>
        <div className='log-input col-12 col-md-12 col-lg-12'>
        <input 
        type="email"
        name="email"
        id="email"
        onChange={handleInputChange}
        style={{ borderColor: errors.email && 'red' }}
        required
        placeholder='Email address'
        className='log-input col-8 col-md-8 col-lg-8'/>
        {errors.email && <p className='error-text'>Please provide a valid email</p>}
      <input
      type='password'
      name="password"
      id="password"
      onChange={handleInputChange} 
      required placeholder='Password' 
      style={{ borderColor: errors.password && 'red' }}
      className='log-input col-8 col-md-8 col-lg-8'/>
        {errors.password && (
        <p className='error-text'>
          Password must contain an<br></br>  uppercase letter,<br></br>  a lowercase letter,<br></br>  a number,<br></br>  and a symbol.
        </p>
      )}
</div>
       
<div className='d-flex'>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember me

         </div>
          
          <button className='col-8 col-md-8 col-lg-8 btn custom-button mt-3 bg-black'><span style={{color: 'white'}} onClick={handleSubmit} >Login</span></button>
          <button className='col-8 col-md-8 col-lg-8 btn custom-button mt-2 mb-4' onClick={toggleSignUpModal}><span>Register</span></button>
          <SignUpModal isOpen={signUpModalOpen} onClose={toggleSignUpModal} />
          <div className="forgot-password pb-5">
          <Link to={""}>Forgot password?</Link>
          </div>
          {isRegistered && (
        <div className="popup">
          <div className="popup-content mx-auto">
            <p>Welcome Back!</p>
            <div class="loading-circle"></div>
          </div>
        </div>
      )}

      </div>
     
      
      </div>
    </div>
  );
};

export default LoginModal;
