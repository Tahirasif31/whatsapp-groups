import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <NavLink to={"/"} className={styles.link}>
          <span className={styles.logo}>Whatsapp Communities</span>
        </NavLink>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NavLink to={"/news"} className={styles.link}>
              News
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to={"/business"} className={styles.link}>
              Business
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to={"/cricket"} className={styles.link}>
              Cricket
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to={"/pubg"} className={styles.link}>
              Pubg
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to={"/girls"} className={styles.link}>
              Girls
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to={"/others"} className={styles.link}>
              Other
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to={"/contact-us"} className={styles.link}>
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
