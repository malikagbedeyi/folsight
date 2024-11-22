import React, { useState } from 'react'
import '../../assets/scss/Dashboard/sidebar.scss'
import Img1 from '../../assets/Images/DashLogo.png'
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
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
const Sidebar = ({page}) => {
  const [toggle, setToggle] = useState(false);
  const [expand, setExpand] = useState(false);
  const [listOpen,setListOpen] = useState(false);
  const [listOpen2,setListOpen2] = useState(false);
  const [listOpen3,setListOpen3] = useState(false);
  const [listOpen4,setListOpen4] = useState(false);
  const [listOpen5,setListOpen5] = useState(false);
  const [listOpen6,setListOpen6] = useState(false);
  const [listOpen7,setListOpen7] = useState(false);
  const [listOpen8,setListOpen8] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  };
  const Expand = () => {
    setExpand(!expand)
  }

  return (
    <div className='sidebar'>
      <div className={`${toggle ? "sidebarContainer": "closeSidebar"} ${expand ? " expandSide" : "closeSide"}`}>
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
            <div className='ul'>
          <div className='li'>
          <LayersOutlinedIcon className='react-icon'/>
          <a href="">Overview</a>
          </div>
          <div  className='active li' >
            <SupervisorAccountOutlinedIcon className='react-icon' />
            <a >Administration</a>
            <div className="listIcon" onClick={() => setListOpen(!listOpen)}>
             <svg className={listOpen? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
           </div>
           <div onClick={Expand} className={listOpen ? "itemDropdown" : "closeDropdown"}>
          <ul >
                    <li><a href=''> Administration</a></li>
                    <li><a href=''> Admin Users</a></li>
                    <li><a href=''> Add Users</a></li>
                    <li><a href=''> Modules</a></li>
                </ul>
                </div>
          <div className="li" onClick={() => setListOpen2(!listOpen2)}>
            <ReceiptLongOutlinedIcon className='react-icon'/>
            <a >Transactions</a>
            <div className="listIcon" onClick={() => setListOpen2(!listOpen2)}>
             <svg className={listOpen2? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen2? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          <div className={listOpen2? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href=''> Transactions</a></li>
                    <li><a href=''> Pay Load</a></li>
                    <li><a href=''> Add Users</a></li>
                    <li><a href=''> Settlement</a></li>
                </ul>
                </div>
          <div className="li" onClick={() => setListOpen3(!listOpen3)}>
            <PaidOutlinedIcon className='react-icon'/>
            <a >Pricing</a>
            <div className="listIcon" onClick={() => setListOpen3(!listOpen3)}>
             <svg className={listOpen3? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen3? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div >
          <div className={listOpen3? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href=''> Pricing</a></li>
                    <li><a href=''> Procure License</a></li>
                    <li><a href=''> Create Pricing</a></li>
                </ul>
                </div>
          <div className="li" onClick={() => setListOpen4(!listOpen4)}>
            <FactCheckOutlinedIcon  className="react-icon"/>
            <a >Audit Room</a>
            <div className="listIcon" onClick={() => setListOpen4(!listOpen4)}>
             <svg className={listOpen4? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen4? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div >
          <div className={listOpen4? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li> <a href=''>  Audit Room</a></li>
                    <li> <a href=''> Audit Tasks</a></li>
                    <li> <a href=''> Audit Plan</a></li>
                    <li> <a href=''> Audit Reports</a></li>
                    <li> <a href=''> Internal Audit</a></li>
                    <li> <a href=''> External Audit</a></li>
                </ul>
                </div>
          <div className="li"  onClick={() => setListOpen5(!listOpen5)}>
            <ManageAccountsOutlinedIcon  className="react-icon"/>
            <a >Risk Core</a>
            <div className="listIcon" onClick={() => setListOpen5(!listOpen5)}>
             <svg className={listOpen5? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen5? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          <div className={listOpen5? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href=''> Risk Core</a></li>
                    <li><a href=''> Third Party</a></li>
                    <li><a href=''> Risk Core</a></li>
                </ul>
                </div>
          <div className="li" onClick={() => setListOpen6(!listOpen6)}>
            <EventNoteOutlinedIcon  className="react-icon"/>
            <a >Compl.ai</a>
            <div className="listIcon" onClick={() => setListOpen6(!listOpen6)}>
             <svg className={listOpen6? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen6? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          <div className={listOpen6? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''>  Compl.ai Dashboard</a></li>
                    <li><a href =''> Controls</a></li>
                    <li><a href =''> Requirements</a></li>
                    <li><a href =''> Framework</a></li>
                    <li><a href =''> Navigator</a></li>
                    <li><a href =''> Gap Assessment</a></li>
                </ul>
                </div>
          <div className="li" onClick={() => setListOpen7(!listOpen7)}>
            <ReportOutlinedIcon  className="react-icon"/>
            <a >Report</a>
            <div className="listIcon" onClick={() => setListOpen7(!listOpen7)}>
             <svg className={listOpen7? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen7? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          <div className={listOpen7? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''> Report</a></li>
                    <li><a href =''> Create a Reports</a></li>
                </ul>
                </div>
          <div className="li" onClick={() => setListOpen8(!listOpen8)}>
            < ScatterPlotOutlinedIcon  className="react-icon"/>
            <a >Governance</a>
            <div className="listIcon" onClick={() => setListOpen8(!listOpen8)}>
             <svg className={listOpen8? "close" : "open"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
             <svg className={listOpen8? "open" : "close"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>
          </div>
          <div className={listOpen8? "itemDropdown" :"closeDropdown"}>
          <ul >
                    <li><a href =''> Governance</a></li>
                    <li><a href =''> Policy Settings</a></li>
                    <li><a href =''> Procurement</a></li>
                </ul>
                </div>
          <div className="li">
            <VerifiedOutlinedIcon  className="react-icon"/>
            <a href="">Full Trust</a> 
          </div>
          <div className="li">
            <NotificationsActiveOutlinedIcon  className="react-icon"/>
            <a href="">Notification</a>
          </div>
          <div className="li">
            <SettingsOutlinedIcon  className="react-icon"/>
            <a href="">Settings</a>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
