import React, { useState } from "react";
import plus from "../../images/icons/plus.png";
import minus from "../../images/icons/minus.png";
import bg from "../../images/product/sector9.png";
import bopis from "../../images/logo/bopis.png";
import anotomie from "../../images/logo/anatomie.png";
import pdf1 from "../assets/Anatomie_Metrical_Case_Study_20190710.pdf";
import pdf2 from "../assets/HERO_Metrical_Case_Study_Sector9_2_20200221.pdf";
import pdf3 from "../assets/Big_Retailer_Anonymous_Metrical_Case_Study.pdf";
import pdf4 from "../assets/Metrical_Case_Study_Sector9.pdf";

export default function Slider() {
  const [slide, setslide] = useState("second");

  var changeslider = (e) => {
    if (e === slide && e === "third") {
      setslide("second");
      return;
    } else if (e === slide && e === "second") {
      setslide("first");
      return;
    } else if (e === slide && e === "first") {
      setslide("second");
      return;
    } else if (e == "first") {
      setslide("first");
      return;
    } else if (e == "second") {
      setslide("second");
      return;
    } else if (e == "third") {
      setslide("third");
    }
  };
  return (
    <div className="Slider">
      <ul>
        <li className={slide === "first" ? "active" : null}>
          <div className="section-title" onClick={() => changeslider("first")}>
            <div className="collapse-btn">
              <img src={slide === "first" ? minus : plus} />
            </div>
          </div>
          <div className="section-content">
            <a href={pdf2} download>
              <img src={bg} style={{ width: "50%", height: "auto" }} />
            </a>
          </div>
        </li>
        <li className={slide === "second" ? "active" : null}>
          <div className="section-title" onClick={() => changeslider("second")}>
            <div className="collapse-btn">
              <img src={slide === "second" ? minus : plus} />
            </div>
          </div>

          <div className="section-content">
            <a href={pdf3} download>
              <img src={bopis} style={{ width: "50%", height: "auto" }} />
            </a>
          </div>
        </li>
        <li className={slide === "third" ? "active" : null}>
          <div className="section-title" onClick={() => changeslider("third")}>
            <div className="collapse-btn">
              <img src={slide === "third" ? minus : plus} />
            </div>
          </div>

          <div className="section-content">
            <a href={pdf1} download>
              <img
                src={anotomie}
                className="anotomy_img"
                style={{ width: "50%", height: "auto" }}
              />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
