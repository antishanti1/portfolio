import "./Contact.scss";
import { saveAs } from "file-saver";
import arrow from "../../assets/images/arrow.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import resume from "../../assets/Alina_Shutkova-Resume.pdf";

export default function Contact() {
  const handleDownloadResume = () => {
    saveAs(resume, "alina_shutkova.pdf");
  };

  return (
    <section className="contact">
      <h1 className="contact__heading">Let's Connect!</h1>

      <div className="contact__box">
        <p className="contact__p">
          I would love to recieve a feedback, get my hand's on the new project,
          and most imortant - BE A PART OF YOUR TEAM AS A DEVELOPER. Let's
          create amazing stuff together!
        </p>
        <div className="contact__box-right">
          <a
            href="mailto:shutkova2603@gmail.com?subject=Project Inquiry"
            className="lk"
          >
            <div className="contact__box-links">
              Send me an email
              <img src={arrow} alt="arrow" className="contact__icon" />
            </div>{" "}
          </a>
          <div className="contact__box-links" onClick={handleDownloadResume}>
            Download my resume
            <img src={arrow} alt="arrow" className="contact__icon" />
          </div>

          <div className="contact__box-social">
            <a
              href="https://twitter.com/shutkova_a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" className="contact__img" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/alinashutkova/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="contact__img" />
            </a>
            <a
              href="https://github.com/antishanti1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" className="contact__img" />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="contact__desktop">
        <div className="contact__sec">
          <span className="contact__heading">Let's connect</span>
          <p className="contact__desc">
            {" "}
            I would love to recieve a feedback, get my hand's on the new
            project, and most imortant - BE A PART OF YOUR TEAM AS A DEVELOPER.
            Let's create amazing stuff together!{" "}
          </p>
        </div>

        <div className="contact__details">
          <span className="contact__details-link">
            {" "}
            Email: shutkova2603@gmail.com{" "}
          </span>
          <span className="contact__details-link"> Phone: 954-864-0770 </span>
          <a
            href="https://www.linkedin.com/in/alinashutkova/"
            target="_blank"
            className="contact__details-link underline"
            rel="noreferrer"
          >
            {" "}
            LinkedIn <FiArrowUpRight />
          </a>
          <a
            href="https://github.com/antishanti1"
            target="_blank"
            className="contact__details-link underline"
            rel="noreferrer"
          >
            Github
            <FiArrowUpRight />
          </a>
          <span
            className="contact__details-link underline"
            onClick={handleDownloadResume}
          >
            Resume <FiArrowUpRight />
          </span>
        </div>
      </div>
      <div className="contact__bott">
        <h2 className="closing"> &lt; / Contact &gt;</h2>
      </div> */}
    </section>
  );
}
