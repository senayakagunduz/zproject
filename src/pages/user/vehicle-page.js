import React from 'react'
import UserTemplate from '../../templates/user-template'
import PageHeader from '../../components/user/common/page-header/page-header'
import Spacer from '../../components/common/spacer/spacer'
import Vehicles from '../../components/user/vehicles/vehicles'

const VehiclePage = () => {
  return (
    <UserTemplate>
      <PageHeader/>
      <Spacer/>
      <Vehicles/>
      <Spacer/>
    </UserTemplate>
  )
}

export default VehiclePage