import {BrowserRouter,HashRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/page/Home';
import Register from './Components/page/Register';
import Login from './Components/page/SignIn';
import SignIn from './Components/page/Login';

function App() {
  return (
    <div className="App">
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/request-demo' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signIn' element={<SignIn />} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
