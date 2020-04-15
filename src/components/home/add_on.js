import React from "react"
import {Link} from "gatsby"
import {Row,Col} from "react-bootstrap"
import demo from "../../images/icons/icons_arrow icon.png"
import video from "../../images/icons/icons_basketball.png"
import case_study from "../../images/icons/icons_shopping cart.png"

export default function  Addon(){

   var data_demo={
        title:"GET DEMO",
   
        description:"Add to your e-commerce platform's app store in one click."
    }
    var data_video={
        title:"WATCH VIDEO ",
   
        description:"See how we can Increase conversion and reduce cart abandonment"
    }

    var data_case_study={
        title:"VIEW CASE STUDY",
   
        description:"How did we take a premium sporting goods retailer to new heights."
    }


    return(
        

<div className="Addon">
            <div className="content">
                <Row>
                    <Col sm={12} md={4}>
                        <div className="box">
                        <img src={demo} />
                        <h2>{data_demo.title}</h2>
                        <p>{data_demo.description}</p>
                        </div>



                    </Col>
                    <Col sm={12} md={4}>
                    <div className="box">
                        <img src={video} />
                        <h2>{data_video.title}</h2>
                        <p>{data_video.description}</p>
                        </div>



                    </Col>
                    <Col sm={12} md={4}>
                    <div className="box">
                        <img src={case_study} />
                        <h2>{data_case_study.title}</h2>
                        <p>{data_case_study.description}</p>
                        </div>


                    </Col>
                    </Row>
               
                </div>
    </div>
    )
} 

