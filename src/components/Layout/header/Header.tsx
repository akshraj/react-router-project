import { Link, NavLink } from "react-router-dom";
import avatarImg from "../../../assets/images/avatar-icon.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="site-logo">
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="vans"
        >
          Vans
        </NavLink>
        <Link className="login-link" to="login">
          <img
            src={avatarImg}
            className="login-icon"
            alt="login-avatar"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
