import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import '../../../../assets/scss/Dashboard/Compl.ai/DashFramework/framework.scss'
import img1 from '../../../../assets/Images/Dashboard/profile-img.png'
import img2 from '../../../../assets/Images/Dashboard/logo-upload.png'
import {tableData,gridData} from './frameworkTable'

const FrrameWork = ({ page, handlePage,setSelectedItem}) => {

const [view,setView] = useState(1)
const [checkedItems, setCheckedItems] = useState({});
const [dropdown,setdropdown] = useState(false);
const [dropdown2,setdropdown2] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [currentPag2, setCurrentPag2] = useState(2);
const [itemPerPage] = useState(10);
const [itemPerPage2] = useState(10);
const navigate = useNavigate();


const indexOfLastPage2 =  currentPag2 * itemPerPage2;
const indexOfFirstPage2 = indexOfLastPage2 - itemPerPage2;
const currentItem2 = gridData.slice(indexOfFirstPage2, indexOfLastPage2);
const totalItems2 = gridData.length;

const indexOfLastPage =  currentPage * itemPerPage;
const indexOfFirstPage = indexOfLastPage - itemPerPage;
const currentItem = tableData.slice(indexOfFirstPage, indexOfLastPage);
const paginate = (pageNumber) => setCurrentPage(pageNumber);
const totalItems = tableData.length;

const nextPage = () => {
  if (currentPage < Math.ceil(totalItems / itemPerPage)) {
    setCurrentPage(currentPage + 1);
  }

  if (currentPag2 < Math.ceil(totalItems2 / itemPerPage2)) {
    setCurrentPag2(currentPag2 + 1);
  }
};
const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
  if (currentPag2 > 1) {
    setCurrentPag2(currentPag2 - 1);
  }
};

const handleClick = (index) => {
    setCheckedItems((prev) => ({
        ...prev,
        [index]: !prev[index], 
    }));
};
const items = [
    "All",
    "Framework ID",
    "Title",
    "Description",
    "Owner",
    "Mapped Control",
    "Mapped Risk",
    "Mapped Requirement",
    "Mapped Framework",
    "Status",
    "Action",
    "Date"
];
const viewitem = [
    "All",
    "Framework ID",
    "Title"
];

const handleClickFramework = (row) => {
  //navigate('/detail', { state: row });
  setSelectedItem(row);
  handlePage(2);
};

  return (
    <div className={page === 1 ? "framework" : "framework"}>
<div className="navMenuContainer row">
      <div className="navMenuParent col-lg-12">
        <div className="navMenuChild">
          <div className="topWrapper">
            <div className="leftTopWrapper">
              <h1>Compl.ai</h1> 
              <p>Dashboard 
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></span> 
               <a href=''> Framework</a></p>
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
            <div className="leftButtom">
               <ul>
                <li onClick={() => setView(1)} className={view === 1 ? "activeview" : ""}> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.25 7.70833H14.7917V5C14.7917 2.985 13.6817 1.875 11.6667 1.875H5C2.985 1.875 1.875 2.985 1.875 5V15C1.875 17.015 2.985 18.125 5 18.125H15.8333C17.0975 18.125 18.125 17.0975 18.125 15.8333V9.58333C18.125 8.54917 17.2833 7.70833 16.25 7.70833ZM5 16.875C3.68583 16.875 3.125 16.3142 3.125 15V5C3.125 3.68583 3.68583 3.125 5 3.125H11.6667C12.9808 3.125 13.5417 3.68583 13.5417 5V15.8333C13.5417 16.2083 13.6317 16.5625 13.7925 16.875H5ZM16.875 15.8333C16.875 16.4075 16.4075 16.875 15.8333 16.875C15.2592 16.875 14.7917 16.4075 14.7917 15.8333V8.95833H16.25C16.5942 8.95833 16.875 9.23833 16.875 9.58333V15.8333ZM11.875 6.66667C11.875 7.01167 11.595 7.29167 11.25 7.29167H7.5C7.155 7.29167 6.875 7.01167 6.875 6.66667C6.875 6.32167 7.155 6.04167 7.5 6.04167H11.25C11.595 6.04167 11.875 6.32167 11.875 6.66667ZM11.875 10C11.875 10.345 11.595 10.625 11.25 10.625H7.5C7.155 10.625 6.875 10.345 6.875 10C6.875 9.655 7.155 9.375 7.5 9.375H11.25C11.595 9.375 11.875 9.655 11.875 10ZM11.875 13.3333C11.875 13.6783 11.595 13.9583 11.25 13.9583H7.5C7.155 13.9583 6.875 13.6783 6.875 13.3333C6.875 12.9883 7.155 12.7083 7.5 12.7083H11.25C11.595 12.7083 11.875 12.9883 11.875 13.3333ZM6.04167 6.66667C6.04167 7.01167 5.76167 7.29167 5.41667 7.29167C5.07167 7.29167 4.79167 7.01167 4.79167 6.66667C4.79167 6.32167 5.07167 6.04167 5.41667 6.04167C5.76167 6.04167 6.04167 6.32167 6.04167 6.66667ZM6.04167 10C6.04167 10.345 5.76167 10.625 5.41667 10.625C5.07167 10.625 4.79167 10.345 4.79167 10C4.79167 9.655 5.07167 9.375 5.41667 9.375C5.76167 9.375 6.04167 9.655 6.04167 10ZM6.04167 13.3333C6.04167 13.6783 5.76167 13.9583 5.41667 13.9583C5.07167 13.9583 4.79167 13.6783 4.79167 13.3333C4.79167 12.9883 5.07167 12.7083 5.41667 12.7083C5.76167 12.7083 6.04167 12.9883 6.04167 13.3333Z" /> </svg>
                <a >List view</a> 
                </li> 
                <li onClick={() => setView(2)} className={view === 2 ? "activeview" : ""}>  <svg className='fill' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.57031 3.57031H3.57031V8.57031H8.57031V3.57031Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.4275 3.57031H11.4275V8.57031H16.4275V3.57031Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.4275 11.4275H11.4275V16.4275H16.4275V11.4275Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8.57031 11.4275H3.57031V16.4275H8.57031V11.4275Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                <a >Grid view</a> 
                </li>
               </ul>
            </div>
            <div className="rightButtom">
              <a>Create Framework</a>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.9987 2.33594C7.5587 2.33594 2.33203 7.5626 2.33203 14.0026C2.33203 20.4426 7.5587 25.6693 13.9987 25.6693C20.4387 25.6693 25.6654 20.4426 25.6654 14.0026C25.6654 7.5626 20.4387 2.33594 13.9987 2.33594ZM18.082 14.8776H14.8737V18.0859C14.8737 18.5643 14.477 18.9609 13.9987 18.9609C13.5204 18.9609 13.1237 18.5643 13.1237 18.0859V14.8776H9.91536C9.43703 14.8776 9.04036 14.4809 9.04036 14.0026C9.04036 13.5243 9.43703 13.1276 9.91536 13.1276H13.1237V9.91927C13.1237 9.44094 13.5204 9.04427 13.9987 9.04427C14.477 9.04427 14.8737 9.44094 14.8737 9.91927V13.1276H18.082C18.5604 13.1276 18.957 13.5243 18.957 14.0026C18.957 14.4809 18.5604 14.8776 18.082 14.8776Z" fill="#0152FF"/> </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="framework-container">
        <div className="Container">
        <div className={view == 1 ? "list-content": "d-none"}>
            <div className="framework-inputfield">
                <div className="inputfield-wrapper">
                    <div className="inputfield-leftwrapper">
                        <h4>Framework</h4>
                    </div>
                    <div className="inputfield-rightwrapper">
                        <div className="search-input">
                            <div className="input-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 12.75L10.421 10.4253M10.421 10.4253C11.1826 9.6647 11.6538 8.61334 11.6538 7.45192C11.6538 5.13127 9.77258 3.25 7.45192 3.25C5.13127 3.25 3.25 5.13127 3.25 7.45192C3.25 9.77258 5.13127 11.6538 7.45192 11.6538C8.61116 11.6538 9.66076 11.1844 10.421 10.4253Z" stroke="#5C5B69" stroke-width="1.75" stroke-linecap="round"/></svg>
                        </div>
                        <input type="text" placeholder='search' />
                        </div>
                        <div className="select-input">
                            <div onClick={() => setdropdown(!dropdown)} className="select-input-field">
                            <p>All</p>
                            <div className="input-icon">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#1B212C"/> </svg>
                            </div>
                            </div>
                            <div className= {dropdown ? "select-dropdown" : "d-none"}>
                              <ul>
                              {items.map((item, index) => (
                <li key={index}>
                    <span>{item}</span>
                    <div onClick={() => handleClick(index)} className="check">
                        {checkedItems[index] ?   ( <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.65" y="1.15" width="14.7" height="14.7" rx="1.35" stroke="#263238" strokeWidth="1.3"/><rect x="2" y="2.5" width="12" height="12" rx="2" fill="#334353"/><path d="M4 9L6.11881 11.5426C6.31773 11.7813 6.68391 11.7827 6.88462 11.5455L12 5.5" stroke="white"/> </svg> ) : ( <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.65" y="1.15" width="14.7" height="14.7" rx="1.35" stroke="#263238" strokeWidth="1.3"/> </svg>  )}
                    </div>
                </li>
            ))}
                              </ul>
                            </div>
                        </div>
                        <div className="import-input">
                            <p>Import</p>
                            <div className="input-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13.0001V17.0001C19 17.5305 18.7893 18.0392 18.4142 18.4143C18.0391 18.7894 17.5304 19.0001 17 19.0001H3C2.46957 19.0001 1.96086 18.7894 1.58579 18.4143C1.21071 18.0392 1 17.5305 1 17.0001V13.0001M5 8L10 13M10 13L15 8M10 13V1" stroke="#1B212C" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        </div>
                        <div className="import-input">
                            <p>export</p>
                            <div className="input-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13M15 6L10 1M10 1L5 6M10 1V13" stroke="#1B212C" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        </div>
                        <div className="select-input view-input">
                            <div onClick={() => setdropdown2(!dropdown2)} className="select-input-field">
                            <p>View</p>
                            <div className="input-icon">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#0152FF"/> </svg>
                            </div>
                            </div>
                            <div className= {dropdown2 ? "select-dropdown" : "d-none"}>
                              <ul>
                              {viewitem.map((item, index) => (
                <li key={index}>
                    <span>{item}</span>
                    <div onClick={() => handleClick(index)} className="check">
                        {checkedItems[index] ?   ( <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.65" y="1.15" width="14.7" height="14.7" rx="1.35" stroke="#263238" strokeWidth="1.3"/><rect x="2" y="2.5" width="12" height="12" rx="2" fill="#334353"/><path d="M4 9L6.11881 11.5426C6.31773 11.7813 6.68391 11.7827 6.88462 11.5455L12 5.5" stroke="white"/> </svg> ) : ( <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.65" y="1.15" width="14.7" height="14.7" rx="1.35" stroke="#263238" strokeWidth="1.3"/> </svg>  )}
                    </div>
                </li>
            ))}
                              </ul>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className="framework-table-content">
                <div className="framework-table ">
                    <div className="table-header">

                      <div className="left-tableheader">
                    <ul >
  <li >
    <div>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7017 10.6587C19.0435 11.0005 19.0435 11.5547 18.7017 11.8965L13.2568 17.3413C13.0865 17.5117 12.8625 17.598 12.6385 17.598C12.4145 17.598 12.1905 17.5128 12.0201 17.3413L9.2983 14.6195C8.95647 14.2777 8.95647 13.7235 9.2983 13.3816C9.64013 13.0398 10.1943 13.0398 10.5362 13.3816L12.6396 15.4852L17.465 10.6599C17.8068 10.318 18.3599 10.318 18.7017 10.6587ZM25.375 7.4375V20.5625C25.375 23.6658 23.6658 25.375 20.5625 25.375H7.4375C4.33417 25.375 2.625 23.6658 2.625 20.5625V7.4375C2.625 4.33417 4.33417 2.625 7.4375 2.625H20.5625C23.6658 2.625 25.375 4.33417 25.375 7.4375ZM23.625 7.4375C23.625 5.29083 22.7092 4.375 20.5625 4.375H7.4375C5.29083 4.375 4.375 5.29083 4.375 7.4375V20.5625C4.375 22.7092 5.29083 23.625 7.4375 23.625H20.5625C22.7092 23.625 23.625 22.7092 23.625 20.5625V7.4375Z" fill="#1B212C"/>
      </svg>
    </div>
  </li>
  <li>
    <span>Framework ID</span>
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#1B212C"/>
    </svg>
  </li>
  <li >
    <span>Title</span>
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#1B212C"/>
    </svg>
  </li>
  </ul>
  </div>
  <div className="right-tableheader">
  <ul>
  <li>
    <span>Description</span>
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#1B212C"/>
    </svg>
  </li>
  <li>
    <span>Owner</span>
  </li>
  <li>
    <span>Map Control</span>
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#1B212C"/>
    </svg>
  </li>
  <li>
    <span>Map Risk</span>
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#1B212C"/>
    </svg>
  </li>
  <li>
    <span>Map Framework</span>
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#1B212C"/>
    </svg>
  </li>
  <li>
    <span>Date</span>
  </li>
  <li>
    <span>Status</span>
  </li>
  <li>
    <span>Actions</span>
  </li>
</ul>
</div>
 </div>
  </div>
                     <div className="framework-body ">
                    <div className="table-body">
                       {currentItem.map((row, index) => (
                         <div onClick={() => handleClickFramework(row)} key={index} className="table-row">
                        <div className="tableRow-left">
                        <p><span>{row.icon}</span></p>
                         <p  > <span>{row.id}</span></p>
                        <p > <span>{row.title}</span></p>
                        </div>
                        <div className="tableRow-right">
                        <p> <span>{row.description}</span></p>
                        <p> <span className='double-tabeText'>{row.owner}</span><span>{row.ownerName}</span> </p>
                        <p> <span>{row.mapControl}</span></p>
                        <p> <span>{row.mapRisk}</span></p>
                        <p> <span>{row.mapFramework}</span></p>
                        <p> <span className='double-tabeText'>{row.time}</span> <span>{row.date}</span></p>
                        <p> <span>{row.status}</span></p>
                        <p> <span>{row.action}</span></p>
                        </div>
                       </div> ))}
  </div>
  
  </div>
  <div className="pagination">
          <button className='double-paginateIcon' onClick={prevPage} disabled={currentPage === 1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
          </button>
          <button onClick={prevPage} disabled={currentPage === 1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
          </button>
          <p>
          <span className='span'> {indexOfFirstPage + 1}</span>- <span>{Math.min(indexOfLastPage, totalItems)} </span>
          </p>
          <button onClick={nextPage}
            disabled={currentPage === Math.ceil(totalItems / itemPerPage)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
          </button>
          <button className='double-paginateIcon-right' onClick={nextPage}
            disabled={currentPage === Math.ceil(totalItems / itemPerPage)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
          </button>
          <span>
            Showing {indexOfFirstPage + 1}-{Math.min(indexOfLastPage, totalItems)} of {totalItems}
          </span>
        </div>
   </div>
                
        </div>
        <div className={view == 2 ? "grid-content" : "d-none"}>
        <div className="framework-inputfield">
                <div className="inputfield-wrapper">
                    <div className="inputfield-leftwrapper">
                        <h4>Framework</h4>
                    </div>
                    <div className="inputfield-rightwrapper">
                        <div className="search-input">
                            <div className="input-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 12.75L10.421 10.4253M10.421 10.4253C11.1826 9.6647 11.6538 8.61334 11.6538 7.45192C11.6538 5.13127 9.77258 3.25 7.45192 3.25C5.13127 3.25 3.25 5.13127 3.25 7.45192C3.25 9.77258 5.13127 11.6538 7.45192 11.6538C8.61116 11.6538 9.66076 11.1844 10.421 10.4253Z" stroke="#5C5B69" stroke-width="1.75" stroke-linecap="round"/></svg>
                        </div>
                        <input type="text" placeholder='search' />
                        </div>
                        <div className="select-input">
                            <div onClick={() => setdropdown(!dropdown)} className="select-input-field">
                            <p>All</p>
                            <div className="input-icon">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.74719 1.50375C1.93719 1.50375 2.12719 1.57375 2.27719 1.72375L5.27719 4.72375L8.27719 1.72375C8.56719 1.43375 9.04719 1.43375 9.33719 1.72375C9.62719 2.01375 9.62719 2.49375 9.33719 2.78375L5.80719 6.31375C5.51719 6.60375 5.03719 6.60375 4.74719 6.31375L1.21719 2.78375C0.927188 2.49375 0.927188 2.01375 1.21719 1.72375C1.36719 1.57375 1.55719 1.50375 1.74719 1.50375Z" fill="#1B212C"/> </svg>
                            </div>
                            </div>
                            <div className= {dropdown ? "select-dropdown" : "d-none"}>
                              <ul>
                              {items.map((item, index) => (
                <li key={index}>
                    <span>{item}</span>
                    <div onClick={() => handleClick(index)} className="check">
                        {checkedItems[index] ?   ( <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.65" y="1.15" width="14.7" height="14.7" rx="1.35" stroke="#263238" strokeWidth="1.3"/><rect x="2" y="2.5" width="12" height="12" rx="2" fill="#334353"/><path d="M4 9L6.11881 11.5426C6.31773 11.7813 6.68391 11.7827 6.88462 11.5455L12 5.5" stroke="white"/> </svg> ) : ( <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.65" y="1.15" width="14.7" height="14.7" rx="1.35" stroke="#263238" strokeWidth="1.3"/> </svg>  )}
                    </div>
                </li>
            ))}
                              </ul>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className="gridtable-data">
              <div className="gridtable-content">
                <div className="gridtable-body">
                    {currentItem2.map((item, index) => (
                         <div key={index} className="table-item">
                        <div className="tableItem-left">
                        <div className='grid-title'><span>{item.title}</span></div>
                         <div className='requiredContainer'> <span className='grid-required'>{item.required}</span> <span className='grid-NoOFRequired'>{item.NoOFRequired}</span></div>
                        </div>
                        <div className="tableItem-right" >
                        <div className='grid-id'> <span>{item.id}</span></div>
                        <div className='grid-status'> <span>{item.status}</span> </div>
                        </div>
                       </div> ))}
              </div>
              </div>
              <div className="pagination">
          <button className='double-paginateIcon' onClick={prevPage} disabled={currentPag2 === 1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
          </button>
          <button onClick={prevPage} disabled={currentPag2 === 1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
          </button>
          <p>
          <span className='span'> {indexOfFirstPage2 + 1}</span>- <span>{Math.min(indexOfLastPage2, totalItems2)} </span>
          </p>
          <button onClick={nextPage}
            disabled={currentPag2 === Math.ceil(totalItems2 / itemPerPage2)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
          </button> 
          <button className='double-paginateIcon-right' onClick={nextPage}
            disabled={currentPag2 === Math.ceil(totalItems2 / itemPerPage2)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
          </button>
          <span>
            Showing {indexOfFirstPage2 + 1}-{Math.min(indexOfLastPage2, totalItems2)} of {totalItems2}
          </span>
        </div>
            </div>
   </div>
      </div>
      </div>
    </div>
  )
}

export default FrrameWork

