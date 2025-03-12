import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../assets/scss/Dashboard/Compl.ai/Activ8/activ8pop.scss'
import { actions } from 'react-table';

const Activ8Pop = ({actv8Pop,setActv8Pop,handlePage}) => {

      const [proceed,setProceed] = useState(false)

      const handleProceed = () => {
        setProceed(!proceed)
      }
  return (
    <div className={actv8Pop ? 'activ8Pop': "d-none"}>
      <div className={proceed ? "d-none":"activ8Pop-container"}>
        <div className="activ8Pop-content">
        <div onClick={() => setActv8Pop(false)} className="delete-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5297 17.4707C18.8227 17.7637 18.8227 18.2388 18.5297 18.5318C18.3837 18.6778 18.1917 18.7517 17.9997 18.7517C17.8077 18.7517 17.6158 18.6788 17.4698 18.5318L11.9997 13.0617L6.52975 18.5318C6.38375 18.6778 6.19175 18.7517 5.99975 18.7517C5.80775 18.7517 5.61575 18.6788 5.46975 18.5318C5.17675 18.2388 5.17675 17.7637 5.46975 17.4707L10.9398 12.0008L5.46975 6.53079C5.17675 6.23779 5.17675 5.76275 5.46975 5.46975C5.76275 5.17675 6.23775 5.17675 6.53075 5.46975L12.0008 10.9398L17.4707 5.46975C17.7637 5.17675 18.2387 5.17675 18.5317 5.46975C18.8247 5.76275 18.8247 6.23779 18.5317 6.53079L13.0617 12.0008L18.5297 17.4707Z" fill="#E21D12"/></svg>
          </div>
          <div className="top-title">
            <h4>Soc 2</h4>
            <div className="bottom-flex">
                <p>FrameWork</p>
                <button><span>Next</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00028 5.71261V10.284M5.71456 7.99833H10.286M4.00028 2.85547H12.0003C12.6315 2.85547 13.1431 3.36714 13.1431 3.99833V11.9983C13.1431 12.6295 12.6315 13.1412 12.0003 13.1412H4.00028C3.3691 13.1412 2.85742 12.6295 2.85742 11.9983V3.99833C2.85742 3.36714 3.3691 2.85547 4.00028 2.85547Z" stroke="#373F41" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
            </div>
            <div className="select-title">
                <p>Enter the details below for this to be activated.</p>
            </div>
            <div className="selectOptionField">
                    <div className="selectoption-content">
                    <div className="top-selectoption-content">
                    <p>Owner</p>
                     <span><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.192 1.28L6.768 2.32L4.544 3.248L6.784 4.16L6.176 5.232L4.24 3.824L4.496 6.24H3.296L3.536 3.824L1.6 5.248L0.976 4.16L3.2 3.232L0.976 2.336L1.568 1.264L3.552 2.688L3.296 0.256H4.512L4.24 2.688L6.192 1.28Z" fill="#E21D12"/></svg></span>
                   </div>
                   <div className="selectoption-box">
                    <div className="left-box">
                    <div className="leftbox-content">
                      <p>Adeola Nasr</p>
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
                    </div>
                    <div onClick={handleProceed} className="button-content">
                <button >Proceed</button>
               // <button style={{visibility:"hidden",marginTop:"3%"}}></button>
                </div>
          </div>
        </div>
        <div  className={proceed ? "proceed-container" : "d-none"}>
            <div className="proceed-content">
                <div className="proceed-text">
                    <h2>Activate?</h2>
                    <p>Are you sure you have completed the framework template?</p>
                </div>
                <div className="proceed-button">
                    <button onClick={() => setActv8Pop(false)}>Cancel</button>
                    <button onClick={() => handlePage(9)} className='button'>Activate</button>
                </div>
            </div>
            </div>
      </div>
  )
}

export default Activ8Pop
