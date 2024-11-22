import React, { useState } from 'react'
import DashHome from './DashBoardBody/DashHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './DashBoardBody/SideBar';
import '../assets/scss/Dashboard/dashboard.scss'
const Dashboard = () => {
  const [page, setPage] = useState(1);

  const habdlepage = (id) => {
    setPage(id)
  }
  return (
    <div className='dashboard'>
      <div className="dashboardContainer" >
      <div className='dashWrapperLeft' >
            <SideBar />
        </div>
        <div className="dashWrapperRight">
          <div className="dashboardChild">
          <DashHome page={page} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
