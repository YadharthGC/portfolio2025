import React from "react";
import "../css/about.scss";
import Hari2023 from "../images/2023Hari.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function About() {
  return (
    <div className="aboutSection">
      <div id="about" className="about">
        <div className="title-box">
          <h1>About me</h1>
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={Hari2023} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I am a skilled Software Developer with a strong foundation in
                front-end and back-end technologies. Throughout my career, I
                have had the opportunity to work with dynamic organizations,
                where I contributed to successful projects and helped drive
                growth through innovative solutions.
              </p>
              <p>
                My dedication to Software development, particularly in
                full-stack development, shines through in both my hands-on
                experience and the energy and commitment I invest in every
                project.
              </p>
              <p>
                <div className="about-achievements">
                  <div className="about-achievement">
                    <h1>2.5+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                  </div>
                  <hr />
                  <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS WORKED</p>
                  </div>
                  <hr />
                  <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
