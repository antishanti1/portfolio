
import {AiOutlineArrowUp} from 'react-icons/ai'
import {HashLink} from 'react-router-hash-link'
import './Footer.scss'

export default function Footer() {
    return (
        <section className='footer'>
            <p className='footer__p'>  Crafted with love in Figma and brought to life through the magic of React and Sass, with a dash of Three.js for that extra sparkle.</p>


<HashLink smooth to="/#home" className='footer__link'>
            <span className='footer__link'> Back to Top <AiOutlineArrowUp /></span>
        </HashLink>    </section> 
    )
}