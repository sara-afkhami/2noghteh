import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Lottie from "react-lottie";
import gif1 from "../Lottie/JSON/digital market.webm.lottie.json";
import gif2 from "../Lottie/JSON/content creation.webm.lottie.json";
import gif3 from "../Lottie/JSON/film & series.webm.lottie.json";
// let gifs = [];

const SectionPage = (props) => {
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);
  let gifs = [gif1, gif2, gif3];
  const printItems = (data) => {
    let listItems = data.items.map((item) => <li>{item}</li>);
    return listItems;
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: gifs[props.data.gif],
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
          <div className="col-md-5 intro-text section-page">
            <h1>
              <strong>{props.data ? props.data.title : "Loading"}</strong>
              <span></span>
            </h1>
            <p><strong>{props.data ? props.data.paragraph : "Loading"}</strong></p>
            <p><ul>{printItems(props.data)}</ul></p>
            <button className="more-btn"><strong>More</strong></button>
          </div>
          <div className="col-md-7 intro-text animated-div" id="home-gif">
            <Lottie options={defaultOptions} width={1000} height={500} />
          </div>
        </div>
      )}
    </>
  );
};
export default SectionPage;
