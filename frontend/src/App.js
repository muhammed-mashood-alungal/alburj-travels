// frontend/src/App.js
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Main from './Pages/Main';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './Pages/AboutPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';

function App() {
  
  return (
    <Fragment>
    <Router>
    <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/signup' element={<SignUpPage/>} />
    <Route path='/login' element={<LoginPage/>} />
    </Routes>
    </Router>
    </Fragment>
  
  );
}

export default App;
