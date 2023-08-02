import axios from "axios";
import { settings } from "../helpers/settings";
import authHeader from "../helpers/functions/auth-header";

const API_URL = settings.apiURL;
export const isVehicleAvailable = (dto) => {
  const { carId, pickUpDateTime, dropOffDateTime } = dto;
  return axios.get(
    `${API_URL}/reservations/auth?carId=${carId}&pickUpDateTime=${pickUpDateTime}&dropOffDateTime=${dropOffDateTime}`,
    { headers: authHeader() }
  );
};

export const createReservation = (carId, reservation) => {
    return axios.post(
      `${API_URL}/reservations/add?carId=${carId}`,reservation,{
       headers: authHeader(),
    })
  };

  export const getReservationsByPage = async (
    page = 0,
    size = 20,
    sort = "pickUpTime",
    direction = "DESC"
  ) => {
    const response = await axios.get(
      `${API_URL}/reservations/auth/all?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,{
      headers:authHeader()
      });
    return response;
  };

  export const getReservation=async(id)=>{
    return axios.get(
      `${API_URL}/reservations/${id}/auth`,{
       headers: authHeader(),
    })
  }

