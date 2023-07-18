import React from "react";
import UserTemplate from "../../templates/user-template";
import BestOffers from '../../components/user/about/best-offers/best-offers'
import Spacer from '../../components/common/spacer/spacer'
import Team from '../../components/user/about/team/team'
import WhatWeDo from '../../components/user/about/what-we-do/what-we-do'
import PageHeader from "../../components/user/common/page-header/page-header";

const AboutPage = () => {
  return (
    <UserTemplate>
      <PageHeader title={"About Us"}/>
      <Spacer/>
      <BestOffers/>
      <Spacer/>
      <Team/>
      <Spacer/>
      <WhatWeDo/>
    </UserTemplate>
  );
};

export default AboutPage;
