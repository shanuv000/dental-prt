import React from "react";
import "./Content.css";
import box1Img from "./assets/ug.jpg";
import box1Img2 from "./assets/pg.jpg";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <div className="content_back">
        <div className="container-fluid">
          <div className="content">
            <div className="content-images">
              <Link to="/ug2">
                <div class="card__card">
                  <img src={box1Img} alt="" />

                  <div className="card-info">
                    <h2>This is Ug </h2>
                    <h4>Here you will find Ug Materials Here</h4>
                  </div>
                </div>
              </Link>
              <Link to="/Pg">
                <div class="card__card">
                  <img src={box1Img2} />

                  <div className="card-info">
                    <h2>This is Pg </h2>
                    <h4>Here you will find Pg Materials Here</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
