import React from "react";
import "./Home.css";
import imgUrl from "./assets/home.jpeg";

const coverImage = () => {
  return (
    <>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={imgUrl} alt="First slide" />
        </div>
      </div>
    </>
  );
};
export default coverImage;
