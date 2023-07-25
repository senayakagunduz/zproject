import moment from 'moment';
export const combineDateAndTime=(date,time)=>{
    return moment(`${date} ${time}`).format("MM/DD/YYYY HH:mm:ss");
  }
  export const getCurrentDate=()=>{
    return moment().format("YYYY-MM-DD");
  }
  export const checkDates=(dates)=>{
    const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = dates;
  
    const pickUpDateTime=moment(`${pickUpDate} ${pickUpTime}`);
    const dropOffDateTime = moment(`${dropOffDate} ${dropOffTime}`);
  
    return dropOffDateTime > pickUpDateTime.add(1, "h");
  
  }
  
  export const checkExpireDate=(date)=>{
    if(!date) return false;
    if(date.includes("_")) return false;
  
    const expireDate=moment(date, "MM/YY").add(1,"month").add(-1,"day");
  
    if(!expireDate.isValid()) return false;
    if(expireDate<moment()) return false;
  
    return true;
  }
  
  export const getDate = (dateTime) => {
    return moment(dateTime).format("YYYY-MM-DD")
  }
  
  export const getTime = (dateTime) => {
    return moment(dateTime).format("HH:mm")
  } 