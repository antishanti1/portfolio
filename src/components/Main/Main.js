import "./Main.scss";
import { React, useEffect } from "react";
import bg from "../../assets/images/background1.png";
import { useInView } from "react-intersection-observer";
import MainTop from "../MainTop/MainTop";

export default function Main() {
  return (
    <section className="main">
      <div className="main__intro">
        <div>
          <img src={bg} alt="bg" className="main__intro-img" />
        </div>
        <p className="main__intro-text">
          Hi! M<span>y name is </span>
          Alina. I am a Full Stack Web Dev based in Miami.
        </p>
      </div>
    </section>
  );
}
