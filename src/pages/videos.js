import React, { useState, useEffect } from "react";
import "./videos.css";
import Loader from "../components/Loading";

const Videos = () => {
  const [loading, setLoading] = useState(true);
  const [vidArr, setVidArr] = useState([]);

  useEffect(() => {
    const vidArrs = [
      "https://www.youtube.com/embed/MBrMbq-LM0A",
      "https://www.youtube.com/embed/HbHNhPQIjag",
      " https://www.youtube.com/embed/blPb7oKN6J4",
      "https://www.youtube.com/embed/HK1wK_clrH0",
      "https://www.youtube.com/embed/S-8zmj1w71A",
      "https://www.youtube.com/embed/rsmnLjnRPMw",
      "https://www.youtube.com/embed/pGiaJxghx6U",
      "https://www.youtube.com/embed/RKvpaW0zoY4",
    ];

    const Arrs = [];
    vidArrs.map((vid) => Arrs.push(vid));
    setVidArr(Arrs);
    // setLoading(false);
    setTimeout(() => setLoading(false), 2500);
  }, []);

  if (loading) {
    return <Loader type="Audio" color="#FC766AFF" />;
  }

  return (
    <>
      <div className="back__vid ">
        <div className="container-fluid mx-auto pt-2">
          {/* <h1 className="text-center mb-3" style={{ color: "white" }}>
            Checkout Videos
          </h1> */}
          {/* <div class="card-deck"> */}
          <div className="row ">
            {vidArr.map((arrvids) => {
              return (
                <div key="s" className="col-sm-6 mb-3">
                  <div class="card">
                    <iframe
                      height="380px"
                      src={arrvids}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen="true"
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </div>
          {/* {setLoading(false)} */}
        </div>
      </div>
    </>
  );
};

export default Videos;
