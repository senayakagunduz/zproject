import React, { useEffect, useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import SectionHeader from "../common/section-header/section-header";
import VehicleCard from "./vehicle-card";
import { getVehiclesByPage } from "../../../api/vehicle-service";
import Loading from "../../common/loading/loading";
import Spacer from "../../common/spacer/spacer";
import "./vehicles.scss"

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paging, setPaging] = useState({});

  const loadData = async (page) => {
    try {
      const resp = await getVehiclesByPage(page, 6);
      const { totalPages, pageable } = resp.data;
      setVehicles(resp.data.content);
      setPaging({ totalPages, pageNumber: pageable.pageNumber });
      console.log(vehicles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData(0);
  }, []);
  return (
    <Container className="vehicles">
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
          {paging.totalPages > 1 && (
            <Row className="mt-5 justify-content-center">
              <Pagination>
                <Pagination.First onClick={()=>loadData(0)} />
                <Pagination.Prev onClick={()=>loadData(paging.pageNumber-1)}/>
                {[...Array(paging.totalPages)].map((item, index) => (
                  <Pagination.Item
                    active={index === paging.pageNumber}
                    key={index}
                    onClick={()=> index !== paging.pageNumber && loadData(index)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next onClick={()=>loadData(paging.pageNumber+1)}/>
                <Pagination.Last onClick={()=>loadData(paging.totalPages-1)} />
              </Pagination>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default Vehicles;
