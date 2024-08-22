import { User, Phone, Trash2 } from "lucide-react";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";

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
        onClick={() => dispatch(deleteContactThunk(item.id))}
      >
        <Trash2 className={s.deleteIcon} size={14} /> Delete
      </button>
    </div>
  );
};

export default Contact;
