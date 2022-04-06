import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const ProgressBar = (props) => {
  return (
    <div>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={2430}
        duration={1.5}
        easingFunction={easeQuadInOut}
      >
        {(value) => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              minValue={0}
              maxValue={2430}
              text={`${roundedValue}`}
              styles={buildStyles({
                textSize: "10px",
                pathTransitionDuration: 0.5,
                pathColor: `${props.color}`,
                textColor: "#fff",
                trailColor: "transparent",
                backgroundColor: "#532F4F",
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </div>
  );
};
export default ProgressBar;
