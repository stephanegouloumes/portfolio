import React from 'react'

const ProjectCard = ({project, onShowModal}) => {
    return (
        <div className="c-project-card" onClick={onShowModal}>
            <img className="c-project-card__image" src={project.url} alt={project.title} />
            <h3 className="c-project-card__title">{project.title}</h3>
            <div className="c-project-card__tags">
                {project.tags.map((tag, key) => {
                    return <span className="c-project__tag" key={key}>{tag}</span>
                })}
            </div>
        </div>
    )
}

export default ProjectCard
