import "./Main.scss";
import { React, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RainModel from "./RainModel";
import me from "../../assets/images/me.jpg";

export default function Main() {
  return (
    <section className="main">
      <div className="main__top">
        <div className="design__sq2"></div>
        <div className="design__triangle"></div>
        <div className="main__top-dots"></div>
        <div className="main__top-cont">
          <div className="design__cross "></div>
          <img src={me} alt="me" className="main__top-img" />
          <p className="main__name">Hi! My name is Alina.</p>
          {/* <div className="main__mod--mobile">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[0, 4, 4]} intensity={1} />
                <RainModel />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div> */}
        </div>
        <div className="main__me">
          <div className="design__line"></div>
          <div className="design__sq"></div>
          {/* <div className="main__mod--desktop">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[0, 4, 4]} intensity={1} />
                <RainModel />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div> */}
          <p className="main__name--desktop">Hi! My name is Alina.</p>
          <p className="main__me-desc">
            I am a {""}
            <span className="main__me--bold">
              Full Stack Web Developer
            </span>{" "}
            based in Miami. With a background in car sales and financing, I
            bring a unique perspective to my work, combining my technical skills
            with a deep understanding of the industry. Explore my projects and
            experience to see how I can help bring your digital ideas to life.
          </p>
        </div>
      </div>
      {/* <div className="main__bottom"></div> */}
    </section>
  );
}
