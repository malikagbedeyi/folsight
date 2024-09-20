import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './page/Home';
import RequestDemo from './page/RequestDemo';
import FrameWork01 from './page/FrameWork/FrameWork01';
import FrameWork02 from './page/FrameWork/FrameWork02';
import FrameWork03 from './page/FrameWork/FrameWork03';
import FrameWork04 from './page/FrameWork/FrameWork04';
import FrameWork05 from './page/FrameWork/FrameWork05';
import Register from './page/Register';
import Login from './page/Login';
import AboutUs from './page/Company/AboutUs';
import { useEffect, useState } from 'react';
import ScrollToTop from './ScrollToTop';
import LoadingSpinner from './LoadingSpinner';
import ContactUs from './page/Company/ContactUs';
import AuditRoom from './page/Product/AuditRoom';
import Compliance from './page/Product/Compliance';
import RiskCore from './page/Product/RiskCore';
import Plans from './page/Plans/Plans';
import Team from './page/Team/Team';
import NewsCaster from './NewsCaster';
import FrameWork06 from './page/FrameWork/FrameWork06';
function AppContent() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Show loading spinner

    const timeout = setTimeout(() => {
      setLoading(false); // Hide loading spinner after content is ready
    }, 2000); // Adjust timeout as needed

    return () => clearTimeout(timeout); // Clean up timeout
  }, [location.pathname]); // Trigger on route change
  // return (
  //   <div className="App">
  // <HashRouter>
  //   <ScrollToTop />
  //   <Routes>
  //     <Route path='/' element={<Home />} />
  //     <Route path='/request-demo' element={<RequestDemo />} />
  //     <Route path='/login' element={<Login />} />
  //     <Route path='/register' element={<Register />} />
  //     <Route path='/framework_01' element={<FrameWork01 />} />
  //     <Route path='/framework_02' element={<FrameWork02 />} />
  //     <Route path='/framework_03' element={<FrameWork03 />} />
  //     <Route path='/framework_04' element={<FrameWork04 />} />
  //     <Route path='/framework_05' element={<FrameWork05 />} />
  //     <Route path='/about_us' element={<AboutUs />} />
  //     </Routes>
  //     </HashRouter>
  //   </div>
  // );
  return (
    <>
      {loading && <LoadingSpinner />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/audit_room' element={<AuditRoom />} />
        <Route path='/compliance' element={<Compliance />} />
        <Route path='/risk_core' element={<RiskCore />} />
        <Route path='/framework_01' element={<FrameWork01 />} />
        <Route path='/framework_02' element={<FrameWork02 />} />
        <Route path='/framework_03' element={<FrameWork03 />} />
        <Route path='/framework_04' element={<FrameWork04 />} />
        <Route path='/framework_05' element={<FrameWork05 />} />
        <Route path='/framework_06' element={<FrameWork06 />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/contact_us' element={<ContactUs />} />
        <Route path='/team' element={<Team />} />
        <Route path='/request-demo' element={<RequestDemo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

function App() {
  // const handleClearNewsletterPreference = () => {
  //   localStorage.removeItem('newsletter'); // Clear only the newsletter data
  //   alert('Newsletter subscription preference has been cleared.');
  // };
  return (
    <div className="App">
       <HashRouter>
        <NewsCaster />
        <ScrollToTop />  
        <AppContent />
      </HashRouter>
      {/* <button onClick={handleClearNewsletterPreference} style={{ marginTop: '20px' }}>
        Clear Newsletter LocalStorage
      </button> */}
    </div>
  );
}

export default App;
// git add .
// git commit -m "Your commit message"
// git push