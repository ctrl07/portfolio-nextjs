import React from "react";
import { FaGitAlt } from "react-icons/fa6";
import { BiLogoMongodb, BiLogoPython } from "react-icons/bi";
import { SiMysql, SiNodedotjs, SiNpm } from "react-icons/si";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BiLogoPython />
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <BiLogoMongodb />
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <SiMysql />
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <SiNpm />
            <div>
              <h3 className="skills__name">npm</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <SiNodedotjs />
            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <FaGitAlt />
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
