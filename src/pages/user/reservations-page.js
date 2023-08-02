import React from 'react'
import UserTemplate from '../../templates/user-template'
import Reservations from '../../components/user/reservation/reservations'
import Spacer from '../../components/common/spacer/spacer'
import PageHeader from '../../components/user/common/page-header/page-header'

const ReservationsPage = () => {
  return (
    <UserTemplate>
       <PageHeader title="Reservation Details"/>
      <Spacer/>
      <Reservations/>
      <Spacer/>
    </UserTemplate>
  )
}

export default ReservationsPage