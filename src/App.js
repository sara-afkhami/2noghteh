import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import ThreePartPage from "./Components/ThreePartPage";
import Profile from "./Components/Profile";
import Career from "./Components/Career";
import ContactUs from "./Components/ContactUs";
import { GooSpinner } from "react-spinners-kit";
// import SmoothScroll from "smooth-scroll";
import "./App.css";
import SectionPage from "./Components/SectionPage";
import Team from "./Components/Team";
import NavBar from "./Components/Navbar/NavBar";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    setLandingPageData(JsonData);
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);
  return (
  <>
  {!done ? (
    
<div className="loading">
<GooSpinner size={100} color="#b3dac6" />
</div>
  ) : (
    <div className="app">
      <Router>
        {/* <Header /> */}
        <NavBar/>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home data={landingPageData.Home} />}
          />
          <Route
            exact
            path="/home"
            component={Home}
            data={landingPageData.Home}
          />
          <Route exact path="/artwork" component={Gallery} />
          <Route
            exact
            path="/threepartpage"
            component={() => (
              <ThreePartPage data={landingPageData.ThreePartPage} />
            )}
          />
          <Route
            exact
            path="/profile"
            component={() => <Profile data={landingPageData.ThreePartPage} />}
          />
          <Route
            exact
            path="/career"
            component={() => <Career data={landingPageData.Career} />}
          />
          <Route
            exact
            path="/contactUs"
            component={() => <ContactUs data={landingPageData.ContactUs} />}
          />
          <Route
            exact
            path="/digitalmarketing"
            component={() => <SectionPage data={landingPageData.DigitalMarketing} />}
          />
          <Route
            exact
            path="/contentcreation"
            component={() => <SectionPage data={landingPageData.ContentCreation} />}
          />
          <Route
            exact
            path="/filmandseries"
            component={() => <SectionPage data={landingPageData.FilmAndSeries} />}
          />
          <Route
            exact
            path="/team"
            component={() => <Team data={landingPageData.Team} />}
          />
        </Switch>
      </Router>
    </div>
  )}
  </>
  )
}
export default App;
