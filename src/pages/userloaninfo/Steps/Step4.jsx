// import { useContext } from 'react';
// import { StepperContext } from '../contexts/StepperContext';

// export default function Step2() {
//     const { userData, setUserData } = useContext(StepperContext);

//     const handleChange = (e)=>{
//         const { name, value} = e.target;
//         setUserData({...userData, [name]: value});
//     };

//     return (
//         <div className='modal'>

//             <div className='col-6 col-md-6 col-lg-6 log'>

//             <div className='log-input col-12 col-md-12 col-lg-12'>

//                <input
//             type="text"
//             name="username"
//             id="username"
//             onChange={handleChange}
//             value={userData["username"] || ""}
//             required placeholder='Username'
//             className='log-input col-8 col-md-8 col-lg-8'
//             />

//              <input
//             type="email"
//             name="email"
//             id="email"
//             onChange={handleChange}
//             value={userData["password"] || ""}
//             required placeholder='Email address'
//             className='log-input col-8 col-md-8 col-lg-8'/>

//              <input
//           type='password'
//           name="password"
//           id="password"
//           onChange={handleChange}
//           value={userData["password"] || ""}
//           required placeholder='Password'
//           className='log-input col-8 col-md-8 col-lg-8'/>

//     </div>

//           </div>
//         </div>
//       );
// }

import React, { useState } from 'react';
import './Steps.css';

export default function HouseInfo() {
  const texts = ['Tenant', 'living with parents', 'home owner'];

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
    State: 'Mr',
    Town_City: '',
    Street: '',
    House_name: '',
    House_number: '',
    Postcode: '',
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
        <h3>What is your address?</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='person col-12 col-md-12 col-lg-12'>
          <div className='col-12 col-md-12 col-lg-12'>
            <label>
              <div className='font-change-of-lable-tag'>State:</div>
              <div>
                <select
                  name='State'
                  value={formData.State}
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
              <div className='font-change-of-lable-tag'>Town/City:</div>
              <div>
                <input
                  type='text'
                  name='Town_City'
                  className='person-input'
                  value={formData.Town_City}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div className='font-change-of-lable-tag'>Street:</div>
              <div>
                <input
                  type='text'
                  name='Street'
                  className='person-input'
                  value={formData.Street}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div className='font-change-of-lable-tag'>House Name:</div>
              <div>
                <input
                  type='text'
                  name='House_name'
                  className='person-input'
                  value={formData.House_name}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div className='font-change-of-lable-tag'>House Number:</div>
              <div>
                <input
                  type='text'
                  name='House_number'
                  className='person-input'
                  value={formData.House_number}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div className='font-change-of-lable-tag'>Postcode:</div>
              <div>
                <input
                  type='text'
                  name='Postcode'
                  className='person-input'
                  value={formData.Postcode}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>
        </div>

        <div className='house_date col-12 col-md-12 col-lg-12'>
          <h6 className='font-change-of-lable-tag'>When did you move here?</h6>

          <div>
            <label>
              <div className='house-month'>Months:</div>
              <div>
                <select
                  name='State'
                  value={formData.Months}
                  onChange={handleInputChange}
                  className='house-month'
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

            <label>
              <div className='house-year'>year:</div>
              <div>
                <select
                  name='State'
                  value={formData.year}
                  onChange={handleInputChange}
                  className='house-year'
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

        <div className='personal-info text-center mt-5'>
          <h3>Thanks, Name.</h3>
          <p>What's your Residential status?</p>
        </div>

        <div className='justify-content-center align-items-center'>
          {rows.map((row, rowIndex) => (
            <div className='row row-plan-only-text text-center' key={rowIndex}>
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
