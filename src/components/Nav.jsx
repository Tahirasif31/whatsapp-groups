import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <NavLink to={"/"} className={"link"}>
          <span className="logo">Whatsapp Communities</span>
        </NavLink>
        <ul>
          <li>
            <NavLink to={"/news"} className={"link"}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to={"/business"} className={"link"}>
              Business
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cricket"} className={"link"}>
              Cricket
            </NavLink>
          </li>
          <li>
            <NavLink to={"/pubg"} className={"link"}>
              Pubg
            </NavLink>
          </li>
          <li>
            <NavLink to={"/girls"} className={"link"}>
              Girls
            </NavLink>
          </li>
          <li>
            <NavLink to={"/others"} className={"link"}>
              Other
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"} className={"link"}>
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
