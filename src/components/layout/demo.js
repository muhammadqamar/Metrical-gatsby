import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"
import axios from "axios"

export default function Demo({ text }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [name, setname] = useState("")
  const [title, settitle] = useState("")
  const [email, setemail] = useState("")
  const [website, setwebsite] = useState("")

  const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i

    return expression.test(String(email).toLowerCase())
  }
  const senddata = () => {
    if (name === "" || website === "" || email === "" || title === "") {
      Swal.fire({
        text: "KINDLY FILL ALL FIELDS",
        className: "swetalert",
        icon: "warning",
      })
    } else if (!validate(email)) {
      Swal.fire({
        text: "INVALID EMAIL",
        className: "swetalert",
        icon: "warning",
      })
    } else {
      axios

        .post("//localhost:3000/demo/", {
          name: name,
          title: title,
          email: email,
          website: website,
        })
        .then(function (response) {
          console.log(response)
          Swal.fire({
            text: "EMAIL SENT",
            className: "swetalert",
            icon: "success",
          })
        })
        .catch(function (error) {
          console.log(error)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          })
        })
    }
  }

  return (
    <div className="Demo">
      <a class="demo-button-demo" variant="primary" onClick={handleShow}>
        {text}
      </a>

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
                Name <span> *</span>{" "}
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
                Title <span> *</span>{" "}
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
                Your e-Commerce Website <span> *</span>{" "}
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
                Email <span> *</span>{" "}
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value)
                }}
              />
            </Form.Group>

            <Button variant="primary" onClick={senddata}>
              Next
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
