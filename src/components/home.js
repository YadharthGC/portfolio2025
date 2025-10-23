import React from "react";
import Hari2023 from "../images/hariCircle.png";
import "../css/home.scss";
<<<<<<< HEAD

export default function Home() {
  const handleResumeClick = () => {
    // Open resume in a new tab
    window.open("/HariSoftwareResume.pdf", "_blank");

    // Trigger download as well
    const link = document.createElement("a");
    link.href = "/HariSoftwareResume.pdf";
    link.download = "Hari_Yadharth_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

=======
import { resumeLink } from "../commonVariables";

export default function Home() {
>>>>>>> 9aca04c14003996910ebcc1d00565ab498cfd0de
  return (
    <div className="homeSection">
      <div id="home" className="hero">
        <img src={Hari2023} alt="" className="profile-img" />
        <h1>
          <span>I'm Hari Yadharth, </span>
          Software developer based in USA.
        </h1>
        <p className="paraFlex">
<<<<<<< HEAD
          I am a Software Developer with 2.5+ years of experience in multiple companies
          like Straive, AbleLyf, Eutech Cybernetics and Premier Health Group.
        </p>

=======
          I am a Software Developer from Tamilnadu, India with 2.5+ years of
          experience in multiple companies like Straive, AbleLyf and Eutech
          Cybernetic.
        </p>
>>>>>>> 9aca04c14003996910ebcc1d00565ab498cfd0de
        <div className="hero-action">
          <div
            className="hero-connect"
            onClick={() => {
              document
                .getElementsByClassName("contactSection")[0]
                .scrollIntoView();
            }}
          >
            <a className="anchor-link" href="#contact">
              Hire me
            </a>
          </div>
<<<<<<< HEAD

          <div className="hero-resume" onClick={() => { handleResumeClick() }}>
            My Resume
=======
          <div
            className="hero-resume"
            onClick={() => {
              window.open(resumeLink);
            }}
          >
            My resume
>>>>>>> 9aca04c14003996910ebcc1d00565ab498cfd0de
          </div>
        </div>
      </div>
    </div>
  );
}
