import { HashRouter, Route, Routes } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import JsonData from "./data/data.json";
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
import TeamTwo from "./Components/TeamTwo";

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
          {/* <Header /> */}

          <HashRouter>
            {/* <Suspense fallback={loading}> */}
            <NavBar />
            <Routes>
              <Route
                exact
                path="/"
                name = "home"
                element ={ <Home data={landingPageData.Home } />}
              />
              <Route exact path="/artwork" name = "artwork"  element ={<Gallery/>} />
              <Route
                exact
                path="/threepartpage"
                name = "three part page"  element ={<ThreePartPage data={landingPageData.ThreePartPage} />}
              />
              <Route
                exact
                path="/profile"
                name = "profile"  element ={<Profile data={landingPageData.ThreePartPage} />}
              />
              <Route
                exact
                path="/career"
                name = "career"  element ={<Career data={landingPageData.Career} />}
              />
              <Route
                exact
                path="/contactUs"
                name = "contact us"  element ={<ContactUs data={landingPageData.ContactUs} />}
                
              />
              <Route
                exact
                path="/digitalmarketing"
                name = "digital marketing"  element ={<SectionPage data={landingPageData.DigitalMarketing} />}
                
              />
              <Route
                exact
                path="/contentcreation"
                name = "content creation"  element ={<SectionPage data={landingPageData.ContentCreation} />}
              />
              <Route
                exact
                path="/filmandseries"
                name = "film and series"  element ={<SectionPage data={landingPageData.FilmAndSeries} />}
              />
              <Route
                exact
                path="/team"
                name = "team two"  element ={<TeamTwo />}
              />
              <Route
                exact
                path="/teams"
                name = "team"  element ={<Team data={landingPageData.Team} />}
              />
              {/* <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} /> */}
            </Routes>
            {/* </Suspense> */}
          </HashRouter>
        </div>
      )}
    </>
  );
}
export default App;
