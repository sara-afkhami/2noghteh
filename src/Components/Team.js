import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import Loader from "./Loader";

const Team = (props) => {
  const [done, setDone] = useState(undefined);
  const [first, setFirst] = useState(undefined);
  const [second, setSecond] = useState(undefined);
  const [third, setThird] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
      setFirst(true);
    }, 2000);
    setTimeout(() => {
      setSecond(true);
    }, 4000);
    setTimeout(() => {
      setThird(true);
    }, 6000);
  }, []);

  return (
    <>
      {!done ? (
        <Loader />
      ) : (
        <div className="intro">
          <div className="row team-intro">
            <div className="col-md-4 center team-div">
              <h2>{props.data ? props.data.title : "Loading"}</h2>
            </div>
            <div className="col-md-4 center team-div">
            <div className="col-md-4 center">
              {first ? <ProgressBar color={"#750CBC"} /> : null}
            </div>
            <div className="col-md-4 center">
              {second ? <ProgressBar color={"#0CB7BC"} /> : null}
            </div>
            <div className="col-md-4 center">
              {third ? <ProgressBar color={"#BCAF0C"} /> : null}
            </div>
            </div>
            <div className="col-md-4 team-btn-div team-div">
              <button className="more-btn team-btn">Art Works</button>
            </div>
          </div>
          <div className="team-info">
            bvmzvmvs
          </div>
        </div>
      )}
    </>
  );
};
export default Team;
