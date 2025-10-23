import React from "react";
import Hari2023 from "../images/hariCircle.png";
import "../css/home.scss";

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

  return (
    <div className="homeSection">
      <div id="home" className="hero">
        <img src={Hari2023} alt="" className="profile-img" />
        <h1>
          <span>I'm Hari Yadharth, </span>
          Software developer based in USA.
        </h1>
        <p className="paraFlex">
          I am a Software Developer with 2.5+ years of experience in multiple companies
          like Straive, AbleLyf, Eutech Cybernetics and Premier Health Group.
        </p>

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

          <div className="hero-resume" onClick={() => { handleResumeClick() }}>
            My Resume
          </div>
        </div>
      </div>
    </div>
  );
}
