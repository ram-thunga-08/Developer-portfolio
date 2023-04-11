import './sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <>
            <ul className='sidebar'>
                <li>
                    <a 
                        href="https://linkedin.com/in/rama-t-799a78256" 
                        target="_blank" 
                        rel='noreferrer'
                        className='social-media-icons'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/ram-thunga-08" 
                        target="_blank" 
                        rel='noreferrer'
                        className='social-media-icons'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                {/* <li>
                    <a 
                        href="https://twitter.com/" 
                        target="_blank" 
                        rel='noreferrer'
                        className='social-media-icons'>
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                    </a>
                </li> */}
            </ul>
        </>
    )
}

export default Sidebar