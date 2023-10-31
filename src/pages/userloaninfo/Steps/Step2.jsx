import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import './Steps.css';



const images = [
  { src: "individual cash.jpeg", subheading: "Individual Plan" },
  { src: "small.jpg", subheading: "small bussiness" },
  { src: "pos.webp", subheading: "pos-agent" },
  { src: "keke.jpg", subheading: "transport plan" },
  { src: "E-com.jpg", subheading: "E-commerce plan" },
  { src: "dis.jpg", subheading: "Distributors plan" },
];

function CircularDivsSelector() {
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [formData, setFormData] = useState({ selected: null });

  const handleDivClick = (image) => {
    setSelectedDiv(image);
    setFormData({ selected: image });
    console.log(formData)
  };

  const rows = [];
  for (let i = 0; i < images.length; i += 3) {
    rows.push(images.slice(i, i + 3));
  }

  return (
    <div>
      <div className="personal-info text-center">
      <h3>Tell us about your loan.</h3>
      <p>What will you use this money for?</p>
      </div>
      <div className="circle-container">
        {rows.map((row, rowIndex) => (
          <div className="row row-plan" key={rowIndex}>
            {row.map((item, index) => (
              <div
                key={index}
                className={`circle ${
                  selectedDiv === item.src ? "selected" : ""
                }`}
                onClick={() => handleDivClick(item.src)}
              >
                {selectedDiv === item.src?(
                  <>
                  <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                  <p className="selected-p-tag">{item.subheading}</p>
                  </>
                ) : (
                  <>
                    <img src={`images/${item.src}`} alt="Reload" className="select-plan" />
                    <p>{item.subheading}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="euro-input">
        <label>
            <div>
          Amount:
          </div>
      <span className="euro-sign">€</span>
      <input
        type="text"
        placeholder="Amount"
        className='amt'
        value={formData.amount}
      />
      </label>
      
      <label>
            <div>
          Duration: 
          <span className="mons">(months)</span>
          </div>
      <input
        type="text"
        placeholder="duration"
        className='dur'
        value={formData.amount}
      />
      </label>

    </div>
    

    </div>
  );
}

export default CircularDivsSelector;
