import React from "react"
import {Link} from "gatsby"
import {Row,Col} from "react-bootstrap"
import demo from "../../images/icons/icons_arrow icon.png"
import video from "../../images/icons/icons_basketball.png"
import case_study from "../../images/icons/icons_shopping cart.png"
import chevron from "../../images/icons/chevronright.png"
import angledown from "../../images/icons/angledown.png"
export default function  Addon({

    data_demo_title,
    data_demo_description,
    data_video_title,
    data_video_description,
    data_case_study_title,
    data_case_study_description,
  

}){

 
   


    return(
        

<div className="Addon">
            <div className="content">
                <Row>
                    <Col xs={6} sm={6} md={4}>
                        <div className="box">
                        <img src={demo} />
                        <h2>{data_demo_title}
                        <img src={chevron} className="arrow" />
                        </h2>
                        <p>{data_demo_description}</p>
                        </div>



                    </Col>
                    <Col xs={6} sm={6} md={4}>
                    <div className="box">
                        <img src={video} />
                        <h2>{data_video_title}
                        <img src={chevron} className="arrow" /></h2>
                        <p>{data_video_description}</p>
                        </div>



                    </Col>
                    <Col xs={6} sm={6} md={4}>
                    <div className="box">
                        <img src={case_study} />
                        <h2>{data_case_study_title}
                        <img src={chevron} className="arrow" />
                        </h2>
                        <p>{data_case_study_description}
                        
                        </p>
                        </div>


                    </Col>
                    <Col xs={6} sm={6} md={4}>
                    <div className="mobile-work">
                        How it<br /> works<img src={angledown}/>
                    </div>
                       


                    </Col>
                    </Row>
               
                </div>
    </div>
    )
} 

