import React from 'react'
import EditPackage from '../AdminComponents/EditPackage/EditPackage'
import { Route, Routes } from 'react-router-dom'
import EditDeal from '../AdminComponents/EditDeal/EditDeal'
function EditingPage() {
  return (
    <>
      <Routes>
        <Route path="/deal/:dealId" element={<EditDeal />} />
        <Route path="/package/:packageId" element={<EditPackage />} />
      </Routes>
    </>
  )
}

export default EditingPage
