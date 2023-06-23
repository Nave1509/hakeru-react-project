import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const Footer = () => {
  const { user } = useAuth();
  return (
    <footer className="border-top py-1 text-center">
      <nav className="navbar w-100">
        <ul className="navbar-nav mx-auto mb-2 d-flex flex-row gap-2 justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          {user?.biz && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-cards">
                My Cards
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <span>
        Build Your<i className="bi bi-boxes mx-2"></i>Biz
      </span>
      <span>&copy;</span>
      <span className="mx-2">{new Date().getFullYear()}</span>
    </footer>
  );
};
export default Footer;
