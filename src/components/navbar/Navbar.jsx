import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <div className="logo">lamabooking</div>
        </Link>
        {user ? (
          user.details.username
        ) : (
          <div className="navItems">
            <button className="navButton">register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
}
