import React from 'react'
import { getVehicle } from '../../../api/vehicle-service';

const VehicleDetails = () => {
    const {}=useParams();
    const loadData=async()=>{
        try {
          const resp=await getVehicle();
        } catch (error) {
          
        }
       }
    useEffect(()=>{

    },[])
  return (
    <div>VehicleDetails</div>
  )
}

export default VehicleDetails