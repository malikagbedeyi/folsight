import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../../../../assets/scss/Dashboard/Compl.ai/Nexus/gapAssement.scss'
import img1 from '../../../../assets/Images/Dashboard/profile-img.png'
import img2 from '../../../../assets/Images/Dashboard/logo-upload.png'

const GapAssement = ({ page, handlePage,setSelectedItem}) => {
const navigate = useNavigate();

  return (
    <div className={page === 10 ? "nexus" : "nexus"}>
<div className="navMenuContainer row"> 
      <div className="navMenuParent col-lg-12">
        <div className="navMenuChild">
          <div className="topWrapper">
            <div className="leftTopWrapper">
              <h1>Compl.ai</h1> 
              <div className="leftwrapper-contet">
              <p>Dashboard </p>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></span> 
               <a> Framework</a>
              </div>
            </div>
            <div className="rightTopWrapper">
              <div className="menuicon">
              <div className="notification">
              <svg  width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.9997 17V17.75C12.9997 18.5456 12.6837 19.3087 12.1211 19.8713C11.5585 20.4339 10.7954 20.75 9.99974 20.75C9.20409 20.75 8.44103 20.4339 7.87842 19.8713C7.31581 19.3087 6.99974 18.5456 6.99974 17.75V17M18.0472 15.4733C16.8435 14 15.9936 13.25 15.9936 9.18828C15.9936 5.46875 14.0943 4.14359 12.531 3.5C12.3233 3.41469 12.1279 3.21875 12.0646 3.00547C11.7904 2.07219 11.0216 1.25 9.99974 1.25C8.97787 1.25 8.20865 2.07266 7.93724 3.00641C7.87396 3.22203 7.67849 3.41469 7.47084 3.5C5.90568 4.14453 4.00818 5.465 4.00818 9.18828C4.00584 13.25 3.15599 14 1.95224 15.4733C1.45349 16.0836 1.89037 17 2.76271 17H17.2415C18.1091 17 18.5432 16.0808 18.0472 15.4733Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
              <div className="notificationtext">2</div>
              </div>
            </div>
            <div className="menuProfile">
              <div className="profileImg">
                <img src={img1} alt="" />
              </div>
              <div className="image-upload">
                <img src={img2} alt="" />
              </div>
            </div>
            </div>
          </div>
          <div className="buttomWrapper">
            <div className="buttomWrapper-content">
                 <div className="rightButtom">
              <a>Create Project</a>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.9987 2.33594C7.5587 2.33594 2.33203 7.5626 2.33203 14.0026C2.33203 20.4426 7.5587 25.6693 13.9987 25.6693C20.4387 25.6693 25.6654 20.4426 25.6654 14.0026C25.6654 7.5626 20.4387 2.33594 13.9987 2.33594ZM18.082 14.8776H14.8737V18.0859C14.8737 18.5643 14.477 18.9609 13.9987 18.9609C13.5204 18.9609 13.1237 18.5643 13.1237 18.0859V14.8776H9.91536C9.43703 14.8776 9.04036 14.4809 9.04036 14.0026C9.04036 13.5243 9.43703 13.1276 9.91536 13.1276H13.1237V9.91927C13.1237 9.44094 13.5204 9.04427 13.9987 9.04427C14.477 9.04427 14.8737 9.44094 14.8737 9.91927V13.1276H18.082C18.5604 13.1276 18.957 13.5243 18.957 14.0026C18.957 14.4809 18.5604 14.8776 18.082 14.8776Z" fill="#0152FF"/> </svg>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}


export default GapAssement
