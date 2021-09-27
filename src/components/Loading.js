import React from "react";
import "./Loading.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

const Loading = (props) => {
  const type = props.type;
  const color = props.color;
  // const height = props.height;
  // const width = props.width;
  const timeout = props.timeout;

  return (
    <div className="container-fluid align-self-center back__back  d-flex justify-content-center back__loader">
      <Loader
        type={type}
        color={color}
        height={400}
        width={150}
        timeout={timeout}
      />
    </div>
  );
};

export default Loading;
