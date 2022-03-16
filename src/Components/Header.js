import { Link } from "react-router-dom";
import logo from "./DONOGHTE_LOGO_Donoghte_En_Fulllogo.png";

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  let pageName = title.match(/[A-Z][a-z]+/g).join(" ");

  if (page === "home") {
    return (
      <Link to={"/"} className="nav-link">
        {pageName}
      </Link>
    );
  } else if (page === "team") {
    return (
      <Link to={`/${page}`} className="nav-link last-link">
        {pageName}
      </Link>
    );
  } else {
    return (
      <Link to={`/${page}`} className="nav-link">
        {pageName}
      </Link>
    );
  }
};
const Header = (props) => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <Link to="/">
            <a alt="logo" className="logo" href="#">
              <img alt="" src={logo}></img>
            </a>
          </Link>
        </div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <HeaderLink page="home" />
        <HeaderLink page="digitalMarketing" />
        <HeaderLink page="contentCreation" />
        <HeaderLink page="filmAndSeries" />
        <HeaderLink page="artWork" />
        <HeaderLink page="contactUs" />
        <HeaderLink page="career" />
        <HeaderLink page="team" />

        <Link to="/contactus">
          <button className="header-btn">contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
