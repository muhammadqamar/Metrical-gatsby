import React from "react";
import "./assets/experience.scss";
import { Modal, Button } from "react-bootstrap";
import chevron from "../../images/icons/play.png";

export default function Experience_header() {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <div className="Experience_header">
        <div className="playbutton" onClick={() => setModalShow(true)}>
          <img src={chevron} />
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        closebox={setModalShow}
      />
    </>
  );
}

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal

      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="close-video" onClick={()=>props.closebox(false)}>x</div>
      <Modal.Body>
        <video width="100%" height="auto" controls="true" autoplay="">
          <source
            src="https://goal-com.000webhostapp.com/metrical-final.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Modal.Body>
    </Modal>
  );
}
