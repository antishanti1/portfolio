import "./MainTop.scss";
import { React, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function MainTop() {
  return (
    <div className="main__top">
      <div className="main__top-box">
        <div className="main__top-desc">
          <span className="main__heading">Passion for innovation</span>
          <p className="main__heading-p">
            I have a deep passion for innovation and constantly strive to push
            the boundaries of technology. My commitment to excellence drives me
            to continuously seek new solutions and contribute to cutting-edge
            advancements in the software engineering field.
          </p>
        </div>
        <div className="mod">
          <Canvas
            style={{
              height: "70%",
              width: "100%",
            }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 2]} intensity={0.6} />
              <Model position={[0, -0.7, 3]} />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
