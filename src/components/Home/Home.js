import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation()

    return (
        <div className="container c-home">
            <div className="c-home__container">
            <div className="c-home__col">
                <div className="c-home__row c-home__row--center">
                    <div className="c-home__header">
                        <h1>{t('home.header.title_1')}</h1>
                        <h2>{t('home.header.title_2')}</h2>
                    </div>
                </div>
                <div className="c-home__row">
                    <NavLink className="c-home__button" to="/about"><span>{t('home.button')}</span></NavLink>
                </div>
            </div>
            <div className="c-home__col c-home__col--right"></div>
            </div>
        </div>
    )
}

export default Home
