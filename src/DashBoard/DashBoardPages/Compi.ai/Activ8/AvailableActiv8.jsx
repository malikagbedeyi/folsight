import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../assets/scss/Dashboard/Compl.ai/Activ8/activ8.scss'
import img1 from '../../../../assets/Images/Dashboard/profile-img.png'
import img2 from '../../../../assets/Images/Dashboard/logo-upload.png'
import {templateData ,activ8Data} from './TemplateData'
import Activ8Body from './Activ8Body';

const AvailableActiv8 = ({ page, handlePage,setSelectedItem}) => {

const [checkedItems, setCheckedItems] = useState({});
const [dropdown,setdropdown] = useState(false);

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

const handleClickActiv8 = (item) => {
  setSelectedItem(item);
  handlePage(10);
};

  return (
    <div className={page === 9 ? "activ8" : "activ8"}>
    <div className="navMenuContainer row">
          <div className="navMenuParent col-lg-12">
            <div className="navMenuChild">
              <div className="topWrapper">
                <div className="leftTopWrapper">
                  <h1>Compl.ai</h1> 
                  <div className="leftwrapper-contet">
                  <p>Dashboard </p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></span> 
                   <a onClick={() => handlePage(8)}> Activ8</a>
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
                <div className="title-content">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.25 7.70833H14.7917V5C14.7917 2.985 13.6817 1.875 11.6667 1.875H5C2.985 1.875 1.875 2.985 1.875 5V15C1.875 17.015 2.985 18.125 5 18.125H15.8333C17.0975 18.125 18.125 17.0975 18.125 15.8333V9.58333C18.125 8.54917 17.2833 7.70833 16.25 7.70833ZM5 16.875C3.68583 16.875 3.125 16.3142 3.125 15V5C3.125 3.68583 3.68583 3.125 5 3.125H11.6667C12.9808 3.125 13.5417 3.68583 13.5417 5V15.8333C13.5417 16.2083 13.6317 16.5625 13.7925 16.875H5ZM16.875 15.8333C16.875 16.4075 16.4075 16.875 15.8333 16.875C15.2592 16.875 14.7917 16.4075 14.7917 15.8333V8.95833H16.25C16.5942 8.95833 16.875 9.23833 16.875 9.58333V15.8333ZM11.875 6.66667C11.875 7.01167 11.595 7.29167 11.25 7.29167H7.5C7.155 7.29167 6.875 7.01167 6.875 6.66667C6.875 6.32167 7.155 6.04167 7.5 6.04167H11.25C11.595 6.04167 11.875 6.32167 11.875 6.66667ZM11.875 10C11.875 10.345 11.595 10.625 11.25 10.625H7.5C7.155 10.625 6.875 10.345 6.875 10C6.875 9.655 7.155 9.375 7.5 9.375H11.25C11.595 9.375 11.875 9.655 11.875 10ZM11.875 13.3333C11.875 13.6783 11.595 13.9583 11.25 13.9583H7.5C7.155 13.9583 6.875 13.6783 6.875 13.3333C6.875 12.9883 7.155 12.7083 7.5 12.7083H11.25C11.595 12.7083 11.875 12.9883 11.875 13.3333ZM6.04167 6.66667C6.04167 7.01167 5.76167 7.29167 5.41667 7.29167C5.07167 7.29167 4.79167 7.01167 4.79167 6.66667C4.79167 6.32167 5.07167 6.04167 5.41667 6.04167C5.76167 6.04167 6.04167 6.32167 6.04167 6.66667ZM6.04167 10C6.04167 10.345 5.76167 10.625 5.41667 10.625C5.07167 10.625 4.79167 10.345 4.79167 10C4.79167 9.655 5.07167 9.375 5.41667 9.375C5.76167 9.375 6.04167 9.655 6.04167 10ZM6.04167 13.3333C6.04167 13.6783 5.76167 13.9583 5.41667 13.9583C5.07167 13.9583 4.79167 13.6783 4.79167 13.3333C4.79167 12.9883 5.07167 12.7083 5.41667 12.7083C5.76167 12.7083 6.04167 12.9883 6.04167 13.3333Z" fill="#999999"/></svg>
                  <p>Activ8 Templates</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="activ8-container">
            <div className="activ8-content">
            <div className="activ8-inputfield">
                <div className="activ8-wrapper">
                    <div className="activ8-rightwrapper">
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
            <div className="activ8-template">
              <div className="title-template">
                <div className="left-title">
                  <h4>Activ8 Framework</h4>
                </div>
                <div className="right-title">
                  <p>View all</p>
                </div>
              </div>
              <div className="grid-template">
                <div className="grid-template-content">
                  {activ8Data?.length > 0 ? (
                    activ8Data.map((item,index) => (
                      <div onClick={() => handleClickActiv8(item)} key={index} className="grid-template-box">
                     <div className="top-box">
                      <h5>{item.tittle}</h5>
                      <p>FID:{item.id}</p>
                     </div>
                     <div className={`bottom-box ${item.status.toLowerCase()}`}>
                      <div className={`box-circle ${item.status.toLowerCase()}`}></div>
                      <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                     </div>
                     </div>
                     ))
                     ) : (
                    <p>No data available</p>
                  )}
                </div>
              </div>
            </div>
            <div className="activ8-template">
              <div className="title-template">
                <div className="left-title">
                  <h4>Available Framework Template</h4>
                </div>
                <div className="right-title">
                  <p>View all</p>
                </div>
              </div>
              <div className="grid-template">
                <div  className="grid-template-content">
                  {templateData?.length > 0 ? (
                    templateData.map((item,index) => (
                      <div onClick={() => handleClickActiv8(item)} key={index} className="grid-template-box">
                     <div className="top-box">
                      <h5>{item.tittle}</h5>
                      <p>FID:{item.id}</p>
                     </div>
                     <div className="bottom-box">
                      <div className="box-circle"></div>
                      <span>{item.status}</span>
                     </div>
                     </div>
                     ))
                     ) : (
                    <p>No data available</p>
                  )}
                </div>
              </div>
            </div>
            </div>
          </div>
    </div>
  )
}

export default AvailableActiv8
