import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { fetchLogoutThunk } from "../../redux/auth/operations";
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.wrapper}>
      {isLoggedIn && <p className={s.username}>Welcome, {user.name}</p>}
      <button type="button" onClick={() => dispatch(fetchLogoutThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
