// frontend/src/App.js
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Main from './Pages/Main';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './Pages/AboutPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import Packagedetails from './Pages/Packagedetails';
import DealDetails from './Pages/DealDetails';
import AdminDashboard from './Pages/AdminDashboard';
import AdminLoginPage from './Pages/AdminLoginPage';
import AddReviewPage from './Pages/AddReviewPage';
import ScrollToTop from './Components/ScrollToTop';
import AllPackages from './Pages/AllPackages';
import AllDealsPage from './Pages/AllDealsPage';
import ContactUs from './Components/ContactUs/ContactUs';
import EditingPage from './Pages/EditingPage';
import ShowDetailsPage from './Pages/ShowDetailsPage';
import { AuthProvider } from './Contexts/authContext';
function App() {
  
  return (
    <AuthProvider>
    <Fragment>
    <Router>
      <ScrollToTop/>
    <Routes>
    
    <Route path='/' element={<Main />} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/signup' element={<SignUpPage/>} />
    <Route path='/login' element={<LoginPage/>} /> 
    <Route path='/package/:packageId' element={<Packagedetails/>} />
    <Route path='/packages' element={<AllPackages/>} />
    <Route path='/deal/:dealId' element={<DealDetails/>} />
    <Route path='/deals' element={<AllDealsPage/>} />
    <Route path='/review' element={<AddReviewPage/>} />
    <Route path='/contact' element={<ContactUs/>} />
    
    <Route path='/admin/*' element={<AdminDashboard/>} />
    <Route path='/admin/login' element={<AdminLoginPage/>} />
    <Route path='/admin/show/*' element={<ShowDetailsPage/>}/>
    <Route path='/admin/edit/*' element={<EditingPage/>}/>
    </Routes>
    </Router>
    </Fragment>
    </AuthProvider>
  );
}

export default App;
