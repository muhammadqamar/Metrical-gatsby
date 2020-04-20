import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"
import { useStaticQuery, graphql } from "gatsby"

import {apiFetch} from "./api_call"
import {validate} from "./form_validations"
import loader from "../../images/icons/loader.svg"
export default function Demo({ text }) {
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
    <div className="Demo">
      <a className="demo-button-demo" variant="primary" onClick={handleShow}>
        {text}
      </a>

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
    </div>
  )
}
