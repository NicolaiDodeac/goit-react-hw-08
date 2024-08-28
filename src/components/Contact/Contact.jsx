import { User, Phone, Trash2 } from "lucide-react";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
import Swal from "sweetalert2";

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contactItem}>
      <div>
        <p className={s.contactName}>
          <User className={s.contactIcon} size={14} />
          {item.name}
        </p>
        <p className={s.contactName}>
          <Phone className={s.contactIcon} size={14} />
          {item.number}
        </p>
      </div>
      <button
        className={s.deleteButton}
        onClick={() =>
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteContactThunk(item.id));
              Swal.fire({
                title: "Deleted!",
                text: `Your ${item.name} has been deleted.`,
                icon: "success",
              });
            }
          })
        }
      >
        <Trash2 className={s.deleteIcon} size={14} /> Delete
      </button>
    </div>
  );
};

export default Contact;
