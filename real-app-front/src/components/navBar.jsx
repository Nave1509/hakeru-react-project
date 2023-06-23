import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { user } = useAuth();
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theMode") || "light"
  );
  const htmlTag = document.getElementsByTagName("html")[0];

  useEffect(() => {
    htmlTag.setAttribute("data-bs-theme", themeMode);
    localStorage.setItem("theMode", themeMode);
  }, [themeMode]);

  return (
    <nav
      className="navbar navbar-expand-sm shadow-sm "
      aria-label="Fifth navbar example"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Build Your<i className="bi bi-boxes mx-2"></i>Biz
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " to="/about">
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

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {user ? (
              <li className="nav-item ">
                <NavLink className="nav-link" to="/sign-out">
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-in">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-up">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <button
          className="btn"
          onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
        >
          {themeMode === "light" ? (
            <i className="bi bi-moon"></i>
          ) : (
            <i className="bi bi-brightness-high"></i>
          )}
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
