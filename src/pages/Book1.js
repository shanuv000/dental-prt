import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UgContext } from "../firebasestuff/UgContext";
const Book1 = ({ data }) => {
  const { first } = useParams();
  const { ug } = useContext(UgContext);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {ug
            .filter((card) => card.course === first)
            .map((cardss) => (
              <div className="col-md-6">
                <div class="card text-center">
                  <div class="card-header">Featured</div>
                  <div class="card-body">
                    <h5 class="card-title">{cardss.title}</h5>
                    <p class="card-text">{cardss.desc}</p>
                    <a href="/" class="btn btn-primary">
                      Open
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Book1;
