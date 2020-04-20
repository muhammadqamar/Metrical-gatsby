import React from "react"
import pdf from "../assets/HERO_Metrical_Case_Study_Sector9_2_20200221.pdf"

export default function Case_study({
  title,
  button_text,
  description,
  boldtext,
}) {
  return (
    <div className="Case_study">
      <div className="content">
        <h3>{title}</h3>
        <a download target="_blank" href={pdf}>
          {button_text}
        </a>
        <p>
          {description} <span>{boldtext}</span>
        </p>
      </div>
    </div>
  )
}
