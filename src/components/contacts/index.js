import React, { useState, useEffect } from "react";
import "./assets/contact.scss";
import  map from "../../images/product/map.png"

import { Row, Col, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import loader from "../../images/icons/loader.svg";
import { apiFetch } from "../layout/api_call.js";
import { validate } from "../layout/form_validations.js";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Contactus() {
  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const [email, setemail] = useState("");
  const [message, setmesage] = useState("");
  const [labelall, showlabel] = useState("false");
  const [invalidemail, setinvalidemail] = useState("false");

  const [submittext, setbuttontext] = useState("true");

  //email send
  const senddata = async () => {
    showlabel("true");

    //email validator
    if (!validate(email)) {
      setinvalidemail("true");
    }
    //required validator
    else if (name === "" || company === "" || email === "" || message === "") {
      return;
    } else {
      setbuttontext("false");

      //payload
      const param = {
        name: name,
        company: company,
        email: email,
        message: message,
      };
      //async function
      var emailsend_status = await apiFetch(
        process.env.REACT_APP_CONTACT_URL,
        param
      );

      //success
      if (emailsend_status) {
        setname("");
        setcompany("");
        setemail("");
        setmesage("");
        setbuttontext("true");
        showlabel("false");
        Swal.fire({
          text: "EMAIL SENT",
          className: "swetalert",
          icon: "success",
        });
      } else {
        setbuttontext("true");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }
  };

  var defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div className="Contactus">
      <div className="content">
        <h1>Contact US</h1>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  Name
                  <span className="validator_text">
                    {labelall === "true" && name === "" ? " Required" : null}
                  </span>
                </Form.Label>

                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  Company
                  <span className="validator_text">
                    {labelall === "true" && company === "" ? " Required" : null}
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setcompany(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  Email
                  <span className="validator_text">
                    {labelall === "true" && email === "" ? " Required" : null}
                    {invalidemail === "true" && labelall != "false"
                      ? " - invalid email"
                      : null}
                  </span>
                </Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                    setinvalidemail("false");
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  Message
                  <span className="validator_text">
                    {labelall === "true" && message === "" ? " Required" : null}
                  </span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="8"
                  value={message}
                  onChange={(e) => {
                    setmesage(e.target.value);
                  }}
                />
              </Form.Group>

              <Button onClick={senddata} variant="primary">
                {submittext == "true" ? (
                  "SUBMIT"
                ) : (
                  <img src={loader} className="emailsent" />
                )}
              </Button>
            </Form>
          </Col>

          <Col xs={12} sm={12} md={6}>
            <div className="mapsize">
              <img src={map} />

            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
