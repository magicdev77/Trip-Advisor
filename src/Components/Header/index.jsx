import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarTop.module.css";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useContext } from "react";
import { BiPencil, BiHeart, BiBell } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const { token, setToken } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          <img
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
            alt="error"
          />
        </Link>
      </div>

      <div>
        <div>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <BiPencil /> Review
          </Link>
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <BiHeart /> Trips
          </Link>
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <BiBell /> Alerts
          </Link>
        </div>
        <div>
          {token ? (
            <p onClick={() => setToken(null)} style={{ color: "white" }}>
              {token}
            </p>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign in
            </Link>
          )}
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <MdOutlineShoppingCart /> Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
