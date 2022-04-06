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
      <Link to={`/${page}`} className="nav-link">
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
//   const res = () =>{
//     console.log("in func")
//     // var element = document.getElementById("myTopnav");
//     //   element.classList.toggle("responsive");
//   } 
  return (

// <div className="topnav" id="myTopnav">
//   <a href="#home" className="active">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   <a href="" class="icon" onClick={res()}>
//     <i className="fa fa-bars"></i>
//   </a>
// </div>

    <nav class="navbar navbar-expand-lg text-white navbar-dark">
      <a class="navbar-brand" href="#">
        <Link to="/">
          <a alt="logo" className="logo" href="#">
            <img alt="" src={logo}></img>
          </a>
        </Link>
      </a>
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon custom-toggler"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav justify-content-center">
          {/* <HeaderLink page="home" /> */}
          <HeaderLink page="digitalMarketing" />
          <HeaderLink page="contentCreation" />
          <HeaderLink page="filmAndSeries" />
          <HeaderLink page="artWork" />
          <HeaderLink page="contactUs" />
          <HeaderLink page="career" />
          <HeaderLink page="team" />
          
        </div>
        <div className="navbar-btn">
          <Link to="/contactus">
            <button className="header-btn">contact us</button>
          </Link>
        </div>
      </div>
    </nav>


/////////////////////////////////////
    // <div className="nav">
    //   <input type="checkbox" id="nav-check" />
    //   <div className="nav-header">
    //     <div className="nav-title">
    //       <Link to="/">
    //         <a alt="logo" className="logo" href="#">
    //           <img alt="" src={logo}></img>
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="nav-btn">
    //     <label for="nav-check">
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </label>
    //   </div>

    //   <div className="nav-links">
    //     <HeaderLink page="home" />
    //     <HeaderLink page="digitalMarketing" />
    //     <HeaderLink page="contentCreation" />
    //     <HeaderLink page="filmAndSeries" />
    //     <HeaderLink page="artWork" />
    //     <HeaderLink page="contactUs" />
    //     <HeaderLink page="career" />
    //     <HeaderLink page="team" />

    //     <Link to="/contactus">
    //       <button className="header-btn">contact us</button>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Header;
