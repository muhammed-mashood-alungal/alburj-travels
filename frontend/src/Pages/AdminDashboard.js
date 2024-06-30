import React, { useState } from 'react'
import Sidebar from '../AdminComponents/SideBar/SideBar'
import Home from '../AdminComponents/Home/Home'
import AddPackages from '../AdminComponents/AddPackages/AddPackages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddDeals from '../AdminComponents/AddDeals/AddDeals';
import AdminProfile from '../AdminComponents/AdminProfile/AdminProfile';
import Settings from '../AdminComponents/Settings/Settings';
import EditPackage from '../AdminComponents/EditPackage/EditPackage';
import EditDeal from '../AdminComponents/EditDeal/EditDeal';
import AddAdmin from '../AdminComponents/AddAdmin/AddAdmin';
function AdminDashboard() {
  
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home isAdmin={true} />} />
        <Route path="/add-packages" element={<AddPackages />} />
        <Route path="/edit-package" element={<EditPackage />} />
        <Route path="/add-deals" element={<AddDeals />} />
        <Route path="/edit-deal" element={<EditDeal />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<AddAdmin />} />
      </Routes>
      
    </>
  )
}

export default AdminDashboard
