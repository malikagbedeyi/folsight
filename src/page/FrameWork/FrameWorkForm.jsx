import React, { useEffect, useState } from 'react'
import '../../assets/scss/FrameWork/framework-form.scss'
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const FrameWorkForm = () => {
  const navigate =  useNavigate()
  const [captchaValue, setCaptchaValue] = useState(null);
  const [headcount, setHeadcount] = useState('');
  const [isManualInput, setIsManualInput] = useState(false);
 const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
const [icontoggle , setIconToggle] = useState(false)
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countryList = data.map(country => ({
          name: country.name.common,
          code: country.cca2, // Country code
        }));

        // Sort countries alphabetically by name
        countryList.sort((a, b) => a.name.localeCompare(b.name));

        setCountries(countryList);
      });
  }, []);
  const handleIcons = () => {
    setIconToggle(!icontoggle);
  }
  const handleCountrySelect = (country) => {
    setSelectedCountry(country.name); // Update the input field with the selected country's name
    setIconToggle(false); // Close the dropdown after selection
  };
  const handlePhoneNo = (input) => {
    setPhoneNumber(input);
    setIsValid(validatePhoneNumber(input));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/; // Simple pattern for 10-digit phone numbers
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === 'other') {
      setIsManualInput(true);
      setHeadcount('');
    } else {
      setIsManualInput(false);
      setHeadcount(value);
    }
  };

  const handleInputChange = (e) => {
    setHeadcount(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setCaptchaValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValue) {
      // Proceed with form submission
      console.log('Form submitted successfully');
      // Implement form submission logic here (e.g., POST request to your backend)
    } else {
      console.log('Please complete the reCAPTCHA');
    }
  };
  return (
    <div className='frameForm'>
<div class="container">
        <div class="row">
            <div class="col-lg-12 ">
                <div class="basic-sign-in">
                    {/* <div className="basicLogin-top"> */}
                    <h3 class="mb-20">Request A Demo</h3>
                    <div class="mb-30"></div>
                    {/* </div> */}
                    <form action="#">
                        <div className="input-action">
                          <div className="register-wrapper">
                             <div className="leftwrapper">
                        <label for="name">First Name  <span>**</span></label>
                        <input id="name" type="text" placeholder="Your Name" />
                        </div>
                         <div className="rightwrapper">
                        <label for="name">Last Name  <span>**</span></label>
                        <input id="name" type="text" placeholder="Your Name" />
                        </div>
                        <div className="leftwrapper">
                        <label for="name">Company Name  <span>**</span></label>
                        <input id="name" type="text" placeholder="Company Name" />
                        </div>
                        </div>
                        <div className="register-wrapper">
                             <div className="leftwrapper">
                             <label htmlFor="phone">Phone Number <span>**</span></label>
                   <PhoneInput 
                     country={'us'} 
                     value={phoneNumber}
                     onChange={handlePhoneNo}
                     inputProps={{
                       name: 'phone',
                       required: true,
                       autoFocus: true,
                     }}
                   />
                 {!isValid && <p style={{ color: 'red' }}>Please enter a valid 10-digit phone number.</p>}
                        </div>
                         <div className="rightwrapper">
                        <label for="name">Job title <span>**</span></label>
                        <input id="name" type="text" placeholder="Job title" />
                        </div>
                        <div className="leftwrapper">
                        <label for="name">Work Email   <span>**</span></label>
                        <input id="name" type="text" placeholder="Business Email" />
                        </div>
                         </div>
                         <label for="name">Company Location <span>**</span></label>
                        <div className={icontoggle ? "selectOption":"nonselectOption"}>
                        <div className="inputContainer">
                        <input className="dropdown"
                       value={selectedCountry}
                       onChange={(e) => setSelectedCountry(e.target.value)}
                       placeholder="Select a country"
                       readOnly
                     />
                       <i onClick={handleIcons}  className="fa-solid fa-chevron-down"></i>
                          </div>
                       {icontoggle && (
                        <div className={icontoggle ? "option":"colseOption"}>
                         {countries.map((country) => (
                           <p  key={country.code} value={country.code} 
                           onClick={() => handleCountrySelect(country)}>
                             {country.name}
                           </p>
                         ))}
                           </div>
                         )}
                           </div>
                           </div>
                        <button className="login-btn">Request a Demo</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
export default FrameWorkForm
