import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { filterContact } from "../../redux/filters/slice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const searchStr = useSelector(selectNameFilter);

  return (
    <div className={s.findInputWrapper}>
      <label className={s.findInputLabel}>Find contacts by name</label>
      <input
        className={s.findInput}
        value={searchStr}
        onChange={(e) => dispatch(filterContact(e.target.value))}
        placeholder="Type name you wish to find "
      ></input>
    </div>
  );
};

export default SearchBox;
