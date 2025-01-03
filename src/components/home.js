import React from "react";
import Hari2023 from "../images/hariCircle.png";
import "../css/home.scss";

export default function Home() {
  return (
    <div className="homeSection">
      <div id="home" className="hero">
        <img src={Hari2023} alt="" className="profile-img" />
        <h1>
          <span>I'm Hari Yadharth, </span>
          Software developer based in USA.
        </h1>
        <p className="paraFlex">
          I am a Software Developer from Tamilnadu, India with 2.5+ years of
          experience in multiple companies like Straive, AbleLyf and Eutech
          Cybernetic.
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
          <div
            className="hero-resume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1ADQjf8fVVgVAu-2hCX7tFddhIBYmxZY5/view"
              );
              // let link = document.createElement("a"); // Create a temporary link element
              // link.href =
              //   "https://drive.google.com/file/d/1ADQjf8fVVgVAu-2hCX7tFddhIBYmxZY5/view"; // Path to your resume file
              // link.download = "Hari_Yadharth_Ganesh_Chitra_Resume.pdf"; // File name to save as
              // link.click();
            }}
          >
            My resume
          </div>
        </div>
      </div>
    </div>
  );
}