import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";
const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && "activeLinkHeader");
};

const AuthNav = () => {
  return (
    <nav className={s.link}>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>

      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
    </nav>
  );
};

export default AuthNav;
