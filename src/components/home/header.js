import React from "react";
import Addon from "./add_on";
import { useStaticQuery, graphql } from "gatsby";
export default function Header({
  heading1,
  heading2,
  sub_heading1,
  sub_heading2,
  data_demo_title,
  data_demo_description,
  data_video_title,
  data_video_description,
  data_case_study_title,
  data_case_study_description,
}) {
  return (
    <div className="bg-home-main">
      <div className="contentinner">
        <h1>{heading1}</h1>
        <h1>{heading2}</h1>

        <h2>{sub_heading1}</h2>
        <h2>{sub_heading2}</h2>

        <Addon
          data_demo_title={data_demo_title}
          data_demo_description={data_demo_description}
          data_video_title={data_video_title}
          data_video_description={data_video_description}
          data_case_study_title={data_case_study_title}
          data_case_study_description={data_case_study_description}
        />
      </div>
    </div>
  );
}
