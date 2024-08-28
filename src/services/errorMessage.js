import Swal from "sweetalert2";

export const errorMessage = (message) =>
  Swal.fire({
    position: "center",
    icon: "error",
    title: `${message}`,
    showConfirmButton: false,
    timer: 2000,
  });
