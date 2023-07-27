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
