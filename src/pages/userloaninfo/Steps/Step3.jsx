import React, { useState } from 'react';

const EmploymentStat = () => {
  const texts = [
    'Employed',
    'Employed part time',
    'Self Employed',
    'Retired',
    'Homemaker',
    'Others',
  ];

  const [selectedtext, setSelectedtext] = useState(null);

  const handleItemClick = (text) => {
    setSelectedtext(text);
    setFormData({ selected: text });
  };

  const rows = [];
  for (let i = 0; i < texts.length; i += 3) {
    rows.push(texts.slice(i, i + 3));
  }

  const [formData, setFormData] = useState({
    selected: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  // const sortForOthers = ()=>{
  //   console.log(texts.filter((text,index)=>text==="Others"))
  // }

  return (
    <div className='col-12 col-md-12 col-lg-12'>
      <div className='personal-info text-center'>
        <h3>Tell us about your current employment status.</h3>
        <p>Employment Status?</p>
      </div>

      <form onSubmit={handleSubmit} className='form-step-3'>
        <div className=' col-12 col-md-12 col-lg-12'>
          {rows.map((row, rowIndex) => (
            <div
              className='row text-center justify-content-center justify-content-around mt-5'
              key={rowIndex}
            >
              {row.map((text, index) => (
                <div
                  key={index}
                  className={`circle ${
                    selectedtext === text ? 'selected' : ''
                  }`}
                  onClick={() => handleItemClick(text)}
                >
                  {selectedtext === text ? (
                    <div className='text'>{text}</div>
                  ) : (
                    <div className='text'>{text}</div>
                  )}
                </div>
              ))}
            </div>
          ))}

          {selectedtext === texts[5] ? (
            <div className='empy-others-input'>
              {' '}
              <label>
                <div className='font-change-of-lable-tag'>Title:</div>
                <div>
                  <select name='title' className='select-btn'>
                    <option value='Mr'>Mr</option>
                    <option value='Mrs'>Mrs</option>
                    <option value='Miss'>Miss</option>
                    <option value='Ms'>Ms</option>
                    <option value='Dr'>Dr</option>
                  </select>
                </div>
              </label>
            </div>
          ) : (
            ''
          )}
        </div>
      </form>

      <div className='personal-info text-center'>
        <h3>Tell us about your current Income.</h3>
        <p>so we can ensure your Loan is affordable</p>
      </div>
    </div>
  );
};

export default EmploymentStat;
