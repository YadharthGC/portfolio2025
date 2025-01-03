import React from "react";
import Hari2023 from "../images/2023Hari.jpg";
import "../css/services.scss";

export default function Services() {
  return (
    <div className="servicesSection">
      <div id="services" className="services">
        <div className="title-box">
          <h1>My Services</h1>
        </div>
        <div className="services-container">
          <div className="services-format">
            <h3>01</h3>
            <h2>Full-stack Development</h2>
            <p>
              End-to-end web development services, covering both front-end and
              back-end using modern technologies like ReactJS, Angular, NodeJS,
              MongoDB, and SQL.
            </p>
          </div>

          <div className="services-format">
            <h3>02</h3>
            <h2>Front-end Development</h2>
            <p>
              Building interactive, responsive, and visually appealing websites
              using HTML, CSS, JavaScript, TypeScript, and popular frameworks
              like ReactJS and Angular.
            </p>
          </div>

          <div className="services-format">
            <h3>03</h3>
            <h2>Back-end Development</h2>
            <p>
              Developing secure, scalable, and efficient server-side solutions
              using NodeJS, Express, and databases like MongoDB and SQL.
            </p>
          </div>

          <div className="services-format">
            <h3>04</h3>
            <h2>Data Analysis</h2>
            <p>
              Offering data analysis services using Python, including data
              visualization, reporting, and insights to help drive business
              decisions.
            </p>
          </div>

          <div className="services-format fifth">
            <h3>05</h3>
            <h2>Database Management</h2>
            <p>
              Setting up and managing databases like MongoDB and SQL, including
              database optimization and performance tuning.
            </p>
          </div>

          <div className="services-format fifth">
            <h3>06</h3>
            <h2>API Development & Integration</h2>
            <p>
              Designing and integrating RESTful APIs for seamless communication
              between different software components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
