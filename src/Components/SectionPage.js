import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const SectionPage = (props) => {
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);
  const printItems = (data) => {
    let listItems = data.items.map((item) => <li>{item}</li>);
    return listItems;
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
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            <ul>{printItems(props.data)}</ul>
            <button className="more-btn">More</button>
          </div>
        </div>
      )}
    </>
  );
};
export default SectionPage;
