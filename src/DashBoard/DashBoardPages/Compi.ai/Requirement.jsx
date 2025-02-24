import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import '../../../assets/scss/Dashboard/Compl.ai/requirement.scss'
import ComplTable from './ComplTable';
const Requirement = ({ page, handlePage }) => {
  return (
    <div className={page === 16 ? "requirement" : "requirement"}>
 <div className="navMenuContainer row">
      <div className="navMenuParent col-lg-12">
        <div className="navMenuChild">
          <div className="topWrapper">
            <div className="leftTopWrapper">
              <h1>Compl.ai</h1>  
              <p>Manage admin Lorem ipsum dolor sit amet, con sectetur adipi scing elit. </p>
            </div>
            <div className="rightTopWrapper">
              <div className="menuicon">
              <HelpOutlineIcon  className='topicons' />
              <div className="notification">
              <NotificationsNoneOutlinedIcon  className='topicons'/>
              <div className="notificationtext">2</div>
              </div>
            </div>
            <div className="menuProfile">
              <div className="profileImg">
                <img src="https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJXDfuohWIXSjYK4URY7EHT14A9FD8I7bTag2CdxoXFYCAHyuo1tYGcstif9nzqS6QQbulhhnF6b6tWOYgncjQKCt7ANbX1bo5rxmclOFKzVcKBviboJTva7K0xmiaM1R5TW-T30PlauOj~gB~D3OH3n6tTL-lIGb0QQtkQrikNpdtBlT~9m0Vfq2SWCMUhPSh2w19a~L4GlcTirkRznMcZRjaeVHfAU9ga~FBWDzP6XzaqajC1YskwMQQfxxa2dICLs5LRqKXRZ7T-0vEiilm4B~ChEHJ5RKRTIgRT0jNdbnRFG4cWHlq~NJHcudFVHGPnt4kOWShQIkZKSUpdheQ__" alt="" />
              </div>
              <div className="profileText">
                <p>Felix Adam</p>
                <span>Root User</span>
              </div>
            </div>
            </div>
          </div>
          <div className="buttomWrapper">
            <div className="leftButtom">
            <button>Dashboard</button>
            <button>FrameWork</button>
            <button className='complactive'>Requirement</button>
            <button>control</button>
            <button>Gap assessment</button>
            </div>
            <div className="rightButtom">
              <button>Create Requirement</button>
            </div>
          </div>
        </div>
      </div>
      <div className="requirementcontainer">
        <div className="requirementparent">
          <div className="requirementchild">
            <div className="topchild">
              <div className="topchildText">
                <p>Requirements</p>
              </div>
              <div className="topchildItems">
                <p>srot:</p>
                <div className="topchildItemsbox1">
                  <span>All</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </div>
                <div className="topchildItemsbox" style={{background:"#000", color:"#fff"}}>Generate</div>
                <div className="topchildItemsbox">Import</div>
              </div>
            </div>
           <div className="tableChild">
            <div className="complTable">
           <div className="tableHead">
              <div className="tableHeadbox">Reference ID</div>
              <div className="tableHeadbox">Title</div>
                <div className="tableHeadbox">Description</div>
                <div className="tableHeadbox">Owner</div>
                <div className="tableHeadbox">Map Control</div>
                <div className="tableHeadbox">Map Risk</div>
                <div className="tableHeadbox">Map Framework</div>
                <div className="tableHeadbox">Date</div>
                <div className="tableHeadbox">Status</div>
                <div className="tableHeadbox">Actions</div>
                </div>
            <ComplTable />
            <ComplTable />
            <ComplTable />
            <ComplTable />
            <ComplTable />
            <ComplTable />
            <ComplTable />
            <ComplTable />
           </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Requirement
