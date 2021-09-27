import React, {Fragment, useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import Loading from "./../components/Loading";
import {UgContext} from "../firebasestuff/UgContext";
import "./Ug2.css";
import Oral1 from "../assets/img1.jpeg";
import Oral2 from "../assets/img2.jpeg";
import Oral3 from "../assets/img3.jpeg";
import Oral4 from "../assets/img4.jpeg";
import Oral5 from "../assets/img5.jpeg";
import Oral6 from "../assets/img6.jpeg";
import Oral7 from "../assets/img7.jpeg";
import Oral8 from "../assets/img8.jpeg";
// import {Animate, AnimateKeyframes, AnimateGroup} from "react-simple-animate";

// import { Link } from "react-router-dom";

const Ug2 = () => {


    const history = useHistory();
    const [loader, setLoader] = useState(false);
    const {currentUser} = useContext(UgContext);

    // const imgLoc = [Oral1, Oral2, Oral3, Oral4, Oral5, Oral6, Oral7, Oral8];
    const imgLoc = [
        {
            imgLocation: Oral1,
            title: "Oral Medicine",
            desc: "Oral medicine is the specialty of dentistry concerned with the oral health care of patients with chronic, recurrent and medically related disorders of the oral and maxillofacial region, and with their diagnosis and non-surgical management.",
            url: "",
        },

        {
            imgLocation: Oral4,
            title: "Clinical Work",
            desc: "Every state's dental laws set forth a demarcation between matters and tasks that are “clinical” (which are fully reserved to dentists licensed in that state) and “nonclinical” (which can be performed by any individual, including a dentist).",
            url: "",
        },
        {
            imgLocation: Oral5,
            title: "Materials",
            desc: "Materials of Clinical Study",
            url: "",
        },
        {
            imgLocation: Oral6,
            title: "Books",
            url: "",
            desc: "Books of Clinical Study",
        },
        {
            imgLocation: Oral7,
            title: "Instruments",
            url: "",
            desc: "Your Portman dentist has a whole host of equipment to help them look after you and make your experience as pleasant as possible. Here is a guide to some of your dentist’s equipment and what it does.",
        },
        {
            imgLocation: Oral8,
            title: "Oral Disease",
            url: "",
            desc: "Oral health refers to the health of the teeth, gums, and the entire oral-facial system that allows us to smile, speak, and chew. Some of the most common diseases that impact our oral health include cavities (tooth decay), gum (periodontal) disease, and oral cancer.",
        },
        {
            imgLocation: Oral2,
            title: "Previous Questions",
            desc: "Previous year Questions on Dental",
            url: "",
        },
        {imgLocation: Oral3, title: "Notes", desc: "Notes on Dental"},
    ];
    // Images

    if (loader) {
        <Loading type="Circles" color="#00BFFF" height={80} width={80}/>;
    }

    const part1Url = currentUser
        ? "https://drive.google.com/drive/folders/1x688I_IVKer3jjefCGthje9apvDOpuOd?usp=sharing"
        : "/login";
    const part2Url = currentUser
        ? "https://drive.google.com/drive/folders/1vl8vhJDd-ZYKrJzwBfudGTg6hvlagU9H?usp=sharing"
        : "/login";
    const part3Url = currentUser
        ? "https://drive.google.com/drive/folders/1ewsd4TAjdCmPjDOU56PTctqsMDLWbdr2?usp=sharing"
        : "/login";
    const part4Url = currentUser
        ? "https://drive.google.com/drive/folders/18ZWuMuC6mHCMT8JRTo1hzwUDSVnzUOvb?usp=sharing"
        : "/login";

    const redirectUrlArray = [
        {url: part1Url, title: "1st Year", color: "alert-primary"},
        {url: part2Url, title: "2nd Year", color: "alert-success"},
        {url: part3Url, title: "3rd Year", color: "alert-dark"},
        {url: part4Url, title: "4th Year", color: "alert-danger"},
    ];
    const blankHandle = currentUser ? "_blank" : null;
    return (
        <Fragment>
            <div className="container-fluid ">
                    <h1 className="text_head font-weight-bold text-center">
                        Select Your Course
                    </h1>


                <div className="row">
                    {redirectUrlArray.map((redArr) => (
                        <div className="col-md-3 scaling">
                            <a target={blankHandle} href={redArr.url}>
                                <div class={`alert ${redArr.color}`} role="alert">
                                    {redArr.title}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="row">
                    {imgLoc.map((imgLoc) => {
                        return (
                            <div className="col-md-6">
                                {/* <div class="card-deck"> */}
                                <div class="card card__crdss" style={{cursor: "pointer"}}>
                                    <img
                                        class="card-img-top"
                                        src={imgLoc.imgLocation}
                                        alt="Card  cap"
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">{imgLoc.title}</h5>
                                        <p class="card-text">{imgLoc.desc}</p>
                                        {/* <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default Ug2;
