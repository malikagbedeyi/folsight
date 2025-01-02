// // import React, { useState } from 'react'
// // import DashHome from './DashBoardBody/DashHome'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import SideBar from './DashBoardBody/SideBar';
// // import '../assets/scss/Dashboard/dashboard.scss';
// // import Administration from './DashBoardPages/Administration/Administration';
// // import AdminUser from './DashBoardPages/Administration/AdminUser';
// // import Setting from './DashBoardPages/DashSetting/Setting';
// // import GeneralSetting from './DashBoardPages/DashSetting/GeneralSetting';
// // import ControlSetting from './DashBoardPages/DashSetting/ControlSetting';

// // const Dashboard = ({handleSettingPage}) => {
// //   const [page, setPage] = useState(1);

// //   const handlePage = (id) => {
// //     setPage(id)
// //   }

// //   return (
// //     <div className='dashboard'>
// //       <div className="dashboardContainer">
// //       <div className='dashWrapperLeft '>
// //      <aside>
// //        <SideBar page={page} handlePage={handlePage} />
// //      </aside>
// //         </div>
// //         <div className="dashWrapperRight">
// //           <div className="dashboardChild">
// //           {/* <DashHome page={page} /> */}
// //           <Administration page={page}/>
// //           <AdminUser page={page} />
// //           <Setting page={page}  handlePage={handlePage}/>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Dashboard

// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import DashHome from './DashBoardBody/DashHome';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import SideBar from './DashBoardBody/SideBar';
// import '../assets/scss/Dashboard/dashboard.scss';
// import Administration from './DashBoardPages/Administration/Administration';
// import AdminUser from './DashBoardPages/Administration/AdminUser';
// import Setting from './DashBoardPages/DashSetting/Setting';
// import GeneralSetting from './DashBoardPages/DashSetting/GeneralSetting';
// import ControlSetting from './DashBoardPages/DashSetting/ControlSetting';

// const Dashboard = ({settingPage}) => {
//   const [page, setPage] = useState(1);

//   const handlePage = (id) => {
//     setPage(id);
//   };

//   return (
//     <div className='dashboard'>
//       <div className="dashboardContainer">
//         <div className='dashWrapperLeft'>
//           <aside>
//             <SideBar page={page} handlePage={handlePage} />
//           </aside>
//         </div>
//         <div className="dashWrapperRight">
//           <div className="dashboardChild">
//             <Routes>
//   <Route path="/" element={<DashHome />} />
//    <Route path="/general-setting" element={<GeneralSetting />} />
//    <Route path="/control-setting" element={<ControlSetting />} />
// </Routes> 
//   {page === 1 && <Administration />}
//   {page === 2 && <AdminUser />}
//   {page === 11 && <Setting handlePage={handlePage} />}
//   {settingPage === 1 && <GeneralSetting />}
//   {settingPage === 2 && <ControlSetting />}
//      </div>
//           {/* <div className="dashboardChild">
// </div> */}
//   </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from 'react';
import DashHome from './DashBoardBody/DashHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './DashBoardBody/SideBar';
import '../assets/scss/Dashboard/dashboard.scss';
import Administration from './DashBoardPages/Administration/Administration';
import AdminUser from './DashBoardPages/Administration/AdminUser';
import Setting from './DashBoardPages/DashSetting/Setting';
import GeneralSetting from './DashBoardPages/DashSetting/GeneralSetting';
import ControlSetting from './DashBoardPages/DashSetting/ControlSetting';
import Requirement from './DashBoardPages/DashSetting/Compi.ai/Requirement';

const Dashboard = () => {
  const [page, setPage] = useState(1);

  const handlePage = (id) => {
    setPage(id);
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return <DashHome page={page} />;
      case 2:
        return <Administration />;
      case 3:
        return <AdminUser />;
        case 4:
          return <Setting page={page} handlePage={handlePage} />;
      case 5:
        return <GeneralSetting />;
      case 6:
        return <ControlSetting />;
        case 7:
          return <Requirement page={page} handlePage={handlePage} />;
      default:
        return <DashHome page={page} />;
    }
  };
  
  

  return (
    <div className='dashboard'>
      <div className="dashboardContainer">
        <div className='dashWrapperLeft'>
          <aside>
            <SideBar page={page} handlePage={handlePage} />
          </aside>
        </div>
        <div className="dashWrapperRight">
          <div className="dashboardChild">
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
