import React from 'react'
import UserTemplate from '../../templates/user-template'
import Unauthorized from '../../components/common/unauthorized/unauthorized'

const UnauthorizedPage = () => {
  return (
    <UserTemplate>
      <Unauthorized/>
    </UserTemplate>
  )
}

export default UnauthorizedPage