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
import Requirement from './DashBoardPages/Compi.ai/Requirement';
import FrrameWork from './DashBoardPages/Compi.ai//Framework/FrrameWork';
import AboutFrameWork from './DashBoardPages/Compi.ai/Framework/AboutFrameWork';
import Activ8 from './DashBoardPages/Compi.ai/Activ8/Activ8';
import Activ8Body from './DashBoardPages/Compi.ai/Activ8/Activ8Body';
import AvailableActiv8 from './DashBoardPages/Compi.ai/Activ8/AvailableActiv8';
import AboutActiv8 from './DashBoardPages/Compi.ai/Activ8/AboutActiv8';

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [selectedItem, setSelectedItem]=useState(null)

  const handlePage = (id) => {
    setPage(id);
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return <FrrameWork page={page} handlePage={handlePage}  setSelectedItem={setSelectedItem} />;
        case 2:
          return <AboutFrameWork page={page} handlePage={handlePage}   selectedItem={selectedItem}/>;
      case 3:
        return <AdminUser />;
        case 4:
          return <Setting page={page} handlePage={handlePage} />;
      case 5:
        return <GeneralSetting />;
      case 6:
        return <ControlSetting />;
        case 7:
          return <Activ8 page={page} handlePage={handlePage}  setSelectedItem={setSelectedItem} />;
          case 8:
            return <Activ8Body page={page} handlePage={handlePage}  setSelectedItem={setSelectedItem}   selectedItem={selectedItem}/>;
            case 10:
              return <AboutActiv8  page={page} handlePage={handlePage}  setSelectedItem={setSelectedItem}   selectedItem={selectedItem}/>;
              case 9:
                return <AvailableActiv8  page={page} handlePage={handlePage}  setSelectedItem={setSelectedItem}   selectedItem={selectedItem}/>;
        case 16:  
          return <Requirement page={page} handlePage={handlePage} />;
          case 17:
        return <DashHome page={page} />;
      case 18:
        return <Administration />;
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
