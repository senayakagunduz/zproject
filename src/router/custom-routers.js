import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from '../pages/user/contact-page'
import PrivacyPolicyPage from '../pages/user/privacy-policy-page'
import VehiclePage from '../pages/user/vehicle-page'
import ProfilePage from '../pages/user/profile-page'
import ReservationsPage from '../pages/user/reservations-page'
import ReservationDetailsPage from '../pages/user/reservation-details-page'
import NotFoundPage from '../pages/common/not-found-page'
import AboutPage from '../pages/user/about-page'
import HomePage from '../pages/user/home-page'
import UnauthorizedPage from '../pages/common/unauthorized-page'
import VehicleDetailsPage from '../pages/user/vehicle-details-page'

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage/>}/>
        <Route path='privacy-policy' element={<PrivacyPolicyPage/>}/>
        <Route path='auth' element={<VehiclePage/>}/>
        <Route path='unauthorized' element={<UnauthorizedPage/>}/>

        <Route path='vehicles'>
          <Route index element={<VehiclePage/>}/>
          <Route path=':vehicleId' element={<VehicleDetailsPage/>}/> 
        </Route>

        <Route path='user'>
          <Route index element={<ProfilePage/>}/>

          <Route path='reservations'>
            <Route index element={<ReservationsPage/>}/>
            <Route path=':reservationId' element={<ReservationDetailsPage/>}/>
          </Route>

        </Route>

      <Route path="admin">
        
      </Route>  

      <Route path="*" element={<NotFoundPage/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default CustomRoutes