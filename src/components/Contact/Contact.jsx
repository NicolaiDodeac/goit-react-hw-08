import { User, Phone, Trash2 } from "lucide-react";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

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
        onClick={() => dispatch(deleteContact(item.id))}
      >
        <Trash2 className={s.deleteIcon} size={14} /> Delete
      </button>
    </div>
  );
};

export default Contact;
