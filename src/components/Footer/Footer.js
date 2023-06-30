import { AiOutlineArrowUp } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import "./Footer.scss";
import bg from "../../assets/images/background1.png";

export default function Footer() {
  return (
    <section className="footer">
      <p className="footer__p">
        Created with love in Figma and brought to reality using the power of
        React and Sass, enhanced with AI assistance for styling and design.
      </p>
      <div className="footer__sign">
        <img src={bg} alt="bg" className="footer__bg" />
        <span
          style={{
            color: "#D9D9D9",
          }}
        >
          © 2023 Alina Shutkova
        </span>
      </div>
      <div
        style={{
          paddingTop: "4rem",
        }}
      >
        <HashLink smooth to="/#home" className="footer__link">
          <span className="footer__link">
            {" "}
            Back to Top <AiOutlineArrowUp />
          </span>
        </HashLink>{" "}
      </div>
    </section>
  );
}
