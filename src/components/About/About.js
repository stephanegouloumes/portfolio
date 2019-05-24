import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()

    return (
        <div className="container c-about">
            <header>
                <h1 className="title">{t('about.header.title_1')}<br/><span className="is-light">{t('about.header.title_2')}</span></h1>
                <div className="title-bar"></div>
            </header>
            <section>
                <div className="c-about__row">
                    <img className="c-about__avatar" src="/images/avatar.jpg" alt="avatar"/>
                    {/* <div className="c-about__avatar"></div> */}
                </div>
                <div className="c-about__row c-about__row--first">
                    <div className="c-about__info">
                        <p className="c-about__title">{t('about.section.info.title')}</p>
                        <p className="c-about__desc">{t('about.section.info.description')}</p>
                    </div>
                </div>
                <div className="c-about__row">
                    <ul className="c-about__services">
                        <li className="c-about__service">
                            <i className="fas fa-desktop"></i><span>{t('about.section.services.website')}</span>
                        </li>
                        <li className="c-about__service">
                            <i className="fas fa-mobile-alt"></i><span>{t('about.section.services.app')}</span>
                        </li>
                        <li className="c-about__service">
                            <i className="fas fa-toolbox"></i><span>{t('about.section.services.maintenance')}</span>
                        </li>
                        <li className="c-about__service">
                            <i className="fas fa-cog"></i><span>{t('about.section.services.api')}</span>
                        </li>
                    </ul>
                    <div className="c-about__skills">
                        <div className="c-about__skills-column">
                            <h3 className="c-about__skills-title"><i className="fas fa-code"></i></h3>
                            {/* <h3 className="c-about__skills-title">{t('about.section.skills.backend')}</h3> */}
                            <ul>
                                <li className="c-about__skills-item">Laravel</li>
                                <li className="c-about__skills-item">Symfony</li>
                                <li className="c-about__skills-item">Node</li>
                                <li className="c-about__skills-item">CodeIgniter</li>
                                <li className="c-about__skills-item">PHP 7</li>
                                <li className="c-about__skills-item">Express</li>
                                <li className="c-about__skills-item">Socket.io</li>
                            </ul>
                        </div>
                        <div className="c-about__skills-column">
                            <h3 className="c-about__skills-title"><i className="fas fa-palette"></i></h3>
                            {/* <h3 className="c-about__skills-title">{t('about.section.skills.frontend')}</h3> */}
                            <ul>
                                <li className="c-about__skills-item">Vue</li>
                                <li className="c-about__skills-item">React</li>
                                <li className="c-about__skills-item">Javascript</li>
                                <li className="c-about__skills-item">ES6</li>
                                <li className="c-about__skills-item">Wordpress</li>
                                <li className="c-about__skills-item">CSS3</li>
                                <li className="c-about__skills-item">HTML5</li>
                            </ul>
                        </div>
                        <div className="c-about__skills-column">
                            <h3 className="c-about__skills-title"><i className="fas fa-server"></i></h3>
                            {/* <h3 className="c-about__skills-title">{t('about.section.skills.databases')}</h3> */}
                            <ul>
                                <li className="c-about__skills-item">MySQL</li>
                                <li className="c-about__skills-item">PostgreSQL</li>
                                <li className="c-about__skills-item">MongoDB</li>
                                <li className="c-about__skills-item">Redis</li>
                                <li className="c-about__skills-item">GraphQL</li>
                                <li className="c-about__skills-item">NoSQL</li>
                            </ul>
                        </div>
                        <div className="c-about__skills-column">
                            <h3 className="c-about__skills-title"><i className="fas fa-wrench"></i></h3>
                            {/* <h3 className="c-about__skills-title">{t('about.section.skills.tools')}</h3> */}
                            <ul>
                                <li className="c-about__skills-item">Git</li>
                                <li className="c-about__skills-item">Figma</li>
                                <li className="c-about__skills-item">Trello/Jira</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
