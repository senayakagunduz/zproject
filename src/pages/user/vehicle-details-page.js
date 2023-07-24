import React, { useState } from "react";
import UserTemplate from "../../templates/user-template";
import Spacer from "../../components/common/spacer/spacer";
import PageHeader from "../../components/user/common/page-header/page-header";
import VehicleDetails from "../../components/user/vehicle-details/vehicle-details";
import { getVehicle } from "../../api/vehicle-service";

const VehicleDetailsPage = () => {
 
  return (
    <UserTemplate>
      <PageHeader title="Vehicles" />
      <Spacer />
      <VehicleDetails/>
      <Spacer/>
    </UserTemplate>
  );
};

export default VehicleDetailsPage;
