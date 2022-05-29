import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Lottie from "react-lottie";
import gif from "../Lottie/JSON/content creation.webm.lottie.json";

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
        <div className="intro">
          {/* <video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
              <source src="" type="video/mp4">
            </video> */}

          <div className="col-md-6 intro-text main">
            <h1>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p><strong>{props.data ? props.data.preParagraph : "Loading"}</strong></p>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            <p>salaam</p>
          </div>
          <div className="col-md-6 intro-text main animated-div" id="home-gif">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
