/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarTop.module.css";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useContext } from "react";
import { BiPencil, BiHeart, BiBell, BiLock } from "react-icons/bi";
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
            <BiPencil /> <span className={styles.navText}>Review</span>
          </Link>
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <BiHeart /> <span className={styles.navText}>Trips</span>
          </Link>
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <BiBell /> <span className={styles.navText}>Alerts</span>
          </Link>
        </div>
        <div>
          {token ? (
            <p onClick={() => setToken(null)} style={{ color: "white" }}>
              {token}
            </p>
          ) : (
            <a
              style={{ textDecoration: "none", color: "white" }}
            >
              <BiLock /> <span className={styles.navText}>Sign in</span>
            </a>
          )}
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <MdOutlineShoppingCart /> <span className={styles.navText}>Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
