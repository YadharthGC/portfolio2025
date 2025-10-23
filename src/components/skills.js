import React, { useState, useEffect } from "react";
import "../css/skills.scss";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaBootstrap,
  FaChartBar,
  FaCode
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiDjango,
  SiPostman,
  SiFigma,
  SiTableau,
  SiCplusplus,
  SiC,
  SiMaterialdesign,
  SiVisualstudiocode,
  SiPowerbi,
} from "react-icons/si";

export default function Skills() {
  const [activeSection, setActiveSection] = useState("frontend");

  useEffect(() => {
    handleChangeSection("frontend");
  }, []);

  const handleChangeSection = (name) => {
    try {
      setActiveSection(name);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="skillsSection">
      <div className="title-box">
        <h1>Skills and Technologies</h1>
      </div>

      {/* Button Tabs */}
      <div className="skillsBtns">
        {["frontend", "backend", "languages", "database", "tools"].map(
          (section) => (
            <h2
              key={section}
              className={activeSection === section ? section : ""}
              onClick={() => handleChangeSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </h2>
          )
        )}
      </div>

      {/* Skills Grid */}
      <div className="skillsPages">
        {/* Frontend */}
        {activeSection === "frontend" && (
          <div className="services-container experience">
            {[
              { name: "ReactJS", icon: <FaReact color="#61DBFB" /> },
              { name: "Angular", icon: <FaAngular color="#DD0031" /> },
              { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
              { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
              { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
              { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
              { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
              { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
              { name: "Material UI", icon: <SiMaterialdesign color="#007FFF" /> },
              { name: "Chart.js", icon: <SiJavascript color="#FF6384" /> },
            ].map((skill) => (
              <div key={skill.name} className="services-format">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        )}

        {/* Backend */}
        {activeSection === "backend" && (
          <div className="services-container experience">
            {[
              { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
              { name: "Express.js", icon: <SiExpress color="#FFFFFF" /> },
              { name: "REST APIs", icon: <SiPostman color="#FF6C37" /> },
              { name: "Flask", icon: <SiFlask color="#FFFFFF" /> },
              { name: "Django", icon: <SiDjango color="#0C4B33" /> },
            ].map((skill) => (
              <div key={skill.name} className="services-format">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        )}

        {/* Programming Languages */}
        {activeSection === "languages" && (
          <div className="services-container experience">
            {[
              { name: "Python", icon: <FaPython color="#3776AB" /> },
              { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
              { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
              { name: "C", icon: <SiC color="#A8B9CC" /> },
              { name: "C++", icon: <SiCplusplus color="#00599C" /> },
              { name: "SQL", icon: <SiMysql color="#00618A" /> },
            ].map((skill) => (
              <div key={skill.name} className="services-format">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        )}

        {/* Database */}
        {activeSection === "database" && (
          <div className="services-container experience">
            {[
              { name: "MySQL", icon: <SiMysql color="#00618A" /> },
              { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
              { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
            ].map((skill) => (
              <div key={skill.name} className="services-format">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        )}

        {/* Tools */}
        {activeSection === "tools" && (
          <div className="services-container experience">
            {[
              { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
              { name: "GitHub", icon: <FaGithub color="#FFFFFF" /> },
              { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
              { name: "VS Code", icon: <FaCode color="#007ACC" /> },
              { name: "Figma", icon: <SiFigma color="#A259FF" /> },
              { name: "AWS", icon: <FaAws color="#FF9900" /> },
              { name: "Tableau", icon: <SiTableau color="#E97627" /> },
              // { name: "Power BI", icon: <SiPowerbi color="#F2C811" /> },
            ].map((skill) => (
              <div key={skill.name} className="services-format">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
