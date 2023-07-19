import Swal from "sweetalert2";

export const toasts=(title,icon="success",timer=4000)=>{
    //title "success,error,info,warning,question" olabilir
    Swal.fire({
        position: 'top-end',
        icon,
        title,
        showConfirmButton: false,
        timer,
      })
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'Your work has been saved',
      //   showConfirmButton: false,
      //   timer: 1500
      // })
}
