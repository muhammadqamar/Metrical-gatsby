import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Row, Col, Modal, Button, Form } from "react-bootstrap"
import demo from "../../images/product/icons_arrow icon.png"
import video from "../../images/product/icons_basketball.png"
import case_study from "../../images/product/icons_shopping cart.png"
import chevron from "../../images/icons/chevronright.png"
import angledown from "../../images/icons/angledown.png"
import loader from "../../images/icons/loader.svg"
import { useStaticQuery, graphql } from "gatsby"
import pdf from "../assets/HERO_Metrical_Case_Study_Sector9_2_20200221.pdf"
import {apiFetch} from "../layout/api_call.js"
import {validate} from "../layout/form_validations.js"

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
  
  //qrapgql
const data = useStaticQuery(graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          demo_title
          demo_description
        }
      }
    }
  }
}`)


var content1 = data.allMarkdownRemark.edges.filter(
  (data) => data.node.frontmatter.path === "/demo"
)

var content = content1[0].node.frontmatter
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

  //email sending funciton
  const senddata = 
    async ()=>{
      showlabel("true")

      //validator
      if (!validate(email)) {
        setinvalidemail("true")
      }
      //validator
      else if (name === "" || title === "" || email === "" || website === "") 
      {
        return
      } 
      //send email
      else{
        setbuttontext("false")
        //payload
        const param ={
          name: name,
          title: title,
          email: email,
          website: website,
        
        }
       //async function
      var emailsend_status =  await  apiFetch(process.env.REACT_APP_DEMO_URL,param)
         
    
      //success
      if(emailsend_status){

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
         
        }
         //failed
        else{

          setbuttontext("true")
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          })
        }
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
               <a href={pdf} download> <h2>
                  {data_case_study_title}

                  <img src={chevron} className="arrow" />
                </h2>
                </a>

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
        <h2>{content.demo_title}</h2>
          <p>
          {content.demo_description}
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
