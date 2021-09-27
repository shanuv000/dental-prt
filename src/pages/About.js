import React, { useEffect, Fragment, useState } from "react";
import "./About.css";
import Loader from "../components/Loading";
import ceoImg from "../assets/ceo1.jpeg";
import director from "../assets/director.jpeg";
const About = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    <div className="container d-flex justify-content-center">
      <Loader type="ThreeDots" color="#00BFFF" height={200} width={80} />
    </div>;
  }
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <div className="back2">
        <header class="bg-primary text-center py-5 mb-4 back">
          <div class="container">
            <h1 class="font-weight-light text-white">Meet the Team</h1>
          </div>
        </header>
        {/* <!-- Page Content --> */}
        <div class="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div class="card">
                <img class="card-img-top" src={ceoImg} alt="Card å cap" />
                <div class="card-body fillColor">
                  <h5 class="card-title">Dr. Shivangi Kriti</h5>
                  <p class="card-text">
                    BDS,MU (PATNA) <faCoffee />
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div class="card">
                <img class="card-img-top" src={director} alt="Card image cap" />
                <div class="card-body fillColor">
                  <h5 class="card-title">Dr. Pramod Kumar</h5>
                  <p class="card-text">
                    BDS,MU (PATNA)
                    <faCoffee />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
