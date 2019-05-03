import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t } = useTranslation()

    return (
        <div className="container c-contact">
            <header>
                <h1 className="title">CONT<br/><span className="is-light">ACT.</span></h1>
                <div className="title-bar"></div>
            </header>
            <section>
                <div className="c-contact__info">
                    <h2 className="c-contact__title">{t('contact.section.title')}</h2>
                    <div className="c-contact__channels">
                        <a className="c-contact__button" href="mailto:stephane.gouloumes@gmail.com"><i className="fas fa-envelope"></i></a>
                        <a className="c-contact__button" href="https://www.linkedin.com/in/stephane-gouloumes/"><i className="fab fa-linkedin"></i></a>
                        <a className="c-contact__button" href="https://www.malt.fr/profile/gouloumesstephane">Malt</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
