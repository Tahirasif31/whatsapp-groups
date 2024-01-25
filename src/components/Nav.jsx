import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={`${styles.nav} ${styles.navOpen}`}>
      <div className={styles.navContainer}>
        <NavLink to={"/"} className={styles.link}>
          <span className={styles.logo}>Whatsapp Communities</span>
        </NavLink>
        <nav className={styles.navigation}>
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
        </nav>
        <button className={styles.btnMobileNav}>
          <ion-icon class={styles.iconMobileNav} name="menu-outline"></ion-icon>
          <ion-icon
            name="close-outline"
            class={styles.iconMobileNav}
          ></ion-icon>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
