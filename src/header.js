import React, { useState } from "react";
import "../src/header.scss";
import { resumeLink } from "./commonVariables";

export default function Header() {
  return (
    <div className="headerSection">
      <div className="navbar">
        <div className="nameDiv">HARI GC</div>
        <ul className="nav-menu">
          <li>
            <a className="anchor-link" href="#about">
              <p>About Me</p>
            </a>
          </li>
          <li>
            <a className="anchor-link" href="#services">
              <p>Services</p>
            </a>
          </li>
          <li
            onClick={() => {
              window.open(resumeLink);
            }}
          >
            <a className="anchor-link" href="#work">
              <p>Resume</p>
            </a>
          </li>

          <li>
            <a className="anchor-link" href="#contact">
              <p>Contact</p>
            </a>
          </li>
          <li
            className="nav-connect hireMeSec"
            onClick={() => {
              document
                .getElementsByClassName("contactSection")[0]
                .scrollIntoView();
            }}
          >
            <a className="anchor-link" href="#contact">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
