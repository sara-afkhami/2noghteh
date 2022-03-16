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
import Di from "./Components/Di";

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
        <Header />
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
            component={() => <Career data={landingPageData.ThreePartPage} />}
          />
          <Route
            exact
            path="/contactUs"
            component={() => <ContactUs data={landingPageData.ContactUs} />}
          />
          <Route
            exact
            path="/digitalmarketing"
            component={() => <Di data={landingPageData.DigitalMarketing} />}
          />
          <Route
            exact
            path="/contentcreation"
            component={() => <Di data={landingPageData.ContentCreation} />}
          />
          <Route
            exact
            path="/filmandseries"
            component={() => <Di data={landingPageData.FilmAndSeries} />}
          />
          <Route
            exact
            path="/team"
            component={() => <Di data={landingPageData.FilmAndSeries} />}
          />
        </Switch>
      </Router>
    </div>
  )}
  </>
  )
}
export default App;
