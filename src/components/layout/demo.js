import React,{useState} from "react"
import {Modal,Button,Form} from "react-bootstrap"
export default function Demo({text}){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return(
 
  <div className="Demo">
          <a class="demo-button-demo" variant="primary" onClick={handleShow}>
          {text}
      </a>

      <Modal show={show} onHide={handleClose} className="modeldemo">
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>

            <h2>Matrical's CART pilot Program</h2>
            <p>Interested in participating in Metrical's pilot program? Please provide the information below and a Metrical team member will be in touch shortly!</p>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name * </Form.Label>
    <Form.Control type="text"  />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title *</Form.Label>
    <Form.Control type="text" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your e-Commerce Website *</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email *</Form.Label>
    <Form.Control type="email"  />
  </Form.Group>



  
 
  <Button variant="primary" type="submit">
    Next
  </Button>
</Form>
        </Modal.Body>
       
      </Modal>

  </div>
  

)


} 
