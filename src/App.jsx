import s from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/selectors";
import { fetchContactsThunk } from "./redux/contactsOps";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import clsx from "clsx";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={clsx(s.wrapper, "relative")}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && (
        <span className={s.loader}>
          <Loader />
        </span>
      )}
      {error && <h2>error</h2>}
    </div>
  );
}

export default App;
