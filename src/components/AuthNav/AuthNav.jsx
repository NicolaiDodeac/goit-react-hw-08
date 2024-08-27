import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && "activeLinkHeader");
};

const AuthNav = () => {
  return (
    <>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>

      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;
