import { useState, useEffect } from "react";
import { GooSpinner } from "react-spinners-kit";
const Loader = () => {

  return (
    <div className="loading">
      <GooSpinner size={100} color="#b3dac6" />
    </div>
  );
};
export default Loader;
