import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom";




function Footer() {
    return <footer>
        <div className="container p-5 text-center">
            <div className="footer col-12 col-lg-12 col-md-12">
                <div className="col-lg-6 col-md-6 col-12 firstFooter">
                    <div className="firstLine col-6 col-md-6 col-lg-6">
                        <h5>Loan Plan</h5>
                       <Link to="/Individual" style={{ textDecoration: 'none' }}><p>Individual Loan</p></Link> 
                       <Link to="/pos_agent" style={{ textDecoration: 'none' }}><p>Pos Agent</p></Link>
                       <Link to="/Distributors" style={{ textDecoration: 'none' }}><p>Distributors</p></Link>
                       <Link to="/small" style={{ textDecoration: 'none' }}><p>Small business Loan</p></Link>
                       <Link to="/Transport" style={{ textDecoration: 'none' }}><p>Transport vehicle financing</p></Link> 
                       <Link to="/Commerce" style={{ textDecoration: 'none' }}><p>E-commerce merchants</p></Link>
                       
                    </div>
                    <div className="secondLine col-6 col-md-6 col-lg-6">
                    <h5>Company</h5>
                        <p>About us</p>
                         <h5>Support</h5>
                          <p>FAQs </p>
                        <p>Get Help</p>
                </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 secondFooter">
                    
<h5>Contact Us</h5>

<p>0812 289 1078</p>
<p>support@lendigo.ng</p>
<h5>Follow Us</h5>

                </div>
            </div>
            <div className="policy" style={{fontFamily:"lobster"}}>Privacy Policy</div>
        <div className="policy" style={{fontFamily:"lobster"}}>2023 © Stan-tech</div>
        </div>
        
    </footer>
}

export default Footer;