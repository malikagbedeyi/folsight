import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../../../../assets/scss/Dashboard/Compl.ai/DashFramework/createframework.scss'

const CreateFrameWork = ({ createFrameWK,SetcreateFrameWK }) => {

  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState('Control - ISO 27001');
  const [dropdown, setDropdown] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('Control - ISO 27001');
  const [dropdown2, setDropdown2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState('Map Risk');
  const [dropdown3, setDropdown3] = useState(false);
  const [proceed,setProceed] = useState(false)
  
  const handleDropdown = () => {
    setDropdown(!dropdown)
  }
  const handleDropdown2 = () => {
    setDropdown2(!dropdown2)
  }
  const handleDropdown3 = () => {
    setDropdown3(!dropdown3)
  }
  const handleOptionClick = (option) => {
    setSelectedOption(option);  // Update the selected option
    setDropdown(false);         // Close the dropdown
  };
  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);  // Update the selected option
    setDropdown2(false);         // Close the dropdown
  };
  const handleOptionClick3 = (option) => {
    setSelectedOption3(option);  
    setDropdown3(false);         
  };
  const handleProceed = () => {
    setProceed(!proceed)
  }
  const closeFrame = () => {
    SetcreateFrameWK(false)
  }
  return (
    <div className={createFrameWK ? 'createframework':"d-none"}> 
    <div className="createframework-container">
        <div className="createframework-content">
          <div onClick={closeFrame} className="delete-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5297 17.4707C18.8227 17.7637 18.8227 18.2388 18.5297 18.5318C18.3837 18.6778 18.1917 18.7517 17.9997 18.7517C17.8077 18.7517 17.6158 18.6788 17.4698 18.5318L11.9997 13.0617L6.52975 18.5318C6.38375 18.6778 6.19175 18.7517 5.99975 18.7517C5.80775 18.7517 5.61575 18.6788 5.46975 18.5318C5.17675 18.2388 5.17675 17.7637 5.46975 17.4707L10.9398 12.0008L5.46975 6.53079C5.17675 6.23779 5.17675 5.76275 5.46975 5.46975C5.76275 5.17675 6.23775 5.17675 6.53075 5.46975L12.0008 10.9398L17.4707 5.46975C17.7637 5.17675 18.2387 5.17675 18.5317 5.46975C18.8247 5.76275 18.8247 6.23779 18.5317 6.53079L13.0617 12.0008L18.5297 17.4707Z" fill="#E21D12"/></svg>
          </div>
            <div className="content">
              <h4>Create Framework</h4>
                <div className="top-content-wrapper">
                  <div className="leftWrapper">
                    <p>control</p>
                  </div>
                    <div className="rightWrapper">
                      <button><span>Add Item</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00223 5.71652V10.2879M5.71652 8.00223H10.2879M4.00223 2.85938H12.0022C12.6334 2.85938 13.1451 3.37105 13.1451 4.00223V12.0022C13.1451 12.6334 12.6334 13.1451 12.0022 13.1451H4.00223C3.37105 13.1451 2.85938 12.6334 2.85938 12.0022V4.00223C2.85938 3.37105 3.37105 2.85938 4.00223 2.85938Z" stroke="#373F41" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </button>
                      <a href="">Save</a>
                  </div>
                </div>
                <div className="form-content">
                     <p>  Enter the details of the new framework. </p>
                  <form action="">
                     <div className="top-form-content">
                    <p>Title</p>
                     <span><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.192 1.28L6.768 2.32L4.544 3.248L6.784 4.16L6.176 5.232L4.24 3.824L4.496 6.24H3.296L3.536 3.824L1.6 5.248L0.976 4.16L3.2 3.232L0.976 2.336L1.568 1.264L3.552 2.688L3.296 0.256H4.512L4.24 2.688L6.192 1.28Z" fill="#E21D12"/></svg></span>
                   </div>
                   <div className="top-inputField">
                    <input type="text" placeholder='Enter Text Name' />
                    <div className="text-areaField">
                       <div className="top-text-areaField">
                    <p>Description</p>
                     <span><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.192 1.28L6.768 2.32L4.544 3.248L6.784 4.16L6.176 5.232L4.24 3.824L4.496 6.24H3.296L3.536 3.824L1.6 5.248L0.976 4.16L3.2 3.232L0.976 2.336L1.568 1.264L3.552 2.688L3.296 0.256H4.512L4.24 2.688L6.192 1.28Z" fill="#E21D12"/></svg></span>
                   </div>
                   <textarea placeholder='Add more descriptions to this control requirement'
                     value={text}> </textarea>
                    </div>
                   </div>
                   <div className="selectOptionField">
                    <div className="selectoption-content">
                    <div className="top-selectoption-content">
                    <p>Owner</p>
                     <span><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.192 1.28L6.768 2.32L4.544 3.248L6.784 4.16L6.176 5.232L4.24 3.824L4.496 6.24H3.296L3.536 3.824L1.6 5.248L0.976 4.16L3.2 3.232L0.976 2.336L1.568 1.264L3.552 2.688L3.296 0.256H4.512L4.24 2.688L6.192 1.28Z" fill="#E21D12"/></svg></span>
                   </div>
                   <div className="selectoption-box">
                    <div className="left-box">
                      <p>Adeola Nasr</p>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.94544 8.00275L12.4741 4.47406C12.7348 4.21406 12.7348 3.79144 12.4741 3.53144C12.2134 3.27077 11.7921 3.27077 11.5314 3.53144L8.00277 7.06008L4.47411 3.53144C4.21344 3.27077 3.7921 3.27077 3.53144 3.53144C3.27077 3.79144 3.27077 4.21406 3.53144 4.47406L7.0601 8.00275L3.53144 11.5314C3.27077 11.7914 3.27077 12.2141 3.53144 12.4741C3.66144 12.6041 3.8321 12.6694 4.00277 12.6694C4.17344 12.6694 4.34411 12.6041 4.47411 12.4741L8.00277 8.94542L11.5314 12.4741C11.6614 12.6041 11.8321 12.6694 12.0028 12.6694C12.1734 12.6694 12.3441 12.6041 12.4741 12.4741C12.7348 12.2141 12.7348 11.7914 12.4741 11.5314L8.94544 8.00275Z" fill="#B9B7B7"/></svg>
                    </div>
                    <div className="right-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0033 8.57478V15.4319M8.57478 12.0033H15.4319M6.00335 4.28906H18.0033C18.9501 4.28906 19.7176 5.05657 19.7176 6.00335V18.0033C19.7176 18.9501 18.9501 19.7176 18.0033 19.7176H6.00335C5.05657 19.7176 4.28906 18.9501 4.28906 18.0033V6.00335C4.28906 5.05657 5.05657 4.28906 6.00335 4.28906Z" stroke="#B9B7B7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#333333"/></svg>
                    </div>
                   </div>
                    </div>
                    <div className="selectoption-content">
                    <div className="top-selectoption-content">
                    <p>BackUp Owner</p>
                     <span><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.192 1.28L6.768 2.32L4.544 3.248L6.784 4.16L6.176 5.232L4.24 3.824L4.496 6.24H3.296L3.536 3.824L1.6 5.248L0.976 4.16L3.2 3.232L0.976 2.336L1.568 1.264L3.552 2.688L3.296 0.256H4.512L4.24 2.688L6.192 1.28Z" fill="#E21D12"/></svg></span>
                   </div>
                   <div className="selectoption-box">
                    <div className="left-box">
                      <div className="leftbox-content">
                      <p>Adeola Nasr</p>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.94544 8.00275L12.4741 4.47406C12.7348 4.21406 12.7348 3.79144 12.4741 3.53144C12.2134 3.27077 11.7921 3.27077 11.5314 3.53144L8.00277 7.06008L4.47411 3.53144C4.21344 3.27077 3.7921 3.27077 3.53144 3.53144C3.27077 3.79144 3.27077 4.21406 3.53144 4.47406L7.0601 8.00275L3.53144 11.5314C3.27077 11.7914 3.27077 12.2141 3.53144 12.4741C3.66144 12.6041 3.8321 12.6694 4.00277 12.6694C4.17344 12.6694 4.34411 12.6041 4.47411 12.4741L8.00277 8.94542L11.5314 12.4741C11.6614 12.6041 11.8321 12.6694 12.0028 12.6694C12.1734 12.6694 12.3441 12.6041 12.4741 12.4741C12.7348 12.2141 12.7348 11.7914 12.4741 11.5314L8.94544 8.00275Z" fill="#B9B7B7"/></svg>
                    </div>
                    <div className="leftbox-content">
                      <p>Chime</p>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.94544 8.00275L12.4741 4.47406C12.7348 4.21406 12.7348 3.79144 12.4741 3.53144C12.2134 3.27077 11.7921 3.27077 11.5314 3.53144L8.00277 7.06008L4.47411 3.53144C4.21344 3.27077 3.7921 3.27077 3.53144 3.53144C3.27077 3.79144 3.27077 4.21406 3.53144 4.47406L7.0601 8.00275L3.53144 11.5314C3.27077 11.7914 3.27077 12.2141 3.53144 12.4741C3.66144 12.6041 3.8321 12.6694 4.00277 12.6694C4.17344 12.6694 4.34411 12.6041 4.47411 12.4741L8.00277 8.94542L11.5314 12.4741C11.6614 12.6041 11.8321 12.6694 12.0028 12.6694C12.1734 12.6694 12.3441 12.6041 12.4741 12.4741C12.7348 12.2141 12.7348 11.7914 12.4741 11.5314L8.94544 8.00275Z" fill="#B9B7B7"/></svg>
                    </div>
                    </div>
                    <div className="right-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0033 8.57478V15.4319M8.57478 12.0033H15.4319M6.00335 4.28906H18.0033C18.9501 4.28906 19.7176 5.05657 19.7176 6.00335V18.0033C19.7176 18.9501 18.9501 19.7176 18.0033 19.7176H6.00335C5.05657 19.7176 4.28906 18.9501 4.28906 18.0033V6.00335C4.28906 5.05657 5.05657 4.28906 6.00335 4.28906Z" stroke="#B9B7B7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#333333"/></svg>
                    </div>
                   </div>
                    </div>
                    <div className="selectoption-content">
                    <div  className="top-selectoption-content">
                    <p>Map Framework</p>
                     <span className='selectoption-icon'><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 5C0.5 2.51464 2.51464 0.5 5 0.5C7.48536 0.5 9.5 2.51464 9.5 5C9.5 7.48536 7.48536 9.5 5 9.5C2.51464 9.5 0.5 7.48536 0.5 5ZM5 1.875C4.51686 1.875 4.125 2.26686 4.125 2.75V5.03552C4.125 5.38382 4.32865 5.68469 4.62334 5.82549C4.26013 5.97604 4.00745 6.33505 4.00745 6.75C4.00745 7.30546 4.4612 7.75 5.01001 7.75C5.56215 7.75 6.01001 7.30214 6.01001 6.75C6.01001 6.33007 5.75112 5.97015 5.38367 5.8221C5.67457 5.67989 5.875 5.38105 5.875 5.03552V2.75C5.875 2.26686 5.48314 1.875 5 1.875Z" stroke="#AAA8A8"/></svg></span>
                   </div>
                   <div onClick={handleDropdown} className="selectoption-box">
                    <div className="left-box">
                      <p>{selectedOption}</p>
                    </div>
                    <div className="right-box">
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#333333"/></svg>
                    </div>
                   </div>
                   <div className={dropdown? "selectdropdown" : "d-none"}>
                    <div className="selectdropdown-content">
                     <div className="top-dropdown">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 12.75L10.421 10.4253M10.421 10.4253C11.1826 9.6647 11.6538 8.61334 11.6538 7.45192C11.6538 5.13127 9.77258 3.25 7.45192 3.25C5.13127 3.25 3.25 5.13127 3.25 7.45192C3.25 9.77258 5.13127 11.6538 7.45192 11.6538C8.61116 11.6538 9.66076 11.1844 10.421 10.4253Z" stroke="#5C5B69" stroke-width="1.75" stroke-linecap="round"/></svg>
                      <input type="text" placeholder='search'/>
                    </div>
                   <div className="middle-dropdown">
                    <p>Add New</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9994 8.57478V15.4319M8.57087 12.0033H15.428M5.99944 4.28906H17.9994C18.9462 4.28906 19.7137 5.05657 19.7137 6.00335V18.0033C19.7137 18.9501 18.9462 19.7176 17.9994 19.7176H5.99944C5.05267 19.7176 4.28516 18.9501 4.28516 18.0033V6.00335C4.28516 5.05657 5.05267 4.28906 5.99944 4.28906Z" stroke="#0152FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                   </div>
                   <div onClick={() => setDropdown(false)} className="bottom-dropdown">
                   <div className="bottom-dropdown-content">
                    <span>ISO 27001</span>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                      <div className="bottom-dropdown-content">
                    <span>NIST</span>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <span>PCI DSS</span>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <span>HIPAA / HITRUST</span>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <span>EU DORIA</span>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <span>SOX</span>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <span>COBIT</span>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <span>CSA CCM</span>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <p>SOC</p>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                                     <div className="bottom-dropdown-content">
                    <span>GDPR</span>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   </div>
                   </div>
                   </div>
                    </div>
                    <div className="selectoption-content">
                    <div className="top-selectoption-content">
                    <p>Map Control</p>
                     <span className='selectoption-icon'><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 5C0.5 2.51464 2.51464 0.5 5 0.5C7.48536 0.5 9.5 2.51464 9.5 5C9.5 7.48536 7.48536 9.5 5 9.5C2.51464 9.5 0.5 7.48536 0.5 5ZM5 1.875C4.51686 1.875 4.125 2.26686 4.125 2.75V5.03552C4.125 5.38382 4.32865 5.68469 4.62334 5.82549C4.26013 5.97604 4.00745 6.33505 4.00745 6.75C4.00745 7.30546 4.4612 7.75 5.01001 7.75C5.56215 7.75 6.01001 7.30214 6.01001 6.75C6.01001 6.33007 5.75112 5.97015 5.38367 5.8221C5.67457 5.67989 5.875 5.38105 5.875 5.03552V2.75C5.875 2.26686 5.48314 1.875 5 1.875Z" stroke="#AAA8A8"/></svg></span>
                   </div>
                   <div onClick={handleDropdown2} className="selectoption-box">
                    <div className="left-box">
                      <p>{selectedOption2}</p>
                    </div>
                    <div className="right-box">
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#333333"/></svg>
                    </div>
                   </div>
                   <div className={dropdown2 ? "selectdropdown" : "d-none"}>
                    <div className="selectdropdown-content">
                     <div className="top-dropdown">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 12.75L10.421 10.4253M10.421 10.4253C11.1826 9.6647 11.6538 8.61334 11.6538 7.45192C11.6538 5.13127 9.77258 3.25 7.45192 3.25C5.13127 3.25 3.25 5.13127 3.25 7.45192C3.25 9.77258 5.13127 11.6538 7.45192 11.6538C8.61116 11.6538 9.66076 11.1844 10.421 10.4253Z" stroke="#5C5B69" stroke-width="1.75" stroke-linecap="round"/></svg>
                      <input type="text" placeholder='search'/>
                    </div>
                   <div className="middle-dropdown">
                    <p>Add New</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9994 8.57478V15.4319M8.57087 12.0033H15.428M5.99944 4.28906H17.9994C18.9462 4.28906 19.7137 5.05657 19.7137 6.00335V18.0033C19.7137 18.9501 18.9462 19.7176 17.9994 19.7176H5.99944C5.05267 19.7176 4.28516 18.9501 4.28516 18.0033V6.00335C4.28516 5.05657 5.05267 4.28906 5.99944 4.28906Z" stroke="#0152FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                   </div>
                   <div onClick={() => setDropdown2(false)} className="bottom-dropdown">
                   <div className="bottom-dropdown-content">
                    <p>CONTROL 2798 - Encryption at Rest</p>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                      <div className="bottom-dropdown-content">
                    <p>CONTROL 2324</p>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <p>CONTROL 1094 - <span> - Mongo Database Backup</span></p>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <p>CONTROL 3234 <span> - User Identification and Authentic...</span></p>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   </div>
                   </div>
                   </div>
                    </div>
                    <div className="selectoption-content">
                    <div className="top-selectoption-content">
                    <p>{selectedOption3}</p>
                     <span className='selectoption-icon'><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 5C0.5 2.51464 2.51464 0.5 5 0.5C7.48536 0.5 9.5 2.51464 9.5 5C9.5 7.48536 7.48536 9.5 5 9.5C2.51464 9.5 0.5 7.48536 0.5 5ZM5 1.875C4.51686 1.875 4.125 2.26686 4.125 2.75V5.03552C4.125 5.38382 4.32865 5.68469 4.62334 5.82549C4.26013 5.97604 4.00745 6.33505 4.00745 6.75C4.00745 7.30546 4.4612 7.75 5.01001 7.75C5.56215 7.75 6.01001 7.30214 6.01001 6.75C6.01001 6.33007 5.75112 5.97015 5.38367 5.8221C5.67457 5.67989 5.875 5.38105 5.875 5.03552V2.75C5.875 2.26686 5.48314 1.875 5 1.875Z" stroke="#AAA8A8"/></svg></span>
                   </div>
                   <div onClick={handleDropdown3} className="selectoption-box">
                    <div className="left-box">
                      <p>Control - ISO 27001</p>
                    </div>
                    <div className="right-box">
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#333333"/></svg>
                    </div>
                   </div>
                   <div className={dropdown3? "selectdropdown" : "d-none"}>
                    <div className="selectdropdown-content">
                     <div className="top-dropdown">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 12.75L10.421 10.4253M10.421 10.4253C11.1826 9.6647 11.6538 8.61334 11.6538 7.45192C11.6538 5.13127 9.77258 3.25 7.45192 3.25C5.13127 3.25 3.25 5.13127 3.25 7.45192C3.25 9.77258 5.13127 11.6538 7.45192 11.6538C8.61116 11.6538 9.66076 11.1844 10.421 10.4253Z" stroke="#5C5B69" stroke-width="1.75" stroke-linecap="round"/></svg>
                      <input type="text" placeholder='search'/>
                    </div>
                   <div className="middle-dropdown">
                    <p>Add New</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9994 8.57478V15.4319M8.57087 12.0033H15.428M5.99944 4.28906H17.9994C18.9462 4.28906 19.7137 5.05657 19.7137 6.00335V18.0033C19.7137 18.9501 18.9462 19.7176 17.9994 19.7176H5.99944C5.05267 19.7176 4.28516 18.9501 4.28516 18.0033V6.00335C4.28516 5.05657 5.05267 4.28906 5.99944 4.28906Z" stroke="#0152FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                   </div>
                   <div onClick={() => setDropdown3(false)} className="bottom-dropdown">
                   <div className="bottom-dropdown-content">
                    <p>CONTROL 2798 - Encryption at Rest</p>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                      <div className="bottom-dropdown-content">
                    <p>CONTROL 2324 -  RISK-193 - Accidental disclosure of informa... </p>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <p> RISK-194 - Unprotected Sensitive Data</p>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <p>RISK-193 - Lack of Security Awareness</p>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                   </div>
                   <div className="bottom-dropdown-content">
                    <p>RISK-193 - Lack of Security Access</p>
                    <div className="bottom-dropdownIcon">
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.80655 1.14844L3.56845 6.38653L1.1875 4.00558" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                    </div>
                   </div>
                   </div>
                   </div>
                    </div>
                   </div>
                  </form>
                </div>
                <div onClick={handleProceed} className="button-content">
                <button >Proceed</button>
                <button style={{visibility:"hidden",marginTop:"3%"}}></button>
                </div>
                <div  className={proceed ? "proceed-container" : "d-none"}>
                  <div className="proceed-content">
                  <span>Compl.ai</span>
                    <div className="top-proceeed-wrapper">
                      <div className="left-wrapper-proceed">
                        <h3>ISO 27001 - ISMS</h3>
                        <p>Framework</p>
                      </div>
                      <div className="right-wrapper-proceed">
                       <span> 1/sept/2024</span>
                       <button>pending</button>
                        </div>
                    </div>
                    <div className="textarea-proceeed">
                      <textarea placeholder='Description'></textarea>
                    </div>
                    <div className="bottom-proceeed-wrapper">
                      <div className="bottom-proceeed-content">
                        <p>Owner</p>
                        <div className="rightbom-proceed">
                        <span>Adeola Nasr</span>
                      </div>
                      </div>
                      <div className="bottom-proceeed-content">
                        <p>Additional Owner</p>
                        <div className="rightbom-proceed">
                        <span>Adeola Nasr</span>
                        <span>Peter Alex</span>
                        <span>Fatimah Tukor</span>
                        </div>
                      </div>
                      <div className="bottom-proceeed-content">
                        <p>Compliance Contact</p>
                        <div className="rightbom-proceed">
                        <span>Adeola Nasr</span>
                        <span>Peter Alex</span>
                        <span>Fatimah Tukor</span>
                      </div>
                      </div>
                      <div className="bottom-proceeed-content">
                        <p>Mapped Framework</p>
                        <div className="rightbom-proceed">
                        <span>ISO 27001</span>
                      </div>
                      </div>
                      <div className="bottom-proceeed-content">
                        <p>Mapped Control</p>
                        <div className="rightbom-proceed">
                        <span>CONTROL 2798 - Encryption at Rest</span>
                      </div>
                      </div>
                      <div className="bottom-proceeed-content">
                        <p>Mapped Risk</p>
                        <div className="rightbom-proceed">
                        <span>Control - ISO 27001</span>
                      </div>
                      </div>
                    </div>
                    <div onClick={()=>setProceed(false)} className="proceed-bottom">
                      <button>Done</button>
                      <button className="button"> Edit</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CreateFrameWork
