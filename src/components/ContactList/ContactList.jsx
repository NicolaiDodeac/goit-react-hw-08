import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const filteredData = useSelector(selectFilteredContacts);
  if (filteredData.length === 0) {
    return <p>No contacts found with these details</p>;
  }
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
