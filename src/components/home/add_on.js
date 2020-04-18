import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Row, Col, Modal, Button, Form } from "react-bootstrap"
import demo from "../../images/product/icons_arrow icon.png"
import video from "../../images/product/icons_basketball.png"
import case_study from "../../images/product/icons_shopping cart.png"
import chevron from "../../images/icons/chevronright.png"
import angledown from "../../images/icons/angledown.png"
import loader from "../../images/icons/loader.svg"
import axios from "axios"

import Swal from "sweetalert2/dist/sweetalert2.js"
import { MyVerticallyCenteredModal } from "../experience/experience_header"

export default function Addon({
  data_demo_title,
  data_demo_description,
  data_video_title,
  data_video_description,
  data_case_study_title,
  data_case_study_description,
}) {
  
  const [modalShow, setModalShow] = React.useState(false)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [name, setname] = useState("")
  const [title, settitle] = useState("")
  const [email, setemail] = useState("")
  const [website, setwebsite] = useState("")
  const [labelall,showlabel] = useState("false")
  const [invalidemail,setinvalidemail] = useState("false")
  const [submittext, setbuttontext] = useState("true")
  const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i

    return expression.test(String(email).toLowerCase())
  }
  const senddata = () => {
    showlabel("true")
    if (!validate(email)) {
      setinvalidemail("true")
    }
    else if (name === "" || title === "" || email === "" || website === "") 
    {
      return
    }  else {

      setbuttontext("false")
      axios

        .post("https://metricalemail.herokuapp.com/demo", {
          name: name,
          title: title,
          email: email,
          website: website,
        })
        .then(function (response) {
          console.log(response)
          
          setbuttontext("true")
          showlabel("false")
          Swal.fire({
            icon: "success",
            text: "Email Sent",
           
       
        
           
            confirmButtonText: 'OK'
          }).then((result) => {
            setname("")
            settitle("")
          setemail("")
          setwebsite("")
          handleClose("false")
          
           
           
          })
        })
        .catch(function (error) {
          console.log(error)
          setbuttontext("true")
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          })
        })
    }
  }

  return (
    <>
      <div className="Addon">
        <div className="content">
          <Row>
            <Col xs={6} sm={6} md={4}>
              <div className="box" onClick={handleShow}>
                <div className="imgadjust">
                  <img src={demo} />
                </div>
                <div>
                  <h2
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {data_demo_title}
                    <img src={chevron} className="arrow" />
                  </h2>
                  <p>{data_demo_description}</p>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4}>
              <div className="box" onClick={() => setModalShow(true)}>
                <div className="imgadjust">
                  <img src={case_study} />
                </div>
                <h2>
                  {data_video_title}
                  <img src={chevron} className="arrow" />
                </h2>
                <p>{data_video_description}</p>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4}>
              <div className="box">
                <div className="imgadjust">
                  <img src={video} />
                </div>
                <h2>
                  {data_case_study_title}

                  <img src={chevron} className="arrow" />
                </h2>

                <p>{data_case_study_description}</p>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4}>
              <div className="mobile-work">
                How it
                <br /> works
                <img src={angledown} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Modal show={show} onHide={handleClose} className="modeldemo">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h2>Matrical's CART pilot Program</h2>
          <p>
            Interested in participating in Metrical's pilot program? Please
            provide the information below and a Metrical team member will be in
            touch shortly!
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Name 
                <span className="validator_text">
                  
                  {
                    labelall==="true"&&name===""?" Required":null
                  }

                  </span> 
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Title    <span className="validator_text">
                {
                    labelall==="true"&&title===""?" Required":null
                  }
                  </span>

              </Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Your e-Commerce Website 
                <span className="validator_text">
               
                {
                  labelall==="true"&&website===""?" Required":null
                }
                </span>
              </Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={website}
                onChange={(e) => {
                  setwebsite(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Email  
                
                <span className="validator_text">
                {
                    labelall==="true"&&email===""?" Required":null
                  }
                   {
                    invalidemail==="true"&& labelall!="false"?" - invalid email":null
                  }



                  </span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value)
                  setinvalidemail("false")
                }}
              />
            </Form.Group>

            <Button variant="primary" onClick={senddata}>
            {submittext=="true"?"SUBMIT":<img src={loader} className="emailsent"/>}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
