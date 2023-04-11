import "./about.scss";
import myProfile from '../../assets/images/my-profile.jpeg'
import {BsAward} from 'react-icons/bs';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
        <div className="container about-container">
            <div className="content flex-centered">
                <span>About me</span>
            </div>
            <div className="about-me-section">
                <div className="about-me-pic">
                    <img src={myProfile} alt="My Profile"/>
                </div>
                <div className="about-me-description">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsAward className="about__card-icon"/>
                            <h5>Experience</h5>
                            <small>6+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__card-icon"/>
                            <h5>Projects</h5>
                            <small>8+ Projects</small>
                        </article>
                    </div>
                    <p>Hi, I'm Ram Tunga, a software developer with strong coding and design skills. With 6+ years of experience, I specialize in creating visually appealing and responsive user interfaces using HTML, CSS, and JavaScript. I am skilled in using popular frontend frameworks such as React, Angular, and Vue. My expertise in delivering high-quality frontend solutions with a focus on enhancing user experience makes me a valuable asset to any project.</p>
                    <a href="#contact" className="btn">Let's Talk</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
