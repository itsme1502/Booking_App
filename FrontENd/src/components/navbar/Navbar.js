import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }

  const loginHandle = () => {
    navigate("/login");
  }

  const registerHandle = () => {
    navigate("/register");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">My Booking</span>
        </Link>
        {user ? 
        (
          <div className="navItems flex">
            <div>{user.username}</div>
            <button className="navButton" onClick={logoutHandle}>Logout</button>
          </div>
          ) : (
          <div className="navItems flex">
            <button className="navButton" onClick={registerHandle}>Register</button>
            <button className="navButton" onClick={loginHandle}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;