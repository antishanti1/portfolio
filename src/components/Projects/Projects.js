import './Projects.scss'
import {FiArrowUpRight} from 'react-icons/fi'
import aidMapper from '../../assets/images/dopomoha.png'
import ukg from '../../assets/images/ukg.png'
import instock from '../../assets/images/instock.png'

export default function Projects() {
    return (
        <section className='projects'>
            <div className='hr__box'>
            <hr className='hr__box-top'></hr></div>
            <div className='projects__container'>
                <div className='projects__top'>

           
                <h2> &lt; Projects &gt;</h2>     </div>

                <div className='projects__main'>
                    <div className='projects__main-box'>
                        <div className='projects__main-img' >
                    <img src={aidMapper} alt='aidMapper' className='projects__main-img--img longer'></img>
                        </div>
                        <div className='projects__main-exp'>
                        <span className='projects__main-tech'>REACT, MONGODB, NODE, EXPRESS, MapBox</span>
                        <span className='projects__main-name'>aidMApper</span>
                        <p className='projects__main-desc'>Web-platform for refugee donations and volunteering, featuring a
map-based interface for easy location-based donations .</p>
<a href='https://dopomoha.vercel.app/map' target='_blank' rel="noreferrer" className='projects__main-link'>VIEW PROJECT <FiArrowUpRight /></a> </div>

                    </div>
                    </div>
                <div className='projects__main'>
                    <div className='projects__main-box'>
                        <div className='projects__main-img' >
                    <img src={ukg} alt='aidMapper' className='projects__main-img--img '></img>
                        </div>
                        <div className='projects__main-exp'>
                        <span className='projects__main-tech'>REACT, AI</span>
                        <span className='projects__main-name'>TeamWise by UKG</span>
                        <p className='projects__main-desc'>Workplace Psychological Safety Toolkit “TeamWise by UKG” using Generative AI Technology that can automate tasks, generate creative content, and make better decisions by analyzing data and identifying patterns by collaborating with UX designers and group of other students.</p>
                        <a href='https://teamwise.vercel.app/' target='_blank' rel="noreferrer" className='projects__main-link'>VIEW PROJECT / only desktop view <FiArrowUpRight /></a> </div>
                    </div>
                    </div>
                <div className='projects__main'>
                    <div className='projects__main-box'>
                        <div className='projects__main-img' >
                    <img src={instock} alt='aidMapper' className='projects__main-img--img longer'></img>
                        </div>
                        <div className='projects__main-exp'>
                        <span className='projects__main-tech'>REACT, MYSQL, NODE, EXPRESS</span>
                        <span className='projects__main-name'>In Stock</span>
                        <p className='projects__main-desc'>Project for a Fortune 500 client—an Inventory Management System called 'InStock.' The project involved building a scalable, full-stack web application with a modern React front-end and a robust Express back-end. In group we followed an Agile approach, utilizing a JIRA Scrum board to manage tasks and ensure efficient progress. </p>
                        <span className='projects__main-link'>COMING SOON</span> </div>
                    </div>
                    </div>
            </div>
            <div className='hr__box'>
            <div className='projects__bott'>
          <h2 className='closing'> &lt; / Projects &gt;</h2>     </div>
            <hr className='hr__box-bottom'></hr> </div>
            </section>
    )
}