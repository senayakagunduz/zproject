import React, { useEffect, useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import SectionHeader from "../common/section-header/section-header";
import VehicleCard from "./vehicle-card";
import { getVehiclesByPage } from "../../../api/vehicle-service";
import Loading from "../../common/loading/loading";
import Spacer from "../../common/spacer/spacer";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async (page) => {
    try {
      const resp = await getVehiclesByPage(page);
      setVehicles(resp.data.content);
      console.log(vehicles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Container>
      <SectionHeader
        title1="Vehicle"
        title2=" Models"
        desc="To contribute to positive change and achieve our goals with many extraordinary"
      />
      <Spacer height={50} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Row className="g-5">
            {vehicles.map((vehicle) => (
              <Col key={vehicle.id} md={6} lg={4}>
                <VehicleCard {...vehicle} />
              </Col>
            ))}
          </Row>
          <Row>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Vehicles;
