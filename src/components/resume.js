import React, { useState, useEffect } from "react";
import "../css/resume.scss";
import reactLogo from "../images/icons8-react.svg";
import githubLogo from "../images/icons8-github.svg";

export default function Resume() {
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);

  useEffect(() => {
    handleChangeSection("experience");
  }, []);

  const handleChangeSection = (name) => {
    try {
      if (name === "experience") {
        setExperience(true);
        setEducation(false);
        setSkills(false);
      } else if (name === "education") {
        setExperience(false);
        setEducation(true);
        setSkills(false);
      } else if (name === "skills") {
        setExperience(false);
        setEducation(false);
        setSkills(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="resumeSection">
      {/* <div className="title-box">
        <h1>More about me</h1>
      </div> */}
      <div className="resumeBtns">
        <h2
          className={experience ? "experience" : ""}
          onClick={() => {
            handleChangeSection("experience");
          }}
        >
          Experience
        </h2>
        <h2
          className={education ? "education" : ""}
          onClick={() => {
            handleChangeSection("education");
          }}
        >
          Education
        </h2>
        {/* <h2
          className={skills ? "skills" : ""}
          onClick={() => {
            handleChangeSection("skills");
          }}
        >
          Skills
        </h2> */}
      </div>

      <div className="resumePages">
        {experience ? (
          <div className="services-container experience">
            <div className="services-format">
              <h3>Software Engineer</h3>
              <span>(03/2024 - 07/2024)</span>
              <p>Eutech Cybernetic Private Limited</p>
              <span>Chennai, Tamilnadu, India - 600034</span>
            </div>

            <div className="services-format">
              <h3>Software Developer</h3>
              <span>(01/2024 - 02/2024)</span>
              <p>AbleLyf</p>
              <span>Doha, Qatar</span>
            </div>

            <div className="services-format">
              <h3>Junior Executive</h3>
              <span>(04/2022 - 12/2023)</span>
              <p>Straive</p>
              <span>Chennai, Tamilnadu, India - 600020</span>
            </div>

            <div className="services-format">
              <h3>Trainee Developer</h3>
              <span>(01/2022 - 03/2022)</span>
              <p>Straive</p>
              <span>Chennai, Tamilnadu, India - 600020</span>
            </div>
          </div>
        ) : (
          ""
        )}

        {education ? (
          <div className="services-container education">
            <div className="services-format">
              <h3>Master of Science (M.S)</h3>
              <span>(08/2024 - 12/2025)</span>
              <h2>Information Systems</h2>
              <p>University of Maryland - College Park</p>
              <h4>CGPA : 3.2</h4>
              <h5>College park, Maryland, USA - 20740</h5>
            </div>

            <div className="services-format">
              <h3>Bachelor of Engineering (B.E)</h3>
              <span>(08/2017 - 04/2021)</span>
              <h2>Mechatronics</h2>
              <p>Dr.Mahalingam College of Engineering and Technology</p>
              <h4>CGPA : 3.4</h4>
              <h5>Pollachi, Tamilnadu, India - 642003</h5>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* {skills ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#bdbdbd"
              d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"
            />
            <path
              fill="#b71c1c"
              d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"
            />
            <path
              fill="#dd2c00"
              d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"
            />
            <path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z" />
            <path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z" />
            <path fill="#bdbdbd" d="M24 24H30V28H24z" />
            <path fill="#eee" d="M18 24H24V28H18z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
            <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
            <path
              fill="#FFF"
              d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
            />
            <path
              fill="#EEE"
              d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
            baseProfile="basic"
          >
            <path
              fill="#b0c1d4"
              d="M27.123,24.5c-0.76,0-1.484-0.396-1.939-1.06l-3.938-5.746l-3.938,5.745 c-0.455,0.664-1.18,1.061-1.94,1.061h-1.825l6.184-9.023L13.573,6.5h1.826c0.761,0,1.486,0.396,1.94,1.06l3.907,5.7l3.907-5.7 c0.454-0.664,1.18-1.06,1.94-1.06h1.825l-6.153,8.977l6.185,9.023H27.123z"
            />
            <path
              fill="#66798f"
              d="M27.969,7l-5.81,8.477L28,24h-0.877c-0.599,0-1.164-0.311-1.527-0.842l-4.351-6.348l-4.351,6.348 C16.531,23.689,15.966,24,15.367,24h-0.877l5.841-8.523L14.522,7h0.877c0.599,0,1.164,0.311,1.527,0.842l4.32,6.303l4.32-6.303 C25.929,7.311,26.493,7,27.092,7H27.969 M29.867,6h-1.898h-0.877c-0.925,0-1.804,0.477-2.352,1.277l-3.495,5.099L17.75,7.277 C17.203,6.477,16.323,6,15.398,6h-0.877h-1.898l1.073,1.565l5.423,7.912l-5.454,7.957L12.593,25h1.898h0.877 c0.925,0,1.804-0.477,2.352-1.277l3.526-5.144l3.526,5.144C25.319,24.523,26.198,25,27.123,25H28h1.898l-1.073-1.565l-5.454-7.957 l5.423-7.912L29.867,6L29.867,6z"
            />
            <g>
              <path
                fill="#b0c1d4"
                d="M7.53,24.487c-3.876,0-7.03-3.26-7.03-7.268v-3.412c0-4.008,3.153-7.268,7.03-7.268 s7.03,3.26,7.03,7.268v3.124L2.951,16.932v0.287c0,2.656,2.054,4.816,4.579,4.816c1.391,0,2.74-0.701,3.609-1.876 c0.482-0.652,1.191-1.026,1.947-1.026h1.263l-0.248,0.673C13.069,22.606,10.429,24.487,7.53,24.487z M12.085,14.521l0.024-0.73 c0-2.64-2.055-4.8-4.58-4.8c-2.524,0-4.579,2.16-4.579,4.816l-0.023,0.714H12.085z"
              />
              <path
                fill="#66798f"
                d="M7.53,7.039c3.6,0,6.53,3.036,6.53,6.767v2.625l-11.609,0v0.787c0,2.932,2.278,5.317,5.079,5.317 c1.587,0,3.064-0.799,4.01-2.079c0.369-0.498,0.925-0.823,1.545-0.823h0.546c0,0,0,0,0,0.001c-0.959,2.603-3.413,4.353-6.102,4.353 c-3.6,0-6.53-3.036-6.53-6.768v-3.412C1,10.075,3.929,7.039,7.53,7.039 M2.411,15.021h10.158l0.04-1.214 c0-2.931-2.278-5.316-5.079-5.316c-2.801,0-5.079,2.385-5.079,5.316L2.411,15.021 M7.53,6.039C3.378,6.039,0,9.524,0,13.807v3.412 c0,4.283,3.378,7.768,7.53,7.768c3.107,0,5.936-2.012,7.04-5.007l0.495-1.344l-1.433-0.002l-0.546-0.001 c-0.917,0-1.773,0.448-2.35,1.229c-0.775,1.048-1.973,1.674-3.206,1.674c-2.182,0-3.969-1.822-4.074-4.104l10.604,0l1,0v-1v-2.625 C15.06,9.524,11.682,6.039,7.53,6.039L7.53,6.039z M3.445,14.021l0.006-0.181C3.451,11.427,5.281,9.49,7.53,9.49 s4.079,1.936,4.079,4.316l-0.007,0.214H3.445L3.445,14.021z"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path fill="#e53935" d="M24 43L16 20 32 20z" />
            <path fill="#ff7043" d="M24 43L42 20 32 20z" />
            <path fill="#e53935" d="M37 5L42 20 32 20z" />
            <path fill="#ffa726" d="M24 43L42 20 45 28z" />
            <path fill="#ff7043" d="M24 43L6 20 16 20z" />
            <path fill="#e53935" d="M11 5L6 20 16 20z" />
            <path fill="#ffa726" d="M24 43L6 20 3 28z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path fill="#ffd600" d="M6,42V6h36v36H6z" />
            <path
              fill="#000001"
              d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#5d4037"
              d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
            />
            <path
              fill="#4caf50"
              d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
            />
            <path fill="#dcedc8" d="M23 28H25V36H23z" />
            <path
              fill="#4caf50"
              d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
            />
            <path
              fill="#81c784"
              d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#388e3c"
              d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
            />
            <path
              fill="#37474f"
              d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
            />
            <path
              fill="#2e7d32"
              d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
            />
            <path
              fill="#4caf50"
              d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
            />
            <path
              fill="#37474f"
              d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
            />
          </svg>
          <img src={reactLogo} alt="reactLogo" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#29b6f6"
              d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
            />
            <path
              fill="#0277bd"
              d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
            />
            <path
              fill="#0288d1"
              d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
            />
          </svg>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
}
