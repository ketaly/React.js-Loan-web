import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Navbar_respo.css";
import LoginModal from './modal/login';
import SignUpModal from './modal/register';















function Navbar2() {



  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  const toggleSignUpModal = () => {
    setSignUpModalOpen(!signUpModalOpen);
  };





    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('nav');
        
        if (window.scrollY > 0) {
          navbar.classList.add('bg-dark','shadow');
        
        } else {
          navbar.classList.remove('bg-dark','shadow');
        }
      });


      
    
    return (
      
    <nav class="navbar fixed-top  navbar-expand-md navbar-dark shadow">
      
      <div class="container-fluid hh2">
      <Link to="/" class="navbar-brand" style={{ textDecoration: 'none' }}><img src="" width="50" height="50" class="d-inline-block align-center" alt="" />Capital Smart <span className="loan">Loan</span></Link>
        <button class="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav">
            
            <div>
            <li class="nav-item">
              
             <Link to="/" class="nav-link active" style={{ textDecoration: 'none' }}> Home</Link>
            </li>
            </div>

            <div class="btn-group">
            
  <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" >
  loan Plan
  </button>
  <ul class="dropdown-menu">
    <li class="drop"><Link to="/Individual" style={{ textDecoration: 'none' }}>Individual Loan</Link></li>
    <li class="drop"><Link  to="/pos_agent" style={{ textDecoration: 'none' }}>Pos Agent</Link></li>
    <li class="drop"><Link  to="/Distributors" style={{ textDecoration: 'none' }}>Distributors</Link></li>
    <li class="drop"><Link  to="/small" style={{ textDecoration: 'none' }}>Small business Loan</Link></li>
    <li class="drop"><Link  to="/Transport" style={{ textDecoration: 'none' }}>Transport vehicle financing</Link></li>
    <li class="drop"><Link  to="/Commerce" style={{ textDecoration: 'none' }}>E-commerce merchants</Link></li>
  </ul>
</div>
           <div>
            <li class="nav-item">
              <button onClick={toggleLoginModal}class="nav-link active btn btn-success">Apply Now</button>
              <LoginModal isOpen={loginModalOpen} onClose={toggleLoginModal} />
              
            </li>
            </div>

            <div>
            <li class="nav-item">
              <button onClick={toggleSignUpModal}class="nav-link active btn btn-success">Register</button>
              <SignUpModal isOpen={signUpModalOpen} onClose={toggleSignUpModal} />
              
            </li>
            </div>

            <div>
            <li class="nav-item">
              <Link class="nav-link" to="/UserDetails" style={{ textDecoration: 'none' }}>How It Works</Link>
            </li>
          </div>

          <div>
            <li class="nav-item">
              <Link class="nav-link" to="/About" style={{ textDecoration: 'none' }}>About us</Link>
            </li>
            </div>

            <div>
            <li class="nav-item">
              <a class="nav-link" href="1">FAQ</a>
            </li>
            </div>

          </ul>
        </div>
      </div>
    </nav>
    )
    
  }

  export default Navbar2;