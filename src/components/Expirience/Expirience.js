import React from "react";
import "./Expirience.scss";
import five from "../../assets/images/5.png";
import line2 from "../../assets/images/line2.png";

export default function Expirience() {
  return (
    <section className="expirience">
      <div className="expirience__box-long">
        <span className="expirience__box-long-span">20+</span>
        <span className="expirience__box-long-blue">Projects Completed</span>
      </div>
      <div className="expirience__box-small">
        <img src={five} alt="line1" className="expirience__box-small-img" />
      </div>
      <div className="expirience__box-small">
        <img src={line2} alt="line2" className="expirience__box-small-img" />
      </div>
      <div className="expirience__box-long">
        <span className="expirience__box-long-span">2</span>
        <span className="expirience__box-long-blue">Magical Years</span>
      </div>
    </section>
  );
}
