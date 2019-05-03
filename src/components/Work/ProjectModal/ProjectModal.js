import React from 'react'

class ProjectModal extends React.Component {
    componentWillMount() {
        document.addEventListener('mousedown', this.handleComponentClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleComponentClick, false)
    }

    handleComponentClick = (e) => {
        if (this.node.contains(e.target)) {
            return
        } else if (['c-project-card', 'c-project-card__image', 'c-project-card__title', 'c-project-card__tags', 'c-project__tag'].includes(e.target.className)) {
            return
        }

        this.props.onHideModal()
    }

    render() {
        const { project, onHideModal } = this.props

    return (
        <div className="c-project-modal" ref={node => this.node = node}>
            <div className="c-project-modal__sidebar">
                <h3 className="c-project-modal__title">{project.title}</h3>
                <p className="c-project-modal__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, temporibus. Vel, facere ullam natus accusantium alias dolorum obcaecati autem nobis architecto incidunt sit illum, consequuntur saepe perferendis dolores delectus laudantium.</p>
                <div className="c-project-modal__tags">
                    {project.tags.map((tag, key) => {
                        return <span className="c-project__tag" key={key}>{tag}</span>
                    })}
                </div>
            </div>
            <div className="c-project-modal__carousel">
                <img src={project.url} alt=""/>
            </div>
            <span className="c-project-modal__close" onClick={onHideModal}><i className="fas fa-times"></i></span>
        </div>
    )
    }
}

export default ProjectModal
