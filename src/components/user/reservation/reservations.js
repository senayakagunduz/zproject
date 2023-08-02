import React, { useEffect, useState } from "react";
import { Container, Pagination, Row, Spinner, Table } from "react-bootstrap";
import { getReservationsByPage } from "../../../api/reservation-service";
import { formatDateTime } from "../../../helpers/functions/date-time";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
    const [loading, setLoading]=useState(true);
    const [reservations, setReservations]=useState([]);
    const [paging, setPaging] = useState({});
    const navigate=useNavigate();

   const loadData=async(page)=>{
    try {
        const resp=await getReservationsByPage(page);
        const {totalPages, pageable, content }=resp.data;
        setReservations(content);
        setPaging({ totalPages, pageNumber: pageable.pageNumber });
        console.log(reservations)
       
    } catch (err) {
       console.log(err); 
    }finally{
        setLoading(false);
    }
   } 
   useEffect(()=>{
    loadData(0);
   },[])
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Vehicle</th>
            <th>Pickup</th>
            <th>Dropoff</th>
          </tr>
        </thead>
        <tbody>
        {loading && <tr><td colSpan={4} className="text-center"><Spinner animation="border" size="sm"/></td></tr>}
            {
               reservations.map((item,index)=>(
                //her satırda dinamil bir router oluşuyor
                <tr key={item.id} onClick={()=>navigate(`/user/reservations/${item.id}`)} style={{cursor:"pointer"}}>
                <td>{index+1}</td>
                <td>{item.car.model}</td>
                <td>{item.pickUpLocation} - {formatDateTime(item.pickUpTime)}</td>
                <td>{item.dropOffLocation} - {formatDateTime(item.dropOffTime)}</td>
              </tr>
               )) 
            }
        </tbody>
      </Table>
      <Row className="mt-5">
              <Pagination className="justify-content-center align-center">
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
    </Container>
  );
};

export default Reservations;
