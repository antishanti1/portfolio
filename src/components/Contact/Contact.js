import './Contact.scss'
import {FiArrowUpRight} from 'react-icons/fi'
import { saveAs } from 'file-saver';

export default function Contact() {

    const handleDownloadResume = () => {
        const resumePath = '../../assets/Alina_Shutkova.pdf'; 
      
        saveAs(resumePath, 'alina_shutkova.pdf');
      };

    return (
        <section className='contact'>

     <div className='contact__top'>
<h2> &lt; Contact  &gt;</h2>
     </div>

     <div className='contact__sec'>
        <span className='contact__heading'>Let's connect</span>
        <p className='contact__desc'> I would love to recieve a feedback, 
            get my hand's on the new project,
             and most imortant - GET MY FIRST JOB AS A DEVELOPER.
             Let's create amazing stuff together! </p>
        </div>

        <div className='contact__details'>
            <span className='contact__details-link'> Email: shutkova2603@gmail.com </span>
            <span className='contact__details-link'> Phone: 954-864-0770 </span>
            <a href='https://www.linkedin.com/in/alinashutkova/' target='_blank' className='contact__details-link underline'> LinkedIn  <FiArrowUpRight /></a>
            <a href='https://github.com/antishanti1' target='_blank' className='contact__details-link underline'>Github<FiArrowUpRight /></a>
            <span className='contact__details-link underline' onClick={handleDownloadResume}>
  Resume <FiArrowUpRight />
</span>
            </div>
            <div className='contact__bott'> 
    <h2 className='closing'> &lt; / Contact  &gt;</h2>
</div>
            <hr className='contact__hr'></hr> 
            </section>
    )
}