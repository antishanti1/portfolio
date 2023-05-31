import React, { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";
import './Skills.scss'

export default function Skills() {



    
    return (
        <>
      <section className='skills'>
        <div className='skills__main'>
<div className='skills__main-top'> 
    <h2> &lt; Skills  &gt;</h2>
</div>
<div className='skills__main-sec'>
<Marquee>
<span className='skills__main-list'> HTML</span>
<span className='skills__main-list'>CSS</span>
<span className='skills__main-list'>JavaScript</span>
<span className='skills__main-list'>React</span>
<span className='skills__main-list'>Node</span>
<span className='skills__main-list'>Express</span>
<span className='skills__main-list'>MySQL</span>
<span className='skills__main-list'>MongoDB</span>
<span className='skills__main-list'>Git</span>
<span className='skills__main-list'>Heroku</span>
<span className='skills__main-list'>Postman</span>
<span className='skills__main-list'>Firebase</span>
<span className='skills__main-list'>Jira</span>
<span className='skills__main-list'>Agile</span>
<span className='skills__main-list'>Jest</span>
<span className='skills__main-list'>Three.js</span>

          </Marquee>
</div>
        </div>
        <div className='skills__main-bott'> 
    <h2 className='skills__main-closing'> &lt; / Skills  &gt;</h2>
</div>
        <hr className='skills__main-hr'></hr>
        </section>
        </>
    )
}