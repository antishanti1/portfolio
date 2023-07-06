import React from "react";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Projects.scss";
import arrow from "../../assets/images/purple.png";
import aidMapper from "../../assets/images/dopomoha.png";
import ukg from "../../assets/images/ukg.png";
import instock from "../../assets/images/instock.png";
import voxai from "../../assets/images/voxai.png";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="projects__heading">Projects</h1>
      <div className="projects__box--mobile">
        <div className="projects__box-cont">
          <img src={aidMapper} alt="aidMapper" className="projects__box-img" />
          <div className="stack">
            <span className="stack__span">React</span>
            <span className="stack__span">Express.js</span>
            <span className="stack__span">MongoDB</span>
            <span className="stack__span">Node.js</span>
            <span className="stack__span">MapBox</span>
          </div>
          <span className="projects__box-name">AidMapper</span>
          <span className="projects__box-desc">
            Volunteering platform for refugees, featuring a map-based
            application. Real-time donation posting functionality based on map
            location. Empowered users to contribute and view donations easily
            through an intuitive and interactive interface.
          </span>
          <div className="projects__box-link">
            View Project{" "}
            <img src={arrow} alt="arrow" className="projects__box-link-img" />
          </div>
        </div>
        <div className="projects__box-cont">
          <img src={voxai} alt="voxai" className="projects__box-img" />
          <div className="stack">
            <span className="stack__span">React Native</span>
            <span className="stack__span">OpenAI Api</span>
            <span className="stack__span">IOs/Android</span>
          </div>
          <span className="projects__box-name">VoxAI</span>
          <span className="projects__box-desc">
            Mobile app that combines the power of natural language processing
            seamless real-time image and text generation within the platform,
            enhancing the overall user experience.Custom AI chatbot powered by
            OpenAI API.Chat with the AI and generate images at the same time
          </span>
          <div className="projects__box-link">
            View Project{" "}
            <img src={arrow} alt="arrow" className="projects__box-link-img" />
          </div>
        </div>
        <div className="projects__box-cont">
          <img src={ukg} alt="ukg" className="projects__box-img" />
          <div className="stack">
            <span className="stack__span">React</span>
            <span className="stack__span">Generative AI</span>
          </div>
          <span className="projects__box-name">TeamWise by UKG</span>
          <span className="projects__box-desc">
            Psychological Safety Toolkit using Generative AI Technology. In
            collaboration with engineers and UX designers in an Agile
            environment, leveraged Jira for project management, automated tasks,
            generated creative content, and made data-driven decisions by
            analyzing patterns.
          </span>
          <div className="projects__box-link">
            View Project{" "}
            <img src={arrow} alt="arrow" className="projects__box-link-img" />
          </div>
        </div>
        <div className="projects__box-cont">
          <img src={instock} alt="instock" className="projects__box-img" />
          <div className="stack">
            <span className="stack__span">React</span>
            <span className="stack__span">MySQL</span>
            <span className="stack__span">Node.js</span>
            <span className="stack__span">Express.js</span>
          </div>
          <span className="projects__box-name">InStock</span>
          <span className="projects__box-desc">
            Project for a Fortune 500 client—an Inventory Management System
            called 'InStock.' The project involved building a scalable,
            full-stack web application. In group we followed an Agile approach,
            utilizing a JIRA Scrum board to manage tasks and ensure efficient
            progress.
          </span>
          <div className="projects__box-link">Coming Soon </div>
        </div>
      </div>

      <div className="projects__box--desktop">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={4}
          visibleSlides={1}
          infinite={true}
          className="carousel"
        >
          <Slider>
            <Slide className="carousel__slide" index={0}>
              <div className="projects__box-cont">
                <img
                  src={aidMapper}
                  alt="aidMapper"
                  className="projects__box-img"
                />
                <div className="stack">
                  <span className="stack__span">React</span>
                  <span className="stack__span">Express.js</span>
                  <span className="stack__span">MongoDB</span>
                  <span className="stack__span">Node.js</span>
                  <span className="stack__span">MapBox</span>
                </div>
                <span className="projects__box-name">AidMapper</span>
                <span className="projects__box-desc">
                  Volunteering platform for refugees, featuring a map-based
                  application. Real-time donation posting functionality based on
                  map location. Empowered users to contribute and view donations
                  easily through an intuitive and interactive interface.
                </span>
                <Link
                  to="https://dopomoha.vercel.app/map"
                  target="_blank"
                  className="projects__box-link"
                >
                  <div className="projects__box-link">
                    View Project{" "}
                    <img
                      src={arrow}
                      alt="arrow"
                      className="projects__box-link-img"
                    />
                  </div>
                </Link>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="projects__box-cont">
                <img src={voxai} alt="voxai" className="projects__box-img" />
                <div className="stack">
                  <span className="stack__span">React Native</span>
                  <span className="stack__span">OpenAI Api</span>
                  <span className="stack__span">IOs/Android</span>
                </div>
                <span className="projects__box-name">VoxAI</span>
                <span className="projects__box-desc">
                  Mobile app that combines the power of natural language
                  processing and seamless real-time image generation within the
                  platform enhancing the overall user experience.Custom AI
                  chatbot powered by OpenAI API.
                </span>
                <Link
                  to="https://expo.dev/@antishanti/voxai?serviceType=classic&distribution=expo-go"
                  className="projects__box-link"
                  target="_blank"
                >
                  <div className="projects__box-link">
                    View Project{" "}
                    <img
                      src={arrow}
                      alt="arrow"
                      className="projects__box-link-img"
                    />
                  </div>
                </Link>
              </div>
            </Slide>
            <Slide index={3}>
              <div className="projects__box-cont">
                <img src={ukg} alt="ukg" className="projects__box-img" />
                <div className="stack">
                  <span className="stack__span">React</span>
                  <span className="stack__span">Generative AI</span>
                </div>
                <span className="projects__box-name">TeamWise by UKG</span>
                <span className="projects__box-desc">
                  Psychological Safety Toolkit using Generative AI Technology.
                  In collaboration with engineers and UX designers in an Agile
                  environment, leveraged Jira for project management, automated
                  tasks, generated creative content, and made data-driven
                  decisions by analyzing patterns.
                </span>
                <Link
                  to="https://teamwise.vercel.app/"
                  className="projects__box-link"
                  target="_blank"
                >
                  <div className="projects__box-link">
                    View Project{" "}
                    <img
                      src={arrow}
                      alt="arrow"
                      className="projects__box-link-img"
                    />
                  </div>
                </Link>
              </div>
            </Slide>
            <Slide index={4}>
              <div className="projects__box-cont">
                <img
                  src={instock}
                  alt="instock"
                  className="projects__box-img"
                />
                <div className="stack">
                  <span className="stack__span">React</span>
                  <span className="stack__span">MySQL</span>
                  <span className="stack__span">Node.js</span>
                  <span className="stack__span">Express.js</span>
                </div>
                <span className="projects__box-name">InStock</span>
                <span className="projects__box-desc">
                  Project for a Fortune 500 client—an Inventory Management
                  System called 'InStock.' The project involved building a
                  scalable, full-stack web application. In group we followed an
                  Agile approach, utilizing a JIRA Scrum board to manage tasks
                  and ensure efficient progress.
                </span>
                <div className="projects__box-link">Coming Soon </div>
              </div>
            </Slide>
          </Slider>
          <ButtonBack className="carousel__btn--back">
            <img src={left} alt="arrow" className="carousel__btn-img" />
          </ButtonBack>
          <ButtonNext className="carousel__btn--next">
            <img src={right} alt="arrow" className="carousel__btn-img" />
          </ButtonNext>
        </CarouselProvider>
      </div>
    </section>
  );
}
