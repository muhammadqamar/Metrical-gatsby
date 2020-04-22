import React from "react";
import Demo from "../layout/demo/.";

export default function Header_solutions({ title, btn }) {
  return (
    <div className="Header_solutions">
      <div className="content">
        <h1>{title}</h1>

        <Demo text={btn} />
      </div>
    </div>
  );
}
