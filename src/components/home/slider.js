import React, { useState } from "react"
import plus from "../../images/icons/plus.png"
import minus from "../../images/icons/minus.png"
import bg from "../../images/product/sector9.png"

export default function Slider() {
  const [slide, setslide] = useState("second")

  var changeslider = (e) => {
    if (e == "first") {
      setslide("second")
    } else if (e == "second") {
      setslide("third")
    } else if (e == "third") {
      setslide("first")
    }
  }
  return (
    <div className="Slider" slider>
      <ul>
        <li
          onClick={() => changeslider("first")}
          className={slide === "first" ? "active" : null}
        >
          <div className="section-title">
            <div className="collapse-btn">
              <img src={slide === "first" ? minus : plus} />
            </div>
          </div>
          <div className="section-content">
            <img src={bg} style={{ width: "50%", height: "auto" }} />
          </div>
        </li>
        <li
          onClick={() => changeslider("second")}
          className={slide === "second" ? "active" : null}
        >
          <div className="section-title">
            <div className="collapse-btn">
              <img src={slide === "second" ? minus : plus} />
            </div>
          </div>
          <div className="section-content">
            <img src={bg} style={{ width: "50%", height: "auto" }} />
          </div>
        </li>
        <li
          onClick={() => changeslider("third")}
          className={slide === "third" ? "active" : null}
        >
          <div className="section-title">
            <div className="collapse-btn">
              <img src={slide === "third" ? minus : plus} />
            </div>
          </div>
          <div className="section-content">
            <img src={bg} style={{ width: "50%", height: "auto" }} />
          </div>
        </li>
      </ul>
    </div>
  )
}
