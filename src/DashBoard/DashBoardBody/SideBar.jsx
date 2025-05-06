import React, { useState } from 'react'
import '../../assets/scss/Dashboard/sidebar.scss'
import Img1 from '../../assets/Images/DashLogo2.png'
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import ScatterPlotOutlinedIcon from '@mui/icons-material/ScatterPlotOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
const Sidebar = ({ page, handlePage }) => {
  const [toggle, setToggle] = useState(false);
  const [listOpen,setListOpen] = useState(false);
  const [listOpen2,setListOpen2] = useState(false);
  const [listOpen3,setListOpen3] = useState(false);
  const [listOpen4,setListOpen4] = useState(false);
  const [listOpen5,setListOpen5] = useState(false);
  const [listOpen6,setListOpen6] = useState(false);
  const [listOpen7,setListOpen7] = useState(false);
  const [listOpen8,setListOpen8] = useState(false);
  const [listOpen9,setListOpen9] = useState(false);
  const [listOpen10,setListOpen10] = useState(false);
  const [listOpen11,setListOpen11] = useState(false);
  const [listOpen12,setListOpen12] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)
  };
  const handleAmin = () => {
    if (!toggle){
      setToggle(true);
    }
    setListOpen(!listOpen); 
    setListOpen2(false);
    setListOpen3(false);
    setListOpen4(false);
    setListOpen5(false);
    setListOpen6(false);
    setListOpen7(false);
    setListOpen8(false);
  };
  const handleCompops = () => {
    if (!toggle){
      setToggle(true);
    }
    setListOpen(false); 
    setListOpen2(!listOpen2); 
    setListOpen3(false);
    setListOpen4(false);
    setListOpen5(false);
    setListOpen6(false);
    setListOpen7(false);
    setListOpen8(false);
  };
  const handlePricing = () => {
    if (!toggle){
      setToggle(true);
    }
    setListOpen(false); 
    setListOpen2(false);
    setListOpen3(!listOpen3);
    setListOpen4(false);
    setListOpen5(false);
    setListOpen6(false);
    setListOpen7(false);
    setListOpen8(false);
  };
  const handleAuditRoom = () => {
    if (!toggle){
      setToggle(true);
    }
    setListOpen(false); 
    setListOpen2(false);
    setListOpen3(false);
    setListOpen4(!listOpen4);
    setListOpen5(false);
    setListOpen6(false);
    setListOpen7(false);
    setListOpen8(false);
  };
  const handleRiskCore = () => {
    if (!toggle){
      setToggle(true);
    }
    setListOpen(); 
    setListOpen2(false);
    setListOpen3(false);
    setListOpen4(false);
    setListOpen5(!listOpen5);
    setListOpen6(false);
    setListOpen7(false);
    setListOpen8(false);
  };
  const handleComplai = () => {
    if (!toggle){
      setToggle(true);
    }
    setListOpen(false); 
    setListOpen2(false);
    setListOpen3(false);
    setListOpen4(false);
    setListOpen5(false);
    setListOpen6(!listOpen6);
    setListOpen7(false);
    setListOpen8(false);
  };
  const handleReport = () => {
    if (!toggle){
      setToggle(true);
    }
    setListOpen(false); 
    setListOpen2(false);
    setListOpen3(false);
    setListOpen4(false);
    setListOpen5(false);
    setListOpen6(false);
    setListOpen7(!listOpen7);
    setListOpen8(false);
  };
  const handleGovernance = () => {
    if (!toggle){
      setToggle(true);
    }
    setListOpen(false); 
    setListOpen2(false);
    setListOpen3(false);
    setListOpen4(false);
    setListOpen5(false);
    setListOpen6(false);
    setListOpen7(false);
    setListOpen8(!listOpen8);
  };
  const handleNavigator = () => {
    if (!toggle){
      setToggle(true);
    }
    setListOpen(false); 
    setListOpen2(false);
    setListOpen3(false);
    setListOpen4(false);
    setListOpen5(false);
    setListOpen6(false);
    setListOpen7(false);
    setListOpen8(false);
    setListOpen12(!listOpen12);
  };
  return (
    <div className='sidebar'>
      <div className={`${toggle ? "sidebarContainer" : "closeSidebar"}`}>
      <div className="toggle" onClick={handleToggle}>
        <div className={toggle ? ' close' : 'icons open'}>
          <KeyboardArrowLeftOutlinedIcon className="svg" /> 
        </div>
        <div className={toggle ? ' icons open' : ' close'}>
           <KeyboardArrowRightOutlinedIcon className="svg" /> 
            </div>
      </div>
        <div className="sidebarParent">
          <div className="sidebarLogo">
            <div className="folsightLogoImg">
            <img src={Img1} alt="" />
            </div>
            <div className="folsightLogoTittle">
            <p>Folsight</p>
            </div>
          </div>
          <div className='sidebarList'>
            <div className="listItem">
            <div className='ulContainer'>
            <div className="ul">
          <div className={listOpen ? "active li" : " li"} onClick={handleAmin}>
          <div className="react-icon">
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.625 21.75H6.375C3.715 21.75 2.25 20.285 2.25 17.625V6.375C2.25 3.715 3.715 2.25 6.375 2.25H17.625C20.285 2.25 21.75 3.715 21.75 6.375V17.625C21.75 20.285 20.285 21.75 17.625 21.75ZM6.375 3.75C4.535 3.75 3.75 4.535 3.75 6.375V17.625C3.75 19.465 4.535 20.25 6.375 20.25H17.625C19.465 20.25 20.25 19.465 20.25 17.625V6.375C20.25 4.535 19.465 3.75 17.625 3.75H6.375ZM16.75 9C16.75 8.586 16.414 8.25 16 8.25H11C10.586 8.25 10.25 8.586 10.25 9C10.25 9.414 10.586 9.75 11 9.75H16C16.414 9.75 16.75 9.414 16.75 9ZM16.75 12C16.75 11.586 16.414 11.25 16 11.25H8C7.586 11.25 7.25 11.586 7.25 12C7.25 12.414 7.586 12.75 8 12.75H16C16.414 12.75 16.75 12.414 16.75 12ZM13.75 15C13.75 14.586 13.414 14.25 13 14.25H8C7.586 14.25 7.25 14.586 7.25 15C7.25 15.414 7.586 15.75 8 15.75H13C13.414 15.75 13.75 15.414 13.75 15Z"/></svg>
           </div>
           <div className=""> <a >Asset Inventory</a> </div>
            <div className="listIcon" onClick={() => setListOpen(!listOpen)}>
             <svg className={listOpen? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
           </div>
                 {listOpen && (
                  <div className={toggle? "itemDropdown" : "closeDropdown"}>
                    <ul>
                      <li className={page === 17 ? "activePage" : "nonactivePage"}  onClick={() => handlePage(17)}>
                        <a>Asset Inventory</a>
                        <div className="activeCircle"></div>
                      </li>
                      <li className={page === 3 ? "activePage" : "nonactivePage"}  onClick={() => handlePage(3)}>
                        <a>Admin Users</a>
                        <div className="activeCircle"></div>
                      </li>
                      <li>
                        <a href="">Add Users</a>
                      </li>
                      <li>
                        <a href="">Modules</a>
                      </li>
                    </ul>
                  </div>
                )}
                </div>
                <div className="ul">
          <div className={listOpen6 ? "active li" : " li"} onClick={handleComplai}>      
          <div className="react-icon">
              <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.75 8C14.75 8.414 14.414 8.75 14 8.75H10.5C10.086 8.75 9.75 8.414 9.75 8C9.75 7.586 10.086 7.25 10.5 7.25H14C14.414 7.25 14.75 7.586 14.75 8ZM14 11.25H10.5C10.086 11.25 9.75 11.586 9.75 12C9.75 12.414 10.086 12.75 10.5 12.75H14C14.414 12.75 14.75 12.414 14.75 12C14.75 11.586 14.414 11.25 14 11.25ZM14 15.25H10.5C10.086 15.25 9.75 15.586 9.75 16C9.75 16.414 10.086 16.75 10.5 16.75H14C14.414 16.75 14.75 16.414 14.75 16C14.75 15.586 14.414 15.25 14 15.25ZM6.96997 6.96997L6.49902 7.44098C6.20502 7.17698 5.75197 7.18797 5.46997 7.46997C5.17697 7.76297 5.17697 8.23801 5.46997 8.53101L5.96997 9.03101C6.11597 9.17701 6.308 9.25098 6.5 9.25098C6.692 9.25098 6.88403 9.17801 7.03003 9.03101L8.03003 8.03101C8.32303 7.73801 8.32303 7.26297 8.03003 6.96997C7.73703 6.67697 7.26297 6.67697 6.96997 6.96997ZM6.96997 10.97L6.49902 11.441C6.20502 11.177 5.75197 11.188 5.46997 11.47C5.17697 11.763 5.17697 12.238 5.46997 12.531L5.96997 13.031C6.11597 13.177 6.308 13.251 6.5 13.251C6.692 13.251 6.88403 13.178 7.03003 13.031L8.03003 12.031C8.32303 11.738 8.32303 11.263 8.03003 10.97C7.73703 10.677 7.26297 10.677 6.96997 10.97ZM6.96997 14.97L6.49902 15.441C6.20502 15.177 5.75197 15.188 5.46997 15.47C5.17697 15.763 5.17697 16.238 5.46997 16.531L5.96997 17.031C6.11597 17.177 6.308 17.251 6.5 17.251C6.692 17.251 6.88403 17.178 7.03003 17.031L8.03003 16.031C8.32303 15.738 8.32303 15.263 8.03003 14.97C7.73703 14.677 7.26297 14.677 6.96997 14.97ZM21.75 11.5V19C21.75 20.517 20.517 21.75 19 21.75H6C3.582 21.75 2.25 20.418 2.25 18V6C2.25 3.582 3.582 2.25 6 2.25H14C16.418 2.25 17.75 3.582 17.75 6V9.25H19.5C20.74 9.25 21.75 10.259 21.75 11.5ZM16.551 20.25C16.359 19.875 16.25 19.45 16.25 19V6C16.25 4.423 15.577 3.75 14 3.75H6C4.423 3.75 3.75 4.423 3.75 6V18C3.75 19.577 4.423 20.25 6 20.25H16.551ZM20.25 11.5C20.25 11.086 19.913 10.75 19.5 10.75H17.75V19C17.75 19.689 18.311 20.25 19 20.25C19.689 20.25 20.25 19.689 20.25 19V11.5Z"/></svg>
          </div>
           <div className="">
           <a >Compl.ai</a>
           </div>
            <div className="listIcon" onClick={() => setListOpen6(!listOpen6)}>
             <svg className={listOpen6? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen6? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
            {listOpen6 &&(
             <div className={listOpen6? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''> Controls</a></li>
                    <li className={page === 16 ? "activePage" : "nonactivePage"}  onClick={() => handlePage(16)}> <a> Requirements</a>
                      <div className="activeCircle"></div>
                      </li>
                    <li className={page === 1? "activePage" : "nonactivePage"}  onClick={() => handlePage(8)}>  <div className="activeCircle"></div><a> Framework</a></li>
                    <li className={page === 10? "activePage" : "nonactivePage"}  onClick={() => handlePage(10)}>  <div className="activeCircle"></div><a> Nexus</a></li>
                    <li className={page === 11 ? "activePage" : "nonactivePage"}  onClick={() => handlePage(11)}><div className="activeCircle"></div><a>Activ8</a></li>
                </ul>
                </div>
            )}
            </div>
             <div className="ul">
          <div className={listOpen5 ? "active li" : " li"}  onClick={handleRiskCore}>
            <div className="react-icon">
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1479 4.26511C16.2209 3.28011 14.515 2.4203 12.356 1.3303C12.145 1.2253 11.8651 1.23821 11.6541 1.34421C9.46405 2.43021 7.73303 3.28911 2.85303 4.26511C2.50203 4.33511 2.25 4.64322 2.25 5.00022V10.8891C2.25 19.1231 10.1739 22.1821 11.7629 22.7121C11.8399 22.7381 11.92 22.7512 12 22.7512C12.08 22.7512 12.1601 22.7381 12.2371 22.7121C13.8261 22.1821 21.75 19.1231 21.75 10.8891V5.00022C21.751 4.64322 21.4989 4.33411 21.1479 4.26511ZM20.251 10.8891C20.251 17.7541 13.833 20.5493 12.001 21.2063C10.169 20.5493 3.75098 17.7531 3.75098 10.8891V5.61326C8.13598 4.69726 9.93887 3.86633 12.0159 2.83933C13.9689 3.82033 15.828 4.68726 20.251 5.61326V10.8891ZM7.427 12.8613C7.548 13.1323 7.81704 13.3061 8.11304 13.3061H10.1399V17.0002C10.1399 17.3112 10.3311 17.5892 10.6211 17.7002C10.7081 17.7342 10.7999 17.7502 10.8899 17.7502C11.0979 17.7502 11.302 17.6632 11.448 17.5022L16.448 11.9463C16.646 11.7263 16.6959 11.4091 16.5759 11.1391C16.4549 10.8681 16.1859 10.6943 15.8899 10.6943H13.863V7.00022C13.863 6.68922 13.6721 6.41127 13.3821 6.30027C13.0921 6.18827 12.7639 6.26727 12.5559 6.49827L7.55591 12.0542C7.35591 12.2742 7.307 12.5903 7.427 12.8613ZM12.3621 8.9553V11.4453C12.3621 11.8593 12.6981 12.1953 13.1121 12.1953H14.2061L11.6399 15.0461V12.5561C11.6399 12.1421 11.3039 11.8061 10.8899 11.8061H9.7959L12.3621 8.9553Z" /></svg>
           </div>
            <a >Risk Core</a>
            <div className="listIcon" onClick={() => setListOpen5(!listOpen5)}>
             <svg className={listOpen5? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen5? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
           {listOpen5 && (
           <div className={listOpen5? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href=''> Dashboard</a></li>
                    <li><a href=''>Enterprise Risk</a></li>
                    <li><a href=''>Technology Risk</a></li>
                    <li><a href="">RCSA</a></li>
                    <li><a href="">Risk Advisories</a></li>
                    <li><a href="">Environment</a> </li>
                </ul>
                </div>
           )}
           </div>
            <div className="ul">
          <div className={listOpen2 ? "active li" : " li"}  onClick={handleCompops}>
            <div className="react-icon">
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.625 2.25H6.375C3.715 2.25 2.25 3.715 2.25 6.375V17.625C2.25 20.285 3.715 21.75 6.375 21.75H17.625C20.285 21.75 21.75 20.285 21.75 17.625V6.375C21.75 3.715 20.285 2.25 17.625 2.25ZM20.25 17.625C20.25 19.465 19.465 20.25 17.625 20.25H6.375C4.535 20.25 3.75 19.465 3.75 17.625V6.375C3.75 4.535 4.535 3.75 6.375 3.75H17.625C19.465 3.75 20.25 4.535 20.25 6.375V17.625ZM12.199 14.803C12.492 15.096 12.492 15.571 12.199 15.864L10.532 17.531C10.463 17.6 10.3801 17.6551 10.2891 17.6931C10.1981 17.7311 10.1 17.751 10.002 17.751C9.90395 17.751 9.80709 17.7311 9.71509 17.6931C9.62309 17.6551 9.54092 17.6 9.47192 17.531L7.80493 15.864C7.51193 15.572 7.51193 15.096 7.80493 14.803C8.09793 14.51 8.57297 14.51 8.86597 14.803L9.25293 15.189V9C9.25293 8.586 9.58893 8.25 10.0029 8.25C10.4169 8.25 10.7529 8.586 10.7529 9V15.1899L11.1399 14.804C11.4329 14.51 11.907 14.511 12.199 14.803ZM16.1951 8.13599C16.4881 8.42799 16.4881 8.90402 16.1951 9.19702C16.0491 9.34302 15.857 9.41699 15.665 9.41699C15.473 9.41699 15.281 9.34402 15.135 9.19702L14.748 8.81104V15.001C14.748 15.415 14.412 15.751 13.998 15.751C13.584 15.751 13.248 15.415 13.248 15.001V8.81104L12.8611 9.19702C12.5671 9.49002 12.092 9.48902 11.8 9.19702C11.507 8.90402 11.507 8.42899 11.8 8.13599L13.467 6.46899C13.536 6.39999 13.6189 6.34488 13.7109 6.30688C13.8939 6.23088 14.1009 6.23088 14.2839 6.30688C14.3759 6.34488 14.4591 6.39999 14.5281 6.46899L16.1951 8.13599Z" /></svg>
           </div>
            <a >ComPops</a>
            <div className="listIcon" onClick={() => setListOpen2(!listOpen2)}>
             <svg className={listOpen5? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen5? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
           {listOpen2 && (
           <div className={listOpen5? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href=''>Control Operations</a></li>
                    <li><a href=''>Dashboard</a></li>
                    <li><a href=''>Reporting</a></li>
                </ul>
                </div>
           )}
           </div>
          <div className="ul">
          <div className={listOpen4 ? "active li" : " li"} onClick={handleAuditRoom}>
            <div className="react-icon">
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2.25H7C4.582 2.25 3.25 3.582 3.25 6V18C3.25 20.418 4.582 21.75 7 21.75H17C19.418 21.75 20.75 20.418 20.75 18V6C20.75 3.582 19.418 2.25 17 2.25ZM19.25 18C19.25 19.577 18.577 20.25 17 20.25H7C5.423 20.25 4.75 19.577 4.75 18V6C4.75 4.423 5.423 3.75 7 3.75H17C18.577 3.75 19.25 4.423 19.25 6V18ZM17.25 8C17.25 8.414 16.914 8.75 16.5 8.75H12.5C12.086 8.75 11.75 8.414 11.75 8C11.75 7.586 12.086 7.25 12.5 7.25H16.5C16.914 7.25 17.25 7.586 17.25 8ZM17.25 12C17.25 12.414 16.914 12.75 16.5 12.75H12.5C12.086 12.75 11.75 12.414 11.75 12C11.75 11.586 12.086 11.25 12.5 11.25H16.5C16.914 11.25 17.25 11.586 17.25 12ZM10.03 6.80298C10.323 7.09598 10.323 7.57101 10.03 7.86401L8.69702 9.19702C8.55102 9.34302 8.35899 9.41699 8.16699 9.41699C7.97599 9.41699 7.78296 9.344 7.63696 9.198L6.96997 8.53101C6.67697 8.23801 6.67697 7.76297 6.96997 7.46997C7.26197 7.17797 7.73701 7.17697 8.03101 7.46997L8.16797 7.60699L8.97095 6.80402C9.26295 6.51002 9.73703 6.50998 10.03 6.80298ZM10.03 10.803C10.323 11.096 10.323 11.571 10.03 11.864L8.69702 13.197C8.55102 13.343 8.35899 13.417 8.16699 13.417C7.97599 13.417 7.78296 13.344 7.63696 13.198L6.96997 12.531C6.67697 12.238 6.67697 11.763 6.96997 11.47C7.26197 11.178 7.73701 11.177 8.03101 11.47L8.16797 11.607L8.97095 10.804C9.26295 10.51 9.73703 10.51 10.03 10.803ZM17.25 16C17.25 16.414 16.914 16.75 16.5 16.75H12.5C12.086 16.75 11.75 16.414 11.75 16C11.75 15.586 12.086 15.25 12.5 15.25H16.5C16.914 15.25 17.25 15.586 17.25 16ZM10.03 14.803C10.323 15.096 10.323 15.571 10.03 15.864L8.69702 17.197C8.55102 17.343 8.35899 17.417 8.16699 17.417C7.97599 17.417 7.78296 17.344 7.63696 17.198L6.96997 16.531C6.67697 16.238 6.67697 15.763 6.96997 15.47C7.26197 15.178 7.73701 15.177 8.03101 15.47L8.16797 15.607L8.97095 14.804C9.26295 14.51 9.73703 14.51 10.03 14.803Z" /></svg>
           </div>
            <a >Audit Room</a>
            <div className="listIcon" onClick={() => setListOpen4(!listOpen4)}>
             <svg className={listOpen4? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen4? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          {listOpen4 && (
           <div className={listOpen4? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li> <a href=''>  Audit Room</a></li>
                    <li> <a href=''> Dashboard</a></li>
                    <li> <a href=''> Planning</a></li>
                    <li> <a href=''> Engagement</a></li>
                    <li> <a href=''> Requirements</a></li>
                    <li> <a href=''> Info Request</a></li>
                    <li><a href="">Workpaper</a></li>
                    <li><a href="">Tasks</a></li>
                    <li><a href="">Report</a></li>
                    <li><a href="">Analytics</a></li>
                </ul>
                </div>
          )}
          </div>
           <div className="ul">
          <div className={listOpen7 ? "active li" : " li"} onClick={handleReport}>
            <div className="react-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 4.25H16.73C16.633 2.996 15.821 2.25 14.5 2.25H9.5C8.179 2.25 7.36702 2.996 7.27002 4.25H7C4.582 4.25 3.25 5.582 3.25 8V18C3.25 20.418 4.582 21.75 7 21.75H17C19.418 21.75 20.75 20.418 20.75 18V8C20.75 5.582 19.418 4.25 17 4.25ZM8.75 4.5C8.75 3.911 8.911 3.75 9.5 3.75H14.5C15.089 3.75 15.25 3.911 15.25 4.5V5.5C15.25 6.089 15.089 6.25 14.5 6.25H9.5C8.911 6.25 8.75 6.089 8.75 5.5V4.5ZM19.25 18C19.25 19.577 18.577 20.25 17 20.25H7C5.423 20.25 4.75 19.577 4.75 18V8C4.75 6.423 5.423 5.75 7 5.75H7.27002C7.36702 7.004 8.179 7.75 9.5 7.75H14.5C15.821 7.75 16.633 7.004 16.73 5.75H17C18.577 5.75 19.25 6.423 19.25 8V18ZM17.25 12C17.25 12.414 16.914 12.75 16.5 12.75H12.5C12.086 12.75 11.75 12.414 11.75 12C11.75 11.586 12.086 11.25 12.5 11.25H16.5C16.914 11.25 17.25 11.586 17.25 12ZM17.25 16C17.25 16.414 16.914 16.75 16.5 16.75H12.5C12.086 16.75 11.75 16.414 11.75 16C11.75 15.586 12.086 15.25 12.5 15.25H16.5C16.914 15.25 17.25 15.586 17.25 16ZM10.03 10.803C10.323 11.096 10.323 11.571 10.03 11.864L8.69702 13.197C8.55602 13.338 8.36599 13.417 8.16699 13.417C7.96799 13.417 7.77696 13.338 7.63696 13.198L6.96997 12.531C6.67697 12.238 6.67697 11.763 6.96997 11.47C7.26297 11.177 7.73801 11.177 8.03101 11.47L8.16797 11.607L8.97095 10.804C9.26295 10.51 9.73703 10.51 10.03 10.803ZM10.03 14.803C10.323 15.096 10.323 15.571 10.03 15.864L8.69702 17.197C8.55602 17.338 8.36599 17.417 8.16699 17.417C7.96799 17.417 7.77696 17.338 7.63696 17.198L6.96997 16.531C6.67697 16.238 6.67697 15.763 6.96997 15.47C7.26297 15.177 7.73801 15.177 8.03101 15.47L8.16797 15.607L8.97095 14.804C9.26295 14.51 9.73703 14.51 10.03 14.803Z"/></svg>
           </div>
            <a >Issues</a>
            <div className="listIcon" onClick={() => setListOpen7(!listOpen7)}>
             <svg className={listOpen7? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen7? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          {listOpen7 && (
           <div className={listOpen7? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''> Issues</a></li>
                    <li><a href =''>Dashboard</a></li>
                    <li><a href="">Workflow</a></li>
                </ul>
                </div>
          )}
          </div>
            <div className="ul">
          <div className={listOpen8 ? "active li" : " li"} onClick={handleGovernance}>
            <div className="react-icon">
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 20.25H21.75V11C21.75 9.252 20.748 8.25 19 8.25H18.75V6C18.75 3.582 17.418 2.25 15 2.25H9C6.582 2.25 5.25 3.582 5.25 6V8.25H5C3.252 8.25 2.25 9.252 2.25 11V20.25H2C1.586 20.25 1.25 20.586 1.25 21C1.25 21.414 1.586 21.75 2 21.75H22C22.414 21.75 22.75 21.414 22.75 21C22.75 20.586 22.414 20.25 22 20.25ZM6.75 6C6.75 4.423 7.423 3.75 9 3.75H15C16.577 3.75 17.25 4.423 17.25 6V20.25H14.75V18C14.75 16.483 13.517 15.25 12 15.25C10.483 15.25 9.25 16.483 9.25 18V20.25H6.75V6ZM13.25 20.25H10.75V18C10.75 17.311 11.311 16.75 12 16.75C12.689 16.75 13.25 17.311 13.25 18V20.25ZM3.75 11C3.75 10.089 4.089 9.75 5 9.75H5.25V20.25H3.75V11ZM18.75 20.25V9.75H19C19.911 9.75 20.25 10.089 20.25 11V20.25H18.75ZM8.75 7C8.75 6.586 9.086 6.25 9.5 6.25H10.5C10.914 6.25 11.25 6.586 11.25 7C11.25 7.414 10.914 7.75 10.5 7.75H9.5C9.086 7.75 8.75 7.414 8.75 7ZM12.75 7C12.75 6.586 13.086 6.25 13.5 6.25H14.5C14.914 6.25 15.25 6.586 15.25 7C15.25 7.414 14.914 7.75 14.5 7.75H13.5C13.086 7.75 12.75 7.414 12.75 7ZM8.75 10C8.75 9.586 9.086 9.25 9.5 9.25H10.5C10.914 9.25 11.25 9.586 11.25 10C11.25 10.414 10.914 10.75 10.5 10.75H9.5C9.086 10.75 8.75 10.414 8.75 10ZM12.75 10C12.75 9.586 13.086 9.25 13.5 9.25H14.5C14.914 9.25 15.25 9.586 15.25 10C15.25 10.414 14.914 10.75 14.5 10.75H13.5C13.086 10.75 12.75 10.414 12.75 10ZM8.75 13C8.75 12.586 9.086 12.25 9.5 12.25H10.5C10.914 12.25 11.25 12.586 11.25 13C11.25 13.414 10.914 13.75 10.5 13.75H9.5C9.086 13.75 8.75 13.414 8.75 13ZM12.75 13C12.75 12.586 13.086 12.25 13.5 12.25H14.5C14.914 12.25 15.25 12.586 15.25 13C15.25 13.414 14.914 13.75 14.5 13.75H13.5C13.086 13.75 12.75 13.414 12.75 13Z" /></svg>
           </div>
            <a >GovDiligence</a>
            <div className="listIcon" onClick={() => setListOpen8(!listOpen8)}>
             <svg className={listOpen8? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen8? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          {listOpen8 &&(
           <div className={listOpen8? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''> Governance</a></li>
                    <li><a href =''> Policy</a></li>
                    <li><a href =''> Standard</a></li>
                    <li><a href =''> Procedure</a></li>
                    <li><a href =''> Baselines</a></li>
                </ul>
                </div>
          )}
          </div>
           <div className="ul">
          <div className={listOpen8 ? "active li" : " li"} onClick={handleGovernance}>
            <div className="react-icon">
           <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0014 21.7457C11.0414 21.7457 10.0814 21.3808 9.35138 20.6498L8.91046 20.2088C8.77046 20.0688 8.57744 19.9888 8.38044 19.9888H7.75946C5.69346 19.9888 4.01142 18.3078 4.01142 16.2408V15.6198C4.01142 15.4228 3.93145 15.2288 3.79145 15.0898L3.35041 14.6488C1.88841 13.1878 1.88841 10.8098 3.35041 9.34776L3.79145 8.90675C3.93145 8.76675 4.01142 8.57375 4.01142 8.37575V7.75475C4.01142 5.68775 5.69346 4.00676 7.75946 4.00676H8.38044C8.57744 4.00676 8.77146 3.92676 8.91046 3.78676L9.35138 3.34575C10.8124 1.88475 13.1914 1.88475 14.6524 3.34575L15.0934 3.78676C15.2334 3.92676 15.4264 4.00676 15.6234 4.00676H16.2444C18.3104 4.00676 19.9924 5.68775 19.9924 7.75475V8.37575C19.9924 8.57375 20.0725 8.76675 20.2125 8.90675L20.6534 9.34776C22.1154 10.8088 22.1154 13.1868 20.6534 14.6488L20.2125 15.0898C20.0725 15.2298 19.9924 15.4228 19.9924 15.6198V16.2408C19.9924 18.3078 18.3104 19.9888 16.2444 19.9888H15.6234C15.4264 19.9888 15.2324 20.0688 15.0934 20.2078L14.6524 20.6498C13.9214 21.3808 12.9614 21.7457 12.0014 21.7457ZM7.75837 5.50676C6.51937 5.50676 5.51044 6.51575 5.51044 7.75475V8.37575C5.51044 8.97675 5.27638 9.54175 4.85138 9.96675L4.41046 10.4078C3.98546 10.8328 3.75238 11.3968 3.75238 11.9978C3.75238 12.5988 3.98546 13.1628 4.41046 13.5878L4.85138 14.0288C5.27638 14.4538 5.51044 15.0188 5.51044 15.6198V16.2408C5.51044 17.4808 6.51937 18.4888 7.75837 18.4888H8.37946C8.97246 18.4888 9.5524 18.7288 9.9704 19.1478L10.4114 19.5888C11.2614 20.4378 12.7414 20.4378 13.5914 19.5888L14.0324 19.1478C14.4504 18.7288 15.0304 18.4888 15.6234 18.4888H16.2444C17.4834 18.4888 18.4924 17.4798 18.4924 16.2408V15.6198C18.4924 15.0188 18.7264 14.4538 19.1514 14.0288L19.5924 13.5878C20.0173 13.1628 20.2504 12.5988 20.2504 11.9978C20.2504 11.3968 20.0173 10.8328 19.5924 10.4078L19.1514 9.96675C18.7264 9.54175 18.4924 8.97675 18.4924 8.37575V7.75475C18.4924 6.51475 17.4834 5.50676 16.2444 5.50676H15.6234C15.0314 5.50676 14.4514 5.26676 14.0324 4.84776L13.5914 4.40675C12.7414 3.55775 11.2614 3.55775 10.4114 4.40675L9.9704 4.84776C9.5514 5.26676 8.97146 5.50676 8.37946 5.50676H7.75837ZM11.5314 14.5278L15.5314 10.5278C15.8244 10.2348 15.8244 9.75975 15.5314 9.46675C15.2384 9.17375 14.7634 9.17375 14.4704 9.46675L11.0004 12.9368L9.53046 11.4668C9.23746 11.1738 8.76242 11.1738 8.46942 11.4668C8.17642 11.7598 8.17642 12.2348 8.46942 12.5278L10.4694 14.5278C10.6154 14.6738 10.8075 14.7478 10.9995 14.7478C11.1915 14.7478 11.3854 14.6748 11.5314 14.5278Z"/></svg>
           </div>
            <a >Trust Party</a>
            <div className="listIcon" onClick={() => setListOpen8(!listOpen8)}>
             <svg className={listOpen8? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen8? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          {listOpen8 &&(
           <div className={listOpen8? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''> TrustParty</a></li>
                    <li><a href =''> TPRM Dashboard</a></li>
                    <li><a href =''> Vendor Managements</a></li>
                    <li><a href =''>Vendor Security Assessment</a></li>
                    <li><a href =''>Trust Center</a></li>
                </ul>
                </div>
          )}
          </div>
          <div className="ul">
          <div className={listOpen8 ? "active li" : " li"} onClick={handleGovernance}>
            <div className="react-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 4.25H16.73C16.633 2.996 15.821 2.25 14.5 2.25H9.5C8.179 2.25 7.36702 2.996 7.27002 4.25H7C4.582 4.25 3.25 5.582 3.25 8V18C3.25 20.418 4.582 21.75 7 21.75H17C19.418 21.75 20.75 20.418 20.75 18V8C20.75 5.582 19.418 4.25 17 4.25ZM8.75 4.5C8.75 3.911 8.911 3.75 9.5 3.75H14.5C15.089 3.75 15.25 3.911 15.25 4.5V5.5C15.25 6.089 15.089 6.25 14.5 6.25H9.5C8.911 6.25 8.75 6.089 8.75 5.5V4.5ZM19.25 18C19.25 19.577 18.577 20.25 17 20.25H7C5.423 20.25 4.75 19.577 4.75 18V8C4.75 6.423 5.423 5.75 7 5.75H7.27002C7.36702 7.004 8.179 7.75 9.5 7.75H14.5C15.821 7.75 16.633 7.004 16.73 5.75H17C18.577 5.75 19.25 6.423 19.25 8V18ZM17.25 12C17.25 12.414 16.914 12.75 16.5 12.75H12.5C12.086 12.75 11.75 12.414 11.75 12C11.75 11.586 12.086 11.25 12.5 11.25H16.5C16.914 11.25 17.25 11.586 17.25 12ZM17.25 16C17.25 16.414 16.914 16.75 16.5 16.75H12.5C12.086 16.75 11.75 16.414 11.75 16C11.75 15.586 12.086 15.25 12.5 15.25H16.5C16.914 15.25 17.25 15.586 17.25 16ZM10.03 10.803C10.323 11.096 10.323 11.571 10.03 11.864L8.69702 13.197C8.55602 13.338 8.36599 13.417 8.16699 13.417C7.96799 13.417 7.77696 13.338 7.63696 13.198L6.96997 12.531C6.67697 12.238 6.67697 11.763 6.96997 11.47C7.26297 11.177 7.73801 11.177 8.03101 11.47L8.16797 11.607L8.97095 10.804C9.26295 10.51 9.73703 10.51 10.03 10.803ZM10.03 14.803C10.323 15.096 10.323 15.571 10.03 15.864L8.69702 17.197C8.55602 17.338 8.36599 17.417 8.16699 17.417C7.96799 17.417 7.77696 17.338 7.63696 17.198L6.96997 16.531C6.67697 16.238 6.67697 15.763 6.96997 15.47C7.26297 15.177 7.73801 15.177 8.03101 15.47L8.16797 15.607L8.97095 14.804C9.26295 14.51 9.73703 14.51 10.03 14.803Z"/></svg>
           </div>
            <a >Scope Desk</a>
            <div className="listIcon" onClick={() => setListOpen8(!listOpen8)}>
             <svg className={listOpen8? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen8? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          {listOpen8 &&(
           <div className={listOpen8? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''> Scope Management</a></li>
                    <li><a href =''> Scope </a></li>
                </ul>
                </div>
          )}
          </div>
          <div className="ul">
          <div className={listOpen8 ? "active li" : " li"} onClick={handleGovernance}>
            <div className="react-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 4.25H16.73C16.633 2.996 15.821 2.25 14.5 2.25H9.5C8.179 2.25 7.36702 2.996 7.27002 4.25H7C4.582 4.25 3.25 5.582 3.25 8V18C3.25 20.418 4.582 21.75 7 21.75H17C19.418 21.75 20.75 20.418 20.75 18V8C20.75 5.582 19.418 4.25 17 4.25ZM8.75 4.5C8.75 3.911 8.911 3.75 9.5 3.75H14.5C15.089 3.75 15.25 3.911 15.25 4.5V5.5C15.25 6.089 15.089 6.25 14.5 6.25H9.5C8.911 6.25 8.75 6.089 8.75 5.5V4.5ZM19.25 18C19.25 19.577 18.577 20.25 17 20.25H7C5.423 20.25 4.75 19.577 4.75 18V8C4.75 6.423 5.423 5.75 7 5.75H7.27002C7.36702 7.004 8.179 7.75 9.5 7.75H14.5C15.821 7.75 16.633 7.004 16.73 5.75H17C18.577 5.75 19.25 6.423 19.25 8V18ZM17.25 12C17.25 12.414 16.914 12.75 16.5 12.75H12.5C12.086 12.75 11.75 12.414 11.75 12C11.75 11.586 12.086 11.25 12.5 11.25H16.5C16.914 11.25 17.25 11.586 17.25 12ZM17.25 16C17.25 16.414 16.914 16.75 16.5 16.75H12.5C12.086 16.75 11.75 16.414 11.75 16C11.75 15.586 12.086 15.25 12.5 15.25H16.5C16.914 15.25 17.25 15.586 17.25 16ZM10.03 10.803C10.323 11.096 10.323 11.571 10.03 11.864L8.69702 13.197C8.55602 13.338 8.36599 13.417 8.16699 13.417C7.96799 13.417 7.77696 13.338 7.63696 13.198L6.96997 12.531C6.67697 12.238 6.67697 11.763 6.96997 11.47C7.26297 11.177 7.73801 11.177 8.03101 11.47L8.16797 11.607L8.97095 10.804C9.26295 10.51 9.73703 10.51 10.03 10.803ZM10.03 14.803C10.323 15.096 10.323 15.571 10.03 15.864L8.69702 17.197C8.55602 17.338 8.36599 17.417 8.16699 17.417C7.96799 17.417 7.77696 17.338 7.63696 17.198L6.96997 16.531C6.67697 16.238 6.67697 15.763 6.96997 15.47C7.26297 15.177 7.73801 15.177 8.03101 15.47L8.16797 15.607L8.97095 14.804C9.26295 14.51 9.73703 14.51 10.03 14.803Z" /></svg>
           </div>
            <a >Project Builder</a>
            <div className="listIcon" onClick={() => setListOpen8(!listOpen8)}>
             <svg className={listOpen8? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen8? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          {listOpen8 &&(
           <div className={listOpen8? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''>Project Builder</a></li>
                    <li><a href =''>Dashboard</a></li>
                    <li><a href =''>Assessment Questionnaires</a></li>
                    <li><a href="">Task</a></li>
                </ul>
                </div>
          )}
          </div>
          <div className="ul">
          <div className={listOpen8 ? "active li" : " li"} onClick={handleGovernance}>
            <div className="react-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 4.25H16.73C16.633 2.996 15.821 2.25 14.5 2.25H9.5C8.179 2.25 7.36702 2.996 7.27002 4.25H7C4.582 4.25 3.25 5.582 3.25 8V18C3.25 20.418 4.582 21.75 7 21.75H17C19.418 21.75 20.75 20.418 20.75 18V8C20.75 5.582 19.418 4.25 17 4.25ZM8.75 4.5C8.75 3.911 8.911 3.75 9.5 3.75H14.5C15.089 3.75 15.25 3.911 15.25 4.5V5.5C15.25 6.089 15.089 6.25 14.5 6.25H9.5C8.911 6.25 8.75 6.089 8.75 5.5V4.5ZM19.25 18C19.25 19.577 18.577 20.25 17 20.25H7C5.423 20.25 4.75 19.577 4.75 18V8C4.75 6.423 5.423 5.75 7 5.75H7.27002C7.36702 7.004 8.179 7.75 9.5 7.75H14.5C15.821 7.75 16.633 7.004 16.73 5.75H17C18.577 5.75 19.25 6.423 19.25 8V18ZM17.25 12C17.25 12.414 16.914 12.75 16.5 12.75H12.5C12.086 12.75 11.75 12.414 11.75 12C11.75 11.586 12.086 11.25 12.5 11.25H16.5C16.914 11.25 17.25 11.586 17.25 12ZM17.25 16C17.25 16.414 16.914 16.75 16.5 16.75H12.5C12.086 16.75 11.75 16.414 11.75 16C11.75 15.586 12.086 15.25 12.5 15.25H16.5C16.914 15.25 17.25 15.586 17.25 16ZM10.03 10.803C10.323 11.096 10.323 11.571 10.03 11.864L8.69702 13.197C8.55602 13.338 8.36599 13.417 8.16699 13.417C7.96799 13.417 7.77696 13.338 7.63696 13.198L6.96997 12.531C6.67697 12.238 6.67697 11.763 6.96997 11.47C7.26297 11.177 7.73801 11.177 8.03101 11.47L8.16797 11.607L8.97095 10.804C9.26295 10.51 9.73703 10.51 10.03 10.803ZM10.03 14.803C10.323 15.096 10.323 15.571 10.03 15.864L8.69702 17.197C8.55602 17.338 8.36599 17.417 8.16699 17.417C7.96799 17.417 7.77696 17.338 7.63696 17.198L6.96997 16.531C6.67697 16.238 6.67697 15.763 6.96997 15.47C7.26297 15.177 7.73801 15.177 8.03101 15.47L8.16797 15.607L8.97095 14.804C9.26295 14.51 9.73703 14.51 10.03 14.803Z" /></svg>
           </div>
            <a >Integration</a>
            <div className="listIcon" onClick={() => setListOpen8(!listOpen8)}>
             <svg className={listOpen8? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen8? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          {listOpen8 &&(
           <div className={listOpen8? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''>APIs</a></li>
                    <li><a href =''>Integration</a></li>
                    <li><a href =''>Plugins</a></li>
                </ul>
                </div>
          )}
          </div>
           <div className="ul">
          <div className={listOpen8 ? "active li" : " li"} onClick={() => handlePage(19)}>
             <div className="react-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 4.25H16.73C16.633 2.996 15.821 2.25 14.5 2.25H9.5C8.179 2.25 7.36702 2.996 7.27002 4.25H7C4.582 4.25 3.25 5.582 3.25 8V18C3.25 20.418 4.582 21.75 7 21.75H17C19.418 21.75 20.75 20.418 20.75 18V8C20.75 5.582 19.418 4.25 17 4.25ZM8.75 4.5C8.75 3.911 8.911 3.75 9.5 3.75H14.5C15.089 3.75 15.25 3.911 15.25 4.5V5.5C15.25 6.089 15.089 6.25 14.5 6.25H9.5C8.911 6.25 8.75 6.089 8.75 5.5V4.5ZM19.25 18C19.25 19.577 18.577 20.25 17 20.25H7C5.423 20.25 4.75 19.577 4.75 18V8C4.75 6.423 5.423 5.75 7 5.75H7.27002C7.36702 7.004 8.179 7.75 9.5 7.75H14.5C15.821 7.75 16.633 7.004 16.73 5.75H17C18.577 5.75 19.25 6.423 19.25 8V18ZM17.25 12C17.25 12.414 16.914 12.75 16.5 12.75H12.5C12.086 12.75 11.75 12.414 11.75 12C11.75 11.586 12.086 11.25 12.5 11.25H16.5C16.914 11.25 17.25 11.586 17.25 12ZM17.25 16C17.25 16.414 16.914 16.75 16.5 16.75H12.5C12.086 16.75 11.75 16.414 11.75 16C11.75 15.586 12.086 15.25 12.5 15.25H16.5C16.914 15.25 17.25 15.586 17.25 16ZM10.03 10.803C10.323 11.096 10.323 11.571 10.03 11.864L8.69702 13.197C8.55602 13.338 8.36599 13.417 8.16699 13.417C7.96799 13.417 7.77696 13.338 7.63696 13.198L6.96997 12.531C6.67697 12.238 6.67697 11.763 6.96997 11.47C7.26297 11.177 7.73801 11.177 8.03101 11.47L8.16797 11.607L8.97095 10.804C9.26295 10.51 9.73703 10.51 10.03 10.803ZM10.03 14.803C10.323 15.096 10.323 15.571 10.03 15.864L8.69702 17.197C8.55602 17.338 8.36599 17.417 8.16699 17.417C7.96799 17.417 7.77696 17.338 7.63696 17.198L6.96997 16.531C6.67697 16.238 6.67697 15.763 6.96997 15.47C7.26297 15.177 7.73801 15.177 8.03101 15.47L8.16797 15.607L8.97095 14.804C9.26295 14.51 9.73703 14.51 10.03 14.803Z" /></svg>
            </div>
            <a href={page === 19}>Ai Navigator</a>
            <div className="listIcon" onClick={() => setListOpen8(!listOpen8)}>
             <svg className={listOpen8? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen8? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          {listOpen8 &&(
           <div className={listOpen8? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''>Ask AI</a></li>
                    <li><a href =''>Ask AI</a></li>
                </ul>
                </div>
          )}
          </div>
          <div className='li' onClick={() => handlePage(4)}>
             <div className="react-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0018 8.24899C9.93375 8.24899 8.25175 9.93099 8.25175 11.999C8.25175 14.067 9.93375 15.749 12.0018 15.749C14.0698 15.749 15.7518 14.067 15.7518 11.999C15.7518 9.93099 14.0698 8.24899 12.0018 8.24899ZM12.0018 14.249C10.7608 14.249 9.75175 13.24 9.75175 11.999C9.75175 10.758 10.7608 9.74899 12.0018 9.74899C13.2428 9.74899 14.2518 10.758 14.2518 11.999C14.2518 13.24 13.2428 14.249 12.0018 14.249ZM21.2098 13.952C20.5158 13.55 20.0837 12.802 20.0827 11.999C20.0817 11.198 20.5108 10.451 21.2138 10.044C21.7288 9.74501 21.9048 9.08198 21.6068 8.56598L19.9348 5.67999C19.6368 5.16499 18.9737 4.988 18.4577 5.285C17.7587 5.688 16.8898 5.68801 16.1888 5.28101C15.4978 4.88001 15.0678 4.135 15.0678 3.336C15.0678 2.737 14.5798 2.25 13.9808 2.25H10.0257C9.42574 2.25 8.93877 2.737 8.93877 3.336C8.93877 4.135 8.50875 4.87999 7.81575 5.28299C7.11675 5.68799 6.24876 5.68898 5.54976 5.28598C5.03276 4.98798 4.37077 5.166 4.07277 5.681L2.39876 8.57001C2.10076 9.08501 2.27774 9.74698 2.79774 10.049C3.49074 10.45 3.92276 11.197 3.92476 11.998C3.92676 12.8 3.49675 13.549 2.79475 13.956C2.54475 14.101 2.36476 14.334 2.29076 14.614C2.21676 14.893 2.25476 15.184 2.39976 15.435L4.07075 18.319C4.36875 18.835 5.03176 19.014 5.54976 18.715C6.24876 18.312 7.11576 18.313 7.80476 18.712L7.80675 18.713C7.80975 18.715 7.81276 18.717 7.81676 18.719C8.50776 19.12 8.93674 19.865 8.93574 20.665C8.93574 21.264 9.42274 21.751 10.0217 21.751H13.9808C14.5798 21.751 15.0668 21.264 15.0668 20.666C15.0668 19.866 15.4967 19.121 16.1908 18.718C16.8888 18.313 17.7567 18.311 18.4567 18.715C18.9727 19.013 19.6348 18.836 19.9338 18.321L21.6077 15.432C21.9047 14.915 21.7278 14.252 21.2098 13.952ZM18.8327 17.226C17.7427 16.751 16.4777 16.816 15.4357 17.419C14.4027 18.018 13.7208 19.077 13.5888 20.249H10.4118C10.2818 19.077 9.59774 18.016 8.56474 17.418C7.52474 16.815 6.25776 16.751 5.17076 17.226L3.89476 15.023C4.84976 14.32 5.42674 13.192 5.42274 11.992C5.41974 10.8 4.84375 9.67999 3.89375 8.97699L5.17076 6.77298C6.25876 7.24698 7.52576 7.18298 8.56776 6.57898C9.59976 5.98098 10.2817 4.921 10.4137 3.75H13.5888C13.7198 4.922 14.4028 5.98099 15.4378 6.58099C16.4768 7.18399 17.7437 7.24799 18.8327 6.77399L20.1098 8.97699C19.1568 9.67899 18.5807 10.805 18.5827 12.003C18.5837 13.197 19.1598 14.319 20.1108 15.024L18.8327 17.226Z"/></svg>
            </div>
            <a href={page === 4}>Settings</a>
          </div>
          {/* <div className='logout' onClick={() => handlePage(9)} >
            <LogoutOutlinedIcon  className="react-icon"/>
            <a  href={page === 9}>Logout</a>
          </div> */}
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
