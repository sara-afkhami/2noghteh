import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Lottie from "react-lottie";
import gif from "../Lottie/JSON/content creation.webm.lottie.json";
import logo from "./logo.svg";

const Home = (props) => {
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    // lottie.loadAnimation({
    //   container: document.querySelector("#home-gif"),
    //   animationData: gif,
    // });

    setTimeout(() => {
      setDone(true);
    }, 4000);
  }, []);
  const defaultOptions = {
    loop: true,
    width: 500,
    autoplay: true,
    animationData: gif,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      {!done ? (
        <Loader />
      ) : (
        <>
        <div className="intro">
          <div className="col-md-4 intro-text main">
            <h1>
              {/* <strong>{props.data ? props.data.title : "Loading"}</strong> */}
              <img src={logo} alt="" className="logo-home"/>
              <span></span>
            </h1>
            <p><strong>{props.data ? props.data.preParagraph : "Loading"}</strong></p>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
          </div>
          <div className="col-md-8 intro-text animated-div" id="home-gif">
            <Lottie options={defaultOptions} height={400} width={600} margin={0} float={"right"} />
          </div>
        </div>
        {/*  */}
        </>
      )}
    </>
  );
};
export default Home;
