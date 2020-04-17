import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Row, Col, Modal, Button, Form } from "react-bootstrap"
import demo from "../../images/product/icons_arrow icon.png"
import video from "../../images/product/icons_basketball.png"
import case_study from "../../images/product/icons_shopping cart.png"
import chevron from "../../images/icons/chevronright.png"
import angledown from "../../images/icons/angledown.png"

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
              <Form.Label>Name * </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title *</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your e-Commerce Website *</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Next
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
