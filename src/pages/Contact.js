import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import "./Contact.css";
import "./Contact.css";
import firebase from "./../firebase";

const Contact = () => {
  const ref = firebase.firestore().collection("contacts");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  function AddContact(newContact) {
    if (name === "" && phone === "" && email === "" && message === "") {
      reset();
      alert("Please Fill form Correctly");
    } else {
      ref
        .doc(newContact.id)
        .set(newContact)
        .then(() => {
          reset();
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  function reset() {
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  }
  return (
    <Fragment>
      <div className="back__vids">
        <div
          class="container back__back pt-4"

        >
          <h1 style={{  fontSize:'4rem' }} className="text-center text-dark mb-4">
             <b>Contact <span style={{ color: "orange" }}></span> Us</b>
          </h1>
          <div class="input-group mb-3 ">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                NAME
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setName(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    PHONE
                  </span>
                </div>
                <input
                  type="number"
                  required="true"
                  autofocus={true}
                  class="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    EMAIL
                  </span>
                </div>
                <input
                  type="email"
                  class="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
            <div className="row">
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="row">
              {" "}
              <button
                type="button"
                class="btn btn-success btn-lg btn-block"
                onClick={() =>
                  AddContact({ message, email, name, phone, id: uuidv4() })
                }
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
