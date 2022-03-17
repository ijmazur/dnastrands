import './App.css';
import Main from './components/Main.js'
import Login from './components/Login';
import MainUser from './components/mainuser/MainUser.js';
import SecondUser from './components/seconduser/SecondUser.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = (props) => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mainuser' element={<MainUser />} />
          <Route path='/seconduser' element={<SecondUser />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;