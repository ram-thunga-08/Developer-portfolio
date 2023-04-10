import './experience.scss';
import {HiBadgeCheck} from 'react-icons/hi';

const Experience = ()=>{
    return (
        <section id='experience'>
             <div className='container experience__container'>
                <div className='content flex-centered'>
                    <span>Experience</span>
                </div>
                <div className='experience__description'>
                    <div className='experience__frontend experience__description-item'>
                        <h3>Frontend Development</h3>
                        <div className='experience__content'>
                            <article className='experience__details'>
                                <HiBadgeCheck className='experience__icon'/>
                                <div>
                                    <h4>HTML & SCSS</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <HiBadgeCheck className='experience__icon'/>
                                <div>
                                    <h4>Javascript</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <HiBadgeCheck className='experience__icon'/>
                                <div>
                                    <h4>Angular</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <HiBadgeCheck className='experience__icon'/>
                                <div>
                                    <h4>React</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <HiBadgeCheck className='experience__icon'/>
                                <div>
                                    <h4>Redux</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <HiBadgeCheck className='experience__icon'/>
                                <div>
                                    <h4>Material UI</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className='experience__backend experience__description-item'>
                        <h3>Backend Development</h3>
                        <div className='experience__content'>
                            <article className='experience__details'>
                                <HiBadgeCheck className='experience__icon'/>
                                <div>
                                    <h4>Node JS</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <HiBadgeCheck className='experience__icon'/>
                                <div>
                                    <h4>MongoDB</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <HiBadgeCheck className='experience__icon'/>
                                <div>
                                    <h4>Express</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <HiBadgeCheck className='experience__icon'/>
                                <div>
                                    <h4>MySQL</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience