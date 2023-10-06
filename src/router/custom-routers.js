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
import ScrollToTop from '../components/common/scroll-to-top/scroll-to-top'
import Auth from '../components/common/auth/auth'
import ProtectedRoute from './protected-route'
import AdminDashboardPage from '../pages/admin/admin-dashboard-page'
import ContactMessagesPages from '../pages/admin/admin-contact-messages-page'
import AdminContactMessagesPage from '../pages/admin/admin-contact-messages-page'
import AdminContactMessageEditPage from '../pages/admin/admin-contact-messages-edit-page'
import AdminUsersPage from '../pages/admin/admin-users-page'
import AdminUsersEditPage from '../pages/admin/admin-users-edit-page'

const CustomRoutes = () => {
  return (
    <BrowserRouter>
     <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage/>}/>
        <Route path='privacy-policy' element={<PrivacyPolicyPage/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='unauthorized' element={<UnauthorizedPage/>}/>

        <Route path='vehicles'>
          <Route index element={<VehiclePage/>}/>
          <Route path=':vehicleId' element={<VehicleDetailsPage/>}/> 
        </Route>

        <Route path='user'>
          <Route index element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>

          <Route path='reservations'>
            <Route index element={<ProtectedRoute><ReservationsPage/></ProtectedRoute>}/>
            <Route path=':reservationId' element={<ProtectedRoute><ReservationDetailsPage/></ProtectedRoute>}/>
          </Route>

        </Route>

      <Route path="admin">
        <Route index element={<ProtectedRoute admin={true}><AdminDashboardPage/></ProtectedRoute>}/>
        <Route path="contact-messages">
          <Route index element={<ProtectedRoute admin={true}><AdminContactMessagesPage/></ProtectedRoute>}/>
          <Route path=":messageId"  element={<ProtectedRoute admin={true}><AdminContactMessageEditPage/></ProtectedRoute>}/>
        </Route>
        <Route path='users'>
          <Route index element={<ProtectedRoute admin={true}><AdminUsersPage/></ProtectedRoute>}/>
          <Route path=":userId" element={<ProtectedRoute admin={true}><AdminUsersEditPage/></ProtectedRoute>}/>
        </Route>
      </Route>  

      <Route path="*" element={<NotFoundPage/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default CustomRoutes