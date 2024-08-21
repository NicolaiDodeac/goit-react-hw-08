import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );
  return (
    <ul className={s.contactList}>
      {filteredData.map((item) => (
        <li key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
