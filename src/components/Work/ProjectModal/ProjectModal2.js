import React from 'react'
import { withTranslation } from 'react-i18next'

class ProjectModal extends React.Component {
    componentWillMount() {
        document.addEventListener('mousedown', this.handleComponentClick, false)
        document.addEventListener('keydown', this.handleComponentKeyPress, false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleComponentClick, false)
        document.removeEventListener('keydown', this.handleComponentKeyPress, false)
    }

    handleComponentClick = (e) => {
        if (this.node.contains(e.target)) {
            return
        } else if (['c-project-card', 'c-project-card__image', 'c-project-card__title', 'c-project-card__tags', 'c-project__tag'].includes(e.target.className)) {
            return
        }

        this.props.onHideModal()
    }

    handleComponentKeyPress = (e) => {
        if (e.keyCode === 27) {
            this.props.onHideModal()
        }
    }

    render() {
        const { project, t } = this.props

        return (
            <div className="c-project-modal" ref={node => this.node = node}>
                <div className="c-project-modal__header">
                    <h3 className="c-project-modal__title">{project.title}</h3>
                    <a className="c-project-modal__button o-button o-button--small o-button--red o-button--ripple" href={project.link}>{t('work.modal.button')}</a>
                </div>
                <div className="c-project-modal__carousel">
                    <img src={project.url} alt={project.title}/>
                </div>
                <div className="c-project-modal__content">
                    <p className="c-project-modal__description">{project.description}</p>
                    <div className="c-project-modal__tags">
                        {project.tags.map((tag, key) => {
                            return <span className="o-tag o-tag--small" key={key}>{tag}</span>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation('translations')(ProjectModal)
