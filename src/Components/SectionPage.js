import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Lottie from "react-lottie";
import gif1 from "../Lottie/JSON/content creation.webm.lottie.json";
import gif2 from "../Lottie/JSON/digital market.webm.lottie.json";
import gif3 from "../Lottie/JSON/film & series.webm.lottie.json";
// let gifs = [];

const SectionPage = (props) => {
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);
  // for (let i = 0; i < 3; i++) {
  //   gifs.push(gif`${i}`)
    
  // }
  // let gif = gif`${props.data.gif}`;
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
          <div className="col-md-8 intro-text main">
            <h1>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p><strong>{props.data ? props.data.paragraph : "Loading"}</strong></p>
            <p><ul>{printItems(props.data)}</ul></p>
            <button className="more-btn">More</button>
          </div>
          <div className="col-md-4 intro-text main animated-div" id="home-gif">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      )}
    </>
  );
};
export default SectionPage;
