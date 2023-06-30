import React, { useEffect, useRef } from "react";
import "./Skills.scss";
import js from "../../assets/images/javascript.png";
import html5 from "../../assets/images/html5.png";
import react from "../../assets/images/react.png";
import node from "../../assets/images/node.png";
import css3 from "../../assets/images/css3.png";
import sass from "../../assets/images/sass.png";
import git from "../../assets/images/git.png";
import figma from "../../assets/images/figma.png";
import firebase from "../../assets/images/firebase.png";
import mongo from "../../assets/images/mongo.png";
import mysql from "../../assets/images/mysql.png";
import ai from "../../assets/images/ai.png";

export default function Skills() {
  return (
    <>
      <section className="skills">
        <h1 className="skills__heading">Skills</h1>
        <div className="skills__box">
          <div className="skills__box-skill">
            <img src={js} alt="js" className="skills__box-skill-img" />
            <span className="skills__box-skill-desc">JS</span>
          </div>
          <div className="skills__box-skill">
            <img src={html5} alt="html5" className="skills__box-skill-img" />
            <span className="skills__box-skill-desc">HTML5</span>
          </div>
          <div className="skills__box-skill">
            <img
              src={css3}
              alt="css3"
              className="skills__box-skill-img"
              style={{
                height: "80px",
                width: "80px",
              }}
            />
            <span className="skills__box-skill-desc">CSS3</span>
          </div>
          <div className="skills__box-skill">
            <img src={react} alt="react" className="skills__box-skill-img" />
            <span className="skills__box-skill-desc">React</span>
          </div>
          <div className="skills__box-skill">
            <img src={node} alt="node" className="skills__box-skill-img" />
            <span className="skills__box-skill-desc">Node.js</span>
          </div>
          <div className="skills__box-skill">
            <img src={sass} alt="sass" className="skills__box-skill-img" />
            <span className="skills__box-skill-desc">Sass</span>
          </div>
          <div className="skills__box-skill">
            <img src={git} alt="git" className="skills__box-skill-img" />
            <span className="skills__box-skill-desc">Git</span>
          </div>
          <div className="skills__box-skill">
            <img src={figma} alt="figma" className="skills__box-skill-img" />
            <span className="skills__box-skill-desc">Figma</span>
          </div>
          <div className="skills__box-skill">
            <img
              src={firebase}
              alt="firebase"
              className="skills__box-skill-img"
            />
            <span className="skills__box-skill-desc">Firebase</span>
          </div>
          <div className="skills__box-skill">
            <img src={mongo} alt="mongo" className="skills__box-skill-img" />
            <span className="skills__box-skill-desc">MongoDB</span>
          </div>
          <div className="skills__box-skill">
            <img src={mysql} alt="mysql" className="skills__box-skill-img" />
            <span className="skills__box-skill-desc">MySQL</span>
          </div>
          <div className="skills__box-skill">
            <img src={ai} alt="ai" className="skills__box-skill-img" />
            <span className="skills__box-skill-desc">OpenAI</span>
          </div>
        </div>
      </section>
    </>
  );
}
