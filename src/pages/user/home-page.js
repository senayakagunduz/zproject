import React from 'react'
import UserTemplate from '../../templates/user-template'
import Slider from '../../components/user/home/slider/slider'
import BestOffers from '../../components/user/about/best-offers/best-offers'
import Spacer from '../../components/common/spacer/spacer'
import Team from '../../components/user/about/team/team'

const HomePage = () => {
  return (
    <UserTemplate>
      <Slider/>
      <Spacer/>
      <BestOffers/>
      <Spacer/>
      <Team/>
      <Spacer/>
    </UserTemplate>
  )
}

export default HomePage