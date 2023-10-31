import React, { useState } from 'react';
import './Steps.css';

export default function PersonalInfo() {
  const texts = [
    'Single',
    'Married',
    'separated',
    'cohabiting',
    'divorced',
    'widowed',
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
    title: 'Mr',
    firstName: '',
    lastName: '',
    selected: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className='col-12 col-md-12 col-lg-12'>
      <div className='personal-info text-center'>
        <h3>Great, let's get started...</h3>
        <p>Please enter your name.</p>
      </div>
      <div className='person col-12 col-md-12 col-lg-12'>
        <form onSubmit={handleSubmit}>
          <div className='col-12 col-md-12 col-lg-12'>
            <label>
              <div className='font-change-of-lable-tag'>Title:</div>
              <div>
                <select
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                  className='select-btn'
                >
                  <option value='Mr'>Mr</option>
                  <option value='Mrs'>Mrs</option>
                  <option value='Miss'>Miss</option>
                  <option value='Ms'>Ms</option>
                  <option value='Dr'>Dr</option>
                </select>
              </div>
            </label>
          </div>

          <div>
            <label>
              <div className='font-change-of-lable-tag'>First Name:</div>
              <div>
                <input
                  type='text'
                  name='firstName'
                  className='person-input'
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div className='font-change-of-lable-tag'>Surname:</div>
              <div>
                <input
                  type='text'
                  name='surname'
                  className='person-input'
                  value={formData.surname}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>

          <div className='col-12 col-md-6 col-lg-6 mt-3'>
            <h6 className='font-change-of-lable-tag'>
              What's your date of birth?
            </h6>
            <div className='date-of-birth'>
              <div>
                <label>
                  <div className=''>Day:</div>
                  <div>
                    <select
                      name='State'
                      value={formData.day}
                      onChange={handleInputChange}
                      className='birth-day'
                    >
                      <option value='Mr'>Mr</option>
                      <option value='Mrs'>Mrs</option>
                      <option value='Miss'>Miss</option>
                      <option value='Ms'>Ms</option>
                      <option value='Dr'>Dr</option>
                    </select>
                  </div>
                </label>
              </div>

              <div>
                <label>
                  <div className=''>Months:</div>
                  <div>
                    <select
                      name='State'
                      value={formData.Months}
                      onChange={handleInputChange}
                      className='birth-month'
                    >
                      <option value='1'>01</option>
                      <option value='2'>02</option>
                      <option value='3'>03</option>
                      <option value='4'>04</option>
                      <option value='5'>05</option>
                      <option value='6'>06</option>
                      <option value='7'>07</option>
                      <option value='8'>08</option>
                      <option value='9'>09</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                      <option value='18'>18</option>
                      <option value='19'>19</option>
                      <option value='20'>20</option>
                      <option value='21'>21</option>
                      <option value='22'>22</option>
                      <option value='23'>23</option>
                      <option value='24'>24</option>
                      <option value='25'>25</option>
                      <option value='26'>26</option>
                      <option value='27'>27</option>
                      <option value='28'>28</option>
                      <option value='29'>29</option>
                      <option value='30'>30</option>
                      <option value='31'>31</option>
                    </select>
                  </div>
                </label>
              </div>

              <div>
                <label>
                  <div className=''>Year:</div>
                  <div>
                    <select
                      name='State'
                      value={formData.year}
                      onChange={handleInputChange}
                      className='birth-year'
                    >
                      <option value='Mr'>Mr</option>
                      <option value='Mrs'>Mrs</option>
                      <option value='Miss'>Miss</option>
                      <option value='Ms'>Ms</option>
                      <option value='Dr'>Dr</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>

      <form action='' method='post' onSubmit={handleSubmit}>
        <div className='personal-info text-center mt-5'>
          <h3>Thanks Name,</h3>
          <h3>Just a few more questions to get your personal information.</h3>
          <p>What's your Marital status?</p>
        </div>

        <div className='justify-content-center align-items-center'>
          {rows.map((row, rowIndex) => (
            <div className='row row-plan-only-text  text-center' key={rowIndex}>
              {row.map((text, index) => (
                <div
                  key={index}
                  className={`circle ${
                    selectedtext === text ? 'selected' : ''
                  }`}
                  onClick={() => handleItemClick(text)}
                >
                  {selectedtext === text ? (
                    <div className='text-center'>{text}</div>
                  ) : (
                    <div className='text'>{text}</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
