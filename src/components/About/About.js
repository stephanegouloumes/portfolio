import React from 'react'

const About = () => {
    return (
        <div className="container c-about">
            <header>
                <h1 className="title">ABOUT<br/><span className="is-light">ME.</span></h1>
                <div className="title-bar"></div>
            </header>
            <section>
                <div className="c-about__info">
                    <p className="c-about__title">Full Stack Web Developer</p>
                    <p className="c-about__desc">Graduated of a MSc in Computer Science and Project Management, I workes as a Full Stack Web Developer for 3 years in a large company. Then, I started working as a freelancer 2 years ago.</p>
                    <div className="c-about__stats">
                        <div className="c-about__stat">
                            <div className="c-about__stat-circle"></div>
                            <div className="c-about__stat-label">Years of experience</div>
                        </div>
                    </div>
                </div>
                <div className="c-about__skills">
                    <div className="c-about__skills-column">
                        <h3 className="c-about__skills-title">Front-end</h3>
                        <ul>
                            <li className="c-about__skills-item">Vue</li>
                            <li className="c-about__skills-item">React</li>
                            <li className="c-about__skills-item">Javascript</li>
                            <li className="c-about__skills-item">ES6</li>
                            <li className="c-about__skills-item">CSS3</li>
                            <li className="c-about__skills-item">HTML5</li>
                        </ul>
                    </div>
                    <div className="c-about__skills-column">
                        <h3 className="c-about__skills-title">Back-end</h3>
                        <ul>
                            <li className="c-about__skills-item">Laravel</li>
                            <li className="c-about__skills-item">Node</li>
                            <li className="c-about__skills-item">CodeIgniter</li>
                            <li className="c-about__skills-item">PHP 7</li>
                        </ul>
                    </div>
                    <div className="c-about__skills-column">
                        <h3 className="c-about__skills-title">Javascript</h3>
                        <ul>
                            <li className="c-about__skills-item">Express</li>
                            <li className="c-about__skills-item">Socket.io</li>
                        </ul>
                    </div>
                    <div className="c-about__skills-column">
                        <h3 className="c-about__skills-title">CMS</h3>
                        <ul>
                            <li className="c-about__skills-item">Wordpress</li>
                        </ul>
                    </div>
                    <div className="c-about__skills-column">
                        <h3 className="c-about__skills-title">Tools</h3>
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
