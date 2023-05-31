import './Main.scss';
import { React, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RainModel from './RainModel';


export default function Main() {
    return (
        <section className='main'>
            <div className='main__top'>
            <p className='main__name'>
                Hi! My name is Alina Shutkova.
            </p>
            <p className='main__me'>
            I am a <span className='main__me--bold'>Full Stack Web Developer</span> based in Miami. With a background in car sales and financing, I bring a unique perspective to my work, combining my technical skills with a deep understanding of the industry. Explore my projects and experience to see how I can help bring your digital ideas to life.
            </p>  </div>
            <div className='main__bottom'>
                </div>
                <div className='intro__mod'>
                        <Canvas>
                            <Suspense fallback={null}>
                                <ambientLight intensity={.3} />
                                <directionalLight position={[0, 4, 4]} intensity={1} />
                                <RainModel />
                                <OrbitControls enableZoom={false} />
                            </Suspense>
                        </Canvas>
                    </div>
            </section>
    )
}