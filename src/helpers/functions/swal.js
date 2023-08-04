import Swal from "sweetalert2";

export const question=(title,text)=>{
  return Swal.fire({
    title:title,
    text:text,
    icon: 'question',
    showCancelButton: true,
  })
}
export const toasts=(title,icon="success",timer=4000)=>{
    //title "success,error,info,warning,question" olabilir
    Swal.fire({
        icon,
        title,
        showConfirmButton: true,
        timer,
      }) 
}

export const validCheck = (field, obj) => {
  const myObject = {
      isValid: obj.touched[field] && !obj.errors[field],
      isInvalid: obj.touched[field] && obj.errors[field]
  }
  return myObject;
};

