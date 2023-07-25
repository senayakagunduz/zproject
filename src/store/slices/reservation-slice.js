import {createSlice} from "@reduxjs/toolkit";

const reservationSlice=createSlice({
    name:"reservation",
    initialState:{
        vehicle:null,
        reservation:null,
    },
    reducers:{
        setVehicle:(state, action) =>{
            state.vehicle=action.payload;
        },
        setReservation:(state, action)=>{
            state.reservation=action.payload;
        }
    }
});

export const {setReservation, setVehicle}=reservationSlice.actions;
export default reservationSlice.reducer;