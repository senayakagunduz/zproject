import React from 'react'
import UserTemplate from '../../templates/user-template'
import ReservationDetails from '../../components/user/reservation/reservation-details'
import PageHeader from '../../components/user/common/page-header/page-header'
import Spacer from '../../components/common/spacer/spacer'
import Reservations from '../../components/user/reservation/reservations'

const ReservationDetailsPage = () => {
  return (
    <UserTemplate>
        <Spacer/>
      <Spacer/>
      <ReservationDetails/>
      <Spacer/>
    </UserTemplate>
  )
}

export default ReservationDetailsPage