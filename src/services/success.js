import Swal from "sweetalert2";

export const success = (name) =>
  Swal.fire({
    position: "center",
    icon: "success",
    title: `Contact ${name} has been saved`,
    showConfirmButton: false,
    timer: 2500,
  });
