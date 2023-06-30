import React from "react";
import "./Slide1.scss";
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";
import five from "../../assets/images/5.png";
import line1 from "../../assets/images/line1.png";

export default function Slide1() {
  return (
    <section className="slide1">
      <div className="slide1__container">
        <img src={one} alt="one" className="slide1__container-img" />
        <img src={two} alt="two" className="slide1__container-img" />
        <img src={three} alt="three" className="slide1__container-img" />
        <img src={four} alt="four" className="slide1__container-img" />
        <img src={line1} alt="five" className="slide1__container-img" />
      </div>
    </section>
  );
}
