import React, { useEffect, useState } from "react";
import { getVehicle } from "../../../api/vehicle-service";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/slices/hooks";
import { setVehicle } from "../../../store/slices/reservation-slice";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import Spacer from "../../common/spacer/spacer";
import {
    GiCarDoor,
    GiCarSeat,
    GiGearStickPattern,
    GiComputerFan,
    GiCalendarHalfYear,
} from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { MdOutlineLuggage } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import Loading from "../../../pages/common/loading";
import { settings } from "../../../helpers/settings";
import BookingForm from "../vehicles/booking-form/booking-form"
import "./vehicle-details.scss";

const VehicleDetails = () => {
    const vehicle=useAppSelector((state)=>state.reservation.vehicle);
    const carDetails = [
        {
            id: 1,
            title: "Model: ",
            icon: <FaCar />,
            info: vehicle?.model,
        },
        {
            id: 2,
            title: "Doors: ",
            icon: <GiCarDoor />,
            info: vehicle?.doors,
        },
        {
            id: 3,
            title: "Seats: ",
            icon: <GiCarSeat />,
            info: vehicle?.seats,
        },
        {
            id: 4,
            title: "Luggage: ",
            icon: <MdOutlineLuggage />,
            info: vehicle?.luggage,
        },
        {
            id: 5,
            title: "Transmission: ",
            icon: <GiGearStickPattern />,
            info: vehicle?.transmission,
        },
        {
            id: 6,
            title: "Air Conditioning: ",
            icon: <GiComputerFan />,
            info: vehicle?.airConditioning ? "Yes" : "No",
        },
        {
            id: 7,
            title: "Fuel Type: ",
            icon: <BsFuelPump />,
            info: vehicle?.fuelType,
        },
        {
            id: 8,
            title: "Age: ",
            icon: <GiCalendarHalfYear />,
            info: vehicle?.age,
        },
      ];
  const [loading, setLoading]=useState(true);
  const {vehicleId} = useParams();
  const dispatch=useAppDispatch();
 

  const loadData = async () => {
    try {
      const resp = await getVehicle(vehicleId);
      dispatch(setVehicle(resp.data))
    } catch(err) {
        console.log(err)
    }finally{
        setLoading(false)
    };
  };
  useEffect(() => {
     // eslint-disable-next-lin
    loadData();
  }, []);

  return (
    <Container className="vehicle-details">
        {loading ?( <Loading/>) :
        ( <Row>
            <Col md={8}>
                <div className="title ">
                    <h1>{vehicle?.model}</h1>
                    <h3><Badge bg="primary">${vehicle?.pricePerHour}/hour</Badge></h3>
                </div>
                <Card>
                    <img src={`${settings.apiURL}/files/display/${vehicle?.image}`} alt="" className="img-fluid" />
                </Card>
                <Spacer height={30}/>

                <h2>Property Highlights</h2>
                <Row xs={2} md={4} className="detail-card">
                {
                    carDetails.map((detail) => (
                        <Col key={detail.id}>
                            {detail.icon}
                            {/* {vehicle.model} */}
                            <span>{detail.title}</span>
                            {detail.info}
                        </Col>
                    ))}
                </Row>
                
            </Col>
            <Col md={4}>
               <BookingForm/>
            </Col>
        </Row>) }
       

    </Container>
  )
};

export default VehicleDetails;
