import React, { useEffect, useState } from 'react'
import '../assets/scss/demo.scss'
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Request = () => {
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
    // <div className='sign-up'>
    //    <div className="row sign-up-container">
    //     <div className="col-lg-6 sign-up-Parent">
    //         <div className="sign-upChild-cover-bg">
    //         </div>
    //       </div>
    //     <div className="col-lg-6 sign-up-Parent">
    //         <div className="sign-upChild">
    //         <div className="commentContainer">
    //          <form action=""  onSubmit={handleSubmit}>
    //             <div className="formwrapper">
    //             <div className="leftForm">
    //             <label htmlFor="">Your name*</label>
    //             <input type="name" required />
    //             </div>
    //             <div className="rightForm">
    //             <label htmlFor="">Your email*</label>
    //             <input type="email" required />
    //              </div>
    //              <div className="leftForm">
    //              <label htmlFor="">Phone No*</label>
    //              <input type="name" required />
    //              </div>
    //              <div className="rightForm">
    //              <label htmlFor="">Business Email*</label>
    //              <input type="email" required />
    //              </div>
    //              </div>
    //              <ReCAPTCHA
    //                   sitekey="6LfP1ygqAAAAAEJS_LVg4H2FzOtQ79ReEJ_uesDS"
    //                   onChange={handleCaptchaChange}
    //                 /><br />
    //              <label htmlFor="">Your Comment*</label>
    //              <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
    //              <button  onClick={() => navigate('/')}>Post Comment</button>
    //         </form>
    //     </div>
    //           {/* <form action="">
    //             <label htmlFor="">FirstName:</label>
    //             <input type="text" name='firstName'
    //              placeholder='Input Your First Name'
    //              value={firstName}
    //              onChange={e => setFirstName(e.target.value)}
    //              />
    //               <label htmlFor="">LastName:</label>
    //             <input type="text" name='lastName'
    //              placeholder='Input Your Last Name'
    //              value={lastName}
    //              onChange={e => setLastName(e.target.value)}
    //              />
    //               <label htmlFor="">Email Address:</label>
    //             <input type="email" name='email'
    //              placeholder='Input Your Email Address'
    //              value={email}
    //              onChange={e => setEmail(e.target.value)}
    //              />
    //               <label htmlFor="">Phone No:</label>
    //             <input type="text" name='phone'
    //              placeholder='Input Your Phone No'
    //              value={phone}
    //              onChange={e => setPhone(e.target.value)}
    //              />
    //               <label htmlFor="">Password</label>
    //             <input type="password" name='password'
    //              placeholder='Input Your Password'
    //              value={password}
    //              onChange={e => setPassword(e.target.value)}
    //              />
    //               <label htmlFor="">Confirm Password</label>
    //             <input type="password" name='confirm'
    //              placeholder='Confirm Your Password'
    //              value={confirm}
    //              onChange={e => setConfirm(e.target.value)}
    //              />
    //            <button onClick={() => navigate('/')}> <span>Sign In</span> <i className="fa-solid fa-right-to-bracket"></i></button>
    //               <p> <span>Already have an account</span>? <a href="/login">LogIn</a> </p>
    //           </form> */}
    //         </div>
    //       </div>
    //       </div>
    //   </div>
    <div className='demo'>
    <div className='signBody'>
<div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
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
                        </div>
                        <div className="register-wrapper">
                             <div className="leftwrapper">
                        <label for="name">Company Name  <span>**</span></label>
                        <input id="name" type="text" placeholder="Company Name" />
                        </div>
                         <div className="rightwrapper">
                        <label for="name">Job title <span>**</span></label>
                        <input id="name" type="text" placeholder="Job title" />
                        </div>
                        </div>
                        {/* <label for="name">Company Headcount  <span>**</span></label>
                        <input id="name" type="number" placeholder="Headcount" /> */}
                        <div className="register-wrapper">
                          <div className="leftwrapper">
                          <label htmlFor="manual-input">Company Headcount  <span>**</span></label>
                          <select id="headcount-select" value={isManualInput ? 'other' : headcount} onChange={handleSelectChange}>
        <option value="">Select headcount</option>
        <option value="1-10">1-10</option>
        <option value="11-50">11-50</option>
        <option value="51-200">51-200</option>
        <option value="201-500">201-500</option>
        <option value="501+">501+</option>
        <option value="other">Other</option>
                  </select>
                    </div>
         <div className="rightwrapper">
         {isManualInput && (
        <div>
         <label htmlFor="manual-input">Input Headcount <span>**</span></label>
          <input
            type="number"
            id="manual-input"
            value={headcount}
            onChange={handleInputChange}
            placeholder="Enter headcount"
            min="1"
          />
        </div>
         )}
             </div>
             </div>
             <label for="email">Work Email <span>**</span></label>
                   <input id="email" type="email" placeholder="******" />
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
                          {/* <div className={icontoggle ? "option":"colseOption"}>
                       {countries.map((country) => (
                         <p  key={country.code} value={country.code} 
                         onClick={() => handleCountrySelect(country)}>
                           {country.name}
                         </p>
                       ))}
                       </div> */}
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
                        <textarea name="" id="" placeholder='How do you hear about us'></textarea>
                           </div>
                        <button className="login-btn">Request a Demo</button>
                        <div className="signUp text-center mt-30">
                            <span>New User?</span>
                            <a href='#/register' className="login-text-btn">Register Now</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Request
