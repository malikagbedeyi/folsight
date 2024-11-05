import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/FrameWorkPages/frameworkPages_01.scss'
import FrameWorkPage_01 from './FrameWorkPage_01';
import FrameWorkPage_02 from './FrameWorkPage_02';
import FrameWorkPage_03 from './FrameWorkPage_03';
import FrameWorkPage_04 from './FrameWorkPage_04';
import FrameWorkPage_05 from './FrameWorkPage_05';
import FrameWorkPage_06 from './FrameWorkPage_06';
import FrameWorkPage_07 from './FrameWorkPage_07';
import FrameWorkPage_08 from './FrameWorkPage_08';
import FrameWorkPage_09 from './FrameWorkPage_09';
import FrameWorkPage_10 from './FrameWorkPage_10';

const FrameWorkPage = () => {
    const[page , setPage] = useState(1);

    const handlePage = (id) => {
        setPage(id);
    }
  return (
    <div className='FrameWorkPage_01'>
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
      <div className="FrameWorkPageBody">
        <div className="container">
            <div className="FrameWorkPageBodyComponent row">
                <div className="FrameWorkPageBodyParent col-lg-8">
                   <FrameWorkPage_01 page={page}/>
                   <FrameWorkPage_02 page={page}/>
                   <FrameWorkPage_03 page={page}/>
                   <FrameWorkPage_04 page={page}/>
                   <FrameWorkPage_05 page={page}/>
                   <FrameWorkPage_06 page={page}/>
                   <FrameWorkPage_07 page={page}/>
                   <FrameWorkPage_08 page={page}/>
                   <FrameWorkPage_09 page={page}/>
                   <FrameWorkPage_10 page={page}/>

                </div>
                <div className="FrameWorkPageBodyParentRight col-lg-4">
                    <div className="FrameWorkPageBodyChildRight">
                        <div className="searchArtilce">
                            <div className="searchTittle">
                                <p>Articles in this section</p>
                            </div>
                            <div className="searchArtilce_container">
                                <ul>
                                    <li  onClick={() => handlePage(1)} className={page === 1 ? 'activeli' : ''}>How to Configure Data Change Policies</li>
                                    <li  onClick={() => handlePage(2)} className={page === 2 ? 'activeli' : ''}>Global Payroll Entity Level Permissions</li>
                                    <li  onClick={() => handlePage(3)} className={page === 3 ? 'activeli' : ''}>How to Configure Organization Structure and Worker Relations</li>
                                    <li  onClick={() => handlePage(4)} className={page === 4 ? 'activeli' : ''}>About Groups on Deel</li>
                                    <li  onClick={() => handlePage(5)} className={page === 5 ? 'activeli' : ''}>How to Create Groups and Add Group Admins</li>
                                    <li  onClick={() => handlePage(6)} className={page === 6 ? 'activeli' : ''}>What Are The Different Roles For Group Admins In Deel?</li>
                                    <li  onClick={() => handlePage(7)} className={page === 7 ? 'activeli' : ''}>How to Use the Admin Role in Groups</li>
                                    <li  onClick={() => handlePage(8)} className={page === 8 ? 'activeli' : ''}>How to Add Organization Admins</li>
                                    <li  onClick={() => handlePage(9)} className={page === 9 ? 'activeli' : ''}>What Are the Different Roles for Organization Admins in Deel?</li>
                                    <li  onClick={() => handlePage(10)} className={page === 10 ? 'activeli' : ''}>How to Review Admin Permissions?</li>
                                </ul>
                                <div className="seemore">
                                    <a href="#/seeall">see more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" frameworkpageFooter">
             <div className="container">Folsight</div>
                 </div>
      </div>
    </div>
  )
}

export default FrameWorkPage
