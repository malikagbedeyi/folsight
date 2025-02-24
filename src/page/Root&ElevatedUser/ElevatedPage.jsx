import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/Root&ElevatedUser/elevated.scss'
import Img1 from '../../assets/Images/DashLogo.png'

const ElevatedPage = () => {
  return (
    <div className='elevated'>
      <div className="elevatedContainer">
        <div className="elevatedParent row">
        <div className="elevatedsidebar col-lg-3 col-md-3 col-sm-3">
            <div className="elevatedsidebarLogo">
            <img src={Img1} alt="Folsight Logo" />
            <h1>Folsight</h1>
            </div>
            <div className="elevatedsidebartext">
                <h1>Grc and Security Management Made easy</h1>
                <p>lorem jsjkodvn aocnkcnolx aojcb aojoi OAjdbuoeqai</p>
            </div>
        </div>
         <div className="elevatedChild col-lg-9 col-md-9 col-sm-9">
            <div className="elevatedChildtop">
                <a href="#/dashboard">Skip</a>
            </div>
            <div className="elevatedChildmiddle">
                <div className="elevatedChildmiddleBox"></div>
            </div>  
            <div className="elevatedChildBottom">
                <div className="elevatedChildButton">
                <button> <a className='buttons' href="#/dashboard">Skip</a></button>
                <button> <a href="#/dashboard">Next</a></button>
            </div>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default ElevatedPage
