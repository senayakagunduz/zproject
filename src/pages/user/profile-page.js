import React from 'react'
import UserTemplate from '../../templates/user-template'
import Spacer from '../../components/common/spacer/spacer'
import Profile from '../../components/user/profile/profile'
import PageHeader from '../../components/user/common/page-header/page-header'

const ProfilePage = () => {
  return (
    <UserTemplate>
      <PageHeader title="Profile"/>
      <Spacer/>
      <Profile/>
      <Spacer/>
    </UserTemplate>
  )
}

export default ProfilePage