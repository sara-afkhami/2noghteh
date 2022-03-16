import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const Di = (props) => {
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);
  // console.log("items"+props.items)
  // const Items = (items) =>{
  //   for (let i = 0; i < items.length; i++) {
  //     return (<li>{items.item ? items.item[i] : "Loading"}</li>);

  //   }
  // }

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
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            <ul>
              <li>{props.data ? props.data.items : "Loading"}</li>
            </ul>
            <button className="more-btn">More</button>
          </div>
        </div>
      )}
    </>
  );
};
export default Di;
