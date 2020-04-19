import React, { useState,useEffect } from "react"
import "./assets/contact.scss"
import GoogleMapReact from "google-map-react"
import axios from "axios"
import { Row, Col, Form, Button } from "react-bootstrap"
import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"
import loader from "../../images/icons/loader.svg"

const AnyReactComponent = ({ text }) => <div>{text}</div>


export default function Contactus() {

 
 
  const [name, setname] = useState("")
  const [company, setcompany] = useState("")
  const [email, setemail] = useState("")
  const [message, setmesage] = useState("")
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
    else if (name === "" || company === "" || email === "" || message === "") 
    {
      return
    } 
    else {


      setbuttontext("false")
      
      axios

        .post("https://metricalemail.herokuapp.com/contact/", {
          name: name,
          company: company,
          email: email,
          message: message,
        })
        .then(function (response) {
          console.log(response)
          setname("")
          setcompany("")
        setemail("")
        setmesage("")
          setbuttontext("true")
          showlabel("false")
          Swal.fire({
            text: "EMAIL SENT",
            className: "swetalert",
            icon: "success",
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

  var defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }

  return (
    <div className="Contactus">
      <div className="content">
        <h1>Contact US</h1>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name 
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
                <Form.Label>Company
                <span className="validator_text">
                  
                  {
                    labelall==="true"&&company===""?" Required":null
                  }

                  </span> 
                </Form.Label>
                <Form.Control
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setcompany(e.target.value)
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email
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
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value)
                    setinvalidemail("false")
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Message

                <span className="validator_text">
                  
                  {
                    labelall==="true"&&message===""?" Required":null
                  }

                  </span> 

                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="8"
                  value={message}
                  onChange={(e) => {
                    setmesage(e.target.value)
                  }}
                />
              </Form.Group>
              

              <Button onClick={senddata} variant="primary">
                {submittext=="true"?"SUBMIT":<img src={loader} className="emailsent"/>}
              </Button>
            </Form>
          </Col>

          <Col xs={12} sm={12} md={6}>
            <div className="mapsize">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={process.env.REACT_APP_GOOGLE_MAP_API_LAT}
                  lng={process.env.REACT_APP_GOOGLE_MAP_API_LANG}
                 
                />
              </GoogleMapReact>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
