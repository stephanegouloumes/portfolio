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
                <div className="c-about__info">
                    <p className="c-about__title">{t('about.section.title')}</p>
                    <p className="c-about__desc">{t('about.section.description')}</p>
                    <div className="c-about__stats">
                        <div className="c-about__stat">
                            <div className="c-about__stat-circle"><i class="fas fa-briefcase"></i></div>
                            <div className="c-about__stat-label">{t('about.section.stats.experience')}</div>
                        </div>
                        <div className="c-about__stat">
                            <div className="c-about__stat-circle"><i class="fas fa-globe-europe"></i></div>
                            <div className="c-about__stat-label">{t('about.section.stats.international')}</div>
                        </div>
                    </div>
                </div>
                <div className="c-about__skills">
                    <div className="c-about__skills-column">
                        <h3 className="c-about__skills-title">{t('about.section.skills.frontend')}</h3>
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
                        <h3 className="c-about__skills-title">{t('about.section.skills.backend')}</h3>
                        <ul>
                            <li className="c-about__skills-item">Laravel</li>
                            <li className="c-about__skills-item">Node</li>
                            <li className="c-about__skills-item">CodeIgniter</li>
                            <li className="c-about__skills-item">PHP 7</li>
                            <li className="c-about__skills-item">Express</li>
                            <li className="c-about__skills-item">Socket.io</li>
                        </ul>
                    </div>
                    <div className="c-about__skills-column">
                        <h3 className="c-about__skills-title">{t('about.section.skills.databases')}</h3>
                        <ul>
                            <li className="c-about__skills-item">SQL</li>
                            <li className="c-about__skills-item">NoSQL</li>
                            <li className="c-about__skills-item">MySQL</li>
                            <li className="c-about__skills-item">PostgreSQL</li>
                            <li className="c-about__skills-item">MongoDB</li>
                            <li className="c-about__skills-item">Redis</li>
                        </ul>
                    </div>
                    <div className="c-about__skills-column">
                        <h3 className="c-about__skills-title">{t('about.section.skills.tools')}</h3>
                        <ul>
                            <li className="c-about__skills-item">Git</li>
                            <li className="c-about__skills-item">Figma</li>
                            <li className="c-about__skills-item">Trello/Jira</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
