import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../assets/scss/Dashboard/Compl.ai/Activ8/activ8body.scss'
import img1 from '../../../../assets/Images/Dashboard/profile-img.png'
import img2 from '../../../../assets/Images/Dashboard/logo-upload.png'
import {Activ8Data} from './ActiveTable'
import Activ8Pop from './Activ8Pop';

const Activ8Body = ({ page, handlePage,selectedItem,setSelectedItem}) => {

  const [hideBtn,setHideBtn] = useState(false)
  const [actv8Pop,setActv8Pop] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);
  const { status, tittle,CreatedDate,updateDate } = selectedItem;

   if (!selectedItem) {
    return <div>No item selected. Please go back and select an item.</div>;
  }

const indexOfLastPage =  currentPage * itemPerPage;
const indexOfFirstPage = indexOfLastPage - itemPerPage;
const currentItem = Activ8Data.slice(indexOfFirstPage, indexOfLastPage);
const paginate = (pageNumber) => setCurrentPage(pageNumber);
const totalItems = Activ8Data.length;

const handleHideBtn= () => {
    setHideBtn(!hideBtn)
}
const handleActv8Pop= () => {
    setActv8Pop(!actv8Pop)
}

const nextPage = () => {
  if (currentPage < Math.ceil(totalItems / itemPerPage)) {
    setCurrentPage(currentPage + 1);
  }
};
const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};
const handleClickActiv8 = (row) => {
    setSelectedItem(row);
    handlePage(9);
  };

  return (
    <div className={page === 12 ? "activ8Body" : "d-none"}>
 <div className="navMenuContainer row">
          <div className="navMenuParent col-lg-12">
            <div className="navMenuChild">
              <div className="topWrapper">
                <div className="leftTopWrapper">
                  <h1>Compl.ai</h1> 
                  <div className="leftwrapper-contet">
                  <p>Dashboard </p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></span> 
                   <a onClick={() => handlePage(11)}> Activ8</a>
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
                  <div className="leftButtom">
                    <div className="right-text">
                  <p>Framework</p>
                    <h2>{tittle}</h2>
                    <span>Template</span>
                  </div>
                  <div className="leftIcon">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.75 15V18C19.75 20.418 18.418 21.75 16 21.75H6C3.582 21.75 2.25 20.418 2.25 18V8C2.25 5.582 3.582 4.25 6 4.25H9C9.414 4.25 9.75 4.586 9.75 5C9.75 5.414 9.414 5.75 9 5.75H6C4.423 5.75 3.75 6.423 3.75 8V18C3.75 19.577 4.423 20.25 6 20.25H16C17.577 20.25 18.25 19.577 18.25 18V15C18.25 14.586 18.586 14.25 19 14.25C19.414 14.25 19.75 14.586 19.75 15ZM21.75 6.056C21.749 6.643 21.52 7.194 21.104 7.608L12.141 16.531C12 16.671 11.81 16.75 11.612 16.75H8C7.586 16.75 7.25 16.414 7.25 16V12.389C7.25 12.191 7.32799 12 7.46899 11.86L16.392 2.896C16.805 2.48 17.357 2.251 17.944 2.25C17.945 2.25 17.946 2.25 17.947 2.25C18.533 2.25 19.084 2.47801 19.499 2.89301L21.108 4.50201C21.522 4.91701 21.751 5.469 21.75 6.056ZM17.617 8.96301L15.037 6.383L8.75 12.699V15.251H11.302L17.617 8.96301ZM20.25 6.05399C20.25 5.86799 20.178 5.69301 20.047 5.56201L18.438 3.953C18.307 3.822 18.132 3.75 17.947 3.75H17.946C17.76 3.75 17.586 3.82301 17.455  3.95401L16.096 5.319L18.681 7.90399L20.046 6.54501C20.177 6.41501 20.249 6.23999 20.25 6.05399Z" fill="#25314C"/></svg>
                  </div>
                  </div>
                  <div className="rightButtom">
                    <a onClick={handleHideBtn}>Start</a>
                    <a onClick={handleActv8Pop} className={hideBtn ? "button" : "d-none"}>Activate</a>
                  </div>
                </div>
            </div>
          </div>
          </div>
          <div className="activ8Body-container">
          <div className="activ8Body-content">
          <div className="top-content">
          <div className="top-title">
          <h4>Framework Details</h4>
          </div>
          <div className="bottom-title">
          <p>Description</p>
          <span>Lorem ipsum dolor sit ame, consecte tur a amet  amet Lorem ipsum dolor sit ame, consecte tur a amet Lorem ipsum dolor sit ame,  </span>
          </div>
          <div className="calender-container">
          <div className="calender-content">
          <div className="left-calender">
          <p>Created Date:</p>
          </div>
          <div className="right-calender">
          <p>{CreatedDate}</p>
          </div>
          </div>
           <div className="calender-content">
          <div className="left-calender">
          <p>Last Update Date:</p>
          </div>
          <div className="right-calender">
          <p>{updateDate}</p>
          </div>
          </div>
           <div className="calender-content">
          <div className="left-calender">
          <p>Status:</p>
          </div>
          <div className="right-calender">
          <p>{status}</p>
          </div>
          <div classame="icon-calender">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#373F41"/><path d="M6.875 8.125L10 5L13.125 8.125" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 11.875L10 15L13.125 11.875" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          </div>
           </div>
           <div className="table-content">
            <div className="table-content-title">
            <div className="top-title">
          <h4>Framework Requirement</h4>
          </div>
      
            </div>
            <div className="activ8-table-content">
                <div className="framework-table ">
                <div className="left-table ">
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
                      </div>
                      <div className="table-body">
                      {currentItem.map((row, index) => (
                         <div onClick={() => handleClickActiv8(row)} key={index} className="table-row">
                        <div className="tableRow-left">
                          <div className="ul">
                        <p className='table-icon'><span>{row.icon}</span></p>
                         <p  > <span>{row.id}</span></p>
                        <p > <span>{row.title}</span></p> 
                        </div>
                        </div>
                        </div> ))}
                        </div>
                      
 </div> 
 <div className="right-table">
  <div className="table-header">
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
  <div className="table-body">
                      {currentItem.map((row, index) => (
                         <div onClick={() => handleClickActiv8(row)} key={index} className="table-row">
                        <div className="tableRow-right">
                        <div className="ul">
                        <p> <span>{row.description}</span></p>
                        <p> <span className='double-tabeText'>{row.owner}</span><span>{row.ownerName}</span> </p>
                        <p> <span>{row.mapControl}</span></p>
                        <p> <span>{row.mapRisk}</span></p>
                        <p> <span>{row.mapFramework}</span></p>
                        <p> <span  className='double-tabeText'>{row.time}</span> <span style={{color:"#D0D0D4"}} >{row.date}</span></p>
                        <p > <span style={{color:"#0DB226"}}>{row.status}</span></p>
                        <p className='table-icons'> <span>{row.action}</span></p>
                        </div>
                        </div>
                        </div> ))}
          </div>
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
           </div>
          </div>
          <Activ8Pop actv8Pop={actv8Pop} setActv8Pop={setActv8Pop} handlePage={handlePage}/>
    </div>
  )
}

export default Activ8Body
