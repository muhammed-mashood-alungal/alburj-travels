// frontend/src/App.js
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Main from './Pages/Main';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Fragment>
   <Router>
    <Routes>
    <Route path='/' element={<Main />} />
    
    </Routes>
   </Router>
    </Fragment>
  
  );
}

export default App;
