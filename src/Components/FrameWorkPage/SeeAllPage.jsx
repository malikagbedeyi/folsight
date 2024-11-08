import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/FrameWorkPages/seeall.scss'
import { useNavigate } from 'react-router-dom';

const SeeAllPage = ({page}) => {
    const navigate = useNavigate()
    const handlePage = () => {
        navigate('/frameworkPage')
    }

  return (
    <div className='seeall'>
         <div className="frameworkpageTopbar">
           <div className="container">Folsight</div></div>
      <div className="FrameWorkPageTop">
        <div className="container">
        <div className="FrameWorkPageTopComponent row">
            <div className="FrameWorkPageTopParent col-lg-8">
                <div className="FrameWorkPageTopChild">
                    <ul>
                        <li><a href="#">Deel </a>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></li>
                        <li><a href="#"> For business </a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></li>
                        <li><a href="#"> Organization & Group Management </a> </li>
                    </ul>
                </div>
            </div>
            <div className="FrameWorkPageTopParent col-lg-4">
                <div className="FrameWorkPageTopChild">
                   <div className="searchBox">
                    <input type="text" placeholder='search' />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
      <div className="seeallBody">
      <div className="container">
        <div className="seeallTittle"><h1>Organization & Group Management</h1></div>
        <div className="seeallLink">
        {/* onClick={() => handlePage(2)} className={page === 2 ? 'activeli' : ''} */}
            <ul>
                <li><a href="#/frameworkPage">How to Configure Data Change Policies                        </a> </li>
                <li ><a onClick={()=> handlePage(`${page}`)} >Global Payroll Entity Level Permissions                      </a> </li>
                <li><a href="#/frameworkPage_03">How to Configure Organization Structure and Worker Relations </a> </li>
                <li><a href="">About Groups on Deel                                         </a> </li>
                <li><a href=""> How to Create Groups and Add Group Admins                  </a> </li>
                <li><a href="">What Are The Different Roles For Group Admins In Deel?       </a> </li>
                <li><a href="">How to Use the Admin Role in Groups                          </a> </li>
                <li><a href="">How to Add Organization Admins                               </a> </li>
                <li><a href="">What Are the Different Roles for Organization Admins in Deel?</a> </li>
                <li><a href="">How to Review Admin Permissions?                             </a> </li>
                <li><a href="">How to Create Custom Group Roles on Deel                     </a> </li>
                <li><a href="">How to Move Contracts Between Groups on Deel                 </a> </li>
                <li><a href="">How to Manage Registration Files                             </a> </li>
                <li><a href="">What Are Entities and Organizations on Deel?                 </a> </li>
                <li style={{borderBottom:"none"}}><a href="">How to Archive Groups                                        </a> </li>
            </ul>
        </div>
      </div>
      </div>
      <div className=" frameworkpageFooter">
             <div className="container">Folsight</div>
                 </div>
    </div>
  )
}

export default SeeAllPage
