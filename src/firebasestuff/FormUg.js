import React, { Fragment, useState, useEffect, useContext } from "react";
import "./FormUg.css";
import { UgContext } from "./UgContext";

// import ContactTabler from "./ContactTabler";
import { v4 as uuidv4 } from "uuid";
import Loader from "./../components/Loading";
import firebase from "./../firebase";
const FormUg = () => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [material, setMaterial] = useState("");
  const [loading, setLoading] = useState(false);
  // const [count, setCount] = useState(0);
  let count = 0;
  const [desc, setDesc] = useState("");
  const ref = firebase.firestore().collection("ug");
  //Show
  const { ug } = useContext(UgContext);

  if (loading) {
    return <Loader type="ThreeDots" color="#00BFFF" height={250} width={80} />;
  }
  //Add new
  function AddUg(newUg) {
    ref
      .doc(newUg.id)
      .set(newUg)
      .catch((err) => {
        console.log(err);
      });
    console.log(title);
    console.log(desc);
  }

  //Delete Ug
  function DeleteUg(newUg) {
    ref
      .doc(newUg.id)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Fragment>
      <div className="container padAll">
        <h1 className="text-center">Admin</h1>
        <div class="row">
          <div class="col-md-6">
            {" "}
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
                onFocus={(e) => (e.target.value = "")}
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  Image URL
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <select
              class="form-control"
              onChange={(e) => setCourse(e.target.value)}
            >
              <option>Select Course Year</option>
              <option value="first">1st Year</option>
              <option value="second">2nd Year</option>
              <option value="third">3nd Year</option>
            </select>
            <select
              class="form-control"
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option>Select Material</option>
              <option value="1">Books</option>
              <option value="2">Materials</option>
              <option value="3">Dental</option>
            </select>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Description"
                onChange={(e) => setDesc(e.target.value)}
                onFocus={(e) => (e.target.value = "")}
              ></textarea>
            </div>
            <button
              onClick={() =>
                AddUg({ material, course, title, desc, id: uuidv4() })
              }
              class="btn btn-primary"
            >
              Add
            </button>
          </div>

          <div class="col-md-6">
            {ug.map((ugs) => (
              // <div key={ugs.id}>
              //   {ugs.title}
              //   {ugs.desc}
              // </div>

              <table class="table table-dark padAll" key={ugs.id}>
                <thead>
                  <tr>
                    <th scope="col">Sr. num</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{(count = count + 1)}</td>
                    <td style={{ wordBreak: "break-all" }}>{ugs.title}</td>
                    <td style={{ wordBreak: "break-all" }}> {ugs.desc}</td>{" "}
                    <td>
                      <button className="btn btn-primary">Edit</button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => DeleteUg(ugs)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br />
            <hr />
            {/* <ContactTabler /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FormUg;
