import React, { useState } from "react";
import "../src/header.scss";

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
              window.open(
                "https://drive.google.com/file/d/10xGPn-QZlgAMnAgkBZR9HeXN9Y3rb6mw/view"
              );
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
            className="nav-connect"
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
