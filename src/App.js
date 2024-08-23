import {BrowserRouter,HashRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/page/Home';
import Register from './Components/page/Register';
import Login from './Components/page/SignIn';
import SignIn from './Components/page/Login';
import FrameWork01 from './Components/page/FrameWork/FrameWork01';

function App() {
  return (
    <div className="App">
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/request-demo' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/framework_01' element={<FrameWork01 />} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
