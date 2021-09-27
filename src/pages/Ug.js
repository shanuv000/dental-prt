import Fragment from "react";
import "./Ug.css";
import card1 from "./../assets/ugcard1.jpg";
import { Link } from "react-router-dom";
import card2 from "./../assets/img1.jpg";
import { useState, useEffect } from "react";
import card3 from "./../assets/img2.jpg";
import card4 from "./../assets/img3.jpg";
import card5 from "./../assets/img4.jpg";

import Cards from "./../components/Cards";
const Ug = () => {
  const [title, setTitle] = useState("");
  const [ug, setUg] = useState([]);
  const [desc, setDesc] = useState("");
  const part1Url =
    "https://drive.google.com/drive/folders/1x688I_IVKer3jjefCGthje9apvDOpuOd?usp=sharing";
  const part2Url =
    "https://drive.google.com/drive/folders/1vl8vhJDd-ZYKrJzwBfudGTg6hvlagU9H?usp=sharing";
  const part3Url =
    "https://drive.google.com/drive/folders/1ewsd4TAjdCmPjDOU56PTctqsMDLWbdr2?usp=sharing";

  return (
    <div className="container-fluid">
      <h1 className="text_head ">Select Your Course</h1>
      <div className="row">
        <div className="col-md-3">
          <Link to="/ug/first">
            <div class="alert alert-primary" role="alert">
              1st Year
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/ug/second">
            <div class="alert alert-primary" role="alert">
              2nd Year
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/ug/third">
            <div class="alert alert-primary" role="alert">
              3rd Year
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/ug/fourth">
            <div class="alert alert-primary" role="alert">
              4th Year
            </div>
          </Link>
        </div>
      </div>

      <h1 className="text_head">Books</h1>
      <div className="row">
        <div className="col-md-3">
          <Cards
            className="Cardsss"
            image={card1}
            title="title"
            content="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          />
        </div>
        <div className="col-md-3">
          <Cards
            image={card2}
            title="title"
            content="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          />
        </div>
        <div className="col-md-3">
          <Cards
            image={card3}
            title="title"
            content="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          />
        </div>
        <div className="col-md-3">
          <Cards
            image={card4}
            title="title"
            content="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          />
        </div>
      </div>

      <h1 className="text_head">Materials</h1>
      <div className="row">
        <div className="col-md-3">
          <Cards
            image={card1}
            title="title"
            content="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          />
        </div>
        <div className="col-md-3">
          <Cards
            image={card2}
            title="title"
            content="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          />
        </div>
        <div className="col-md-3">
          <Cards
            image={card5}
            title="title"
            content="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          />
        </div>
        <div className="col-md-3">
          <Cards
            image={card3}
            title="title"
            content="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          />
        </div>
      </div>
    </div>
  );
};

export default Ug;
