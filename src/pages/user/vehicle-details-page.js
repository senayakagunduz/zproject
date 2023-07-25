import React from "react";
import UserTemplate from "../../templates/user-template";
import Spacer from "../../components/common/spacer/spacer";
import PageHeader from "../../components/user/common/page-header/page-header";
import VehicleDetails from "../../components/user/vehicle-details/vehicle-details";
import { useAppSelector } from "../../store/slices/hooks";

const VehicleDetailsPage = () => {
   const vehicle=useAppSelector(state=>state.reservation.vehicle);
  return (
    <UserTemplate>
      <PageHeader title={vehicle?.model} />
      <Spacer />
      <VehicleDetails/>
      {/* <Container className="vehicle-details">
                <Row>
                    {loading ? (
                        <Loading height="500px" />
                    ) : (
                        <>
                            <Col xl={8}>
                                <DetailsPanel />
                            </Col>
                            <Col xl={4}>
                                <BookingForm />
                            </Col>
                        </>
                    )}
                </Row>
            </Container> */}
      <Spacer/>
    </UserTemplate>
  );
};

export default VehicleDetailsPage;
