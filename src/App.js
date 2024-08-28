import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/page/Home';
import SignIn from './Components/page/Login';
import RequestDemo from './Components/page/RequestDemo';
import FrameWork01 from './Components/page/FrameWork/FrameWork01';
import FrameWork02 from './Components/page/FrameWork/FrameWork02';
import FrameWork03 from './Components/page/FrameWork/FrameWork03';
import FrameWork04 from './Components/page/FrameWork/FrameWork04';
import FrameWork05 from './Components/page/FrameWork/FrameWork05';
import Register from './Components/page/Register';
import Login from './Components/page/Login';
import AboutUs from './Components/page/AboutUs';
import { useEffect, useState } from 'react';
import ScrollToTop from './ScrollToTop';
import LoadingSpinner from './LoadingSpinner';

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
        <Route path='/request-demo' element={<RequestDemo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/framework_01' element={<FrameWork01 />} />
        <Route path='/framework_02' element={<FrameWork02 />} />
        <Route path='/framework_03' element={<FrameWork03 />} />
        <Route path='/framework_04' element={<FrameWork04 />} />
        <Route path='/framework_05' element={<FrameWork05 />} />
        <Route path='/about_us' element={<AboutUs />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <AppContent />
      </HashRouter>
    </div>
  );
}

export default App;
