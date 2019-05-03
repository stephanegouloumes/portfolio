import React, { Component } from 'react'

import ProjectCard from './ProjectCard/ProjectCard'
import ProjectModal from './ProjectModal/ProjectModal'

class Work extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                { id: 1, title: 'Explearn', url: 'https://picsum.photos/640/360?random=1', tags: ['Vue', 'Node', 'PostgreSQL'] },
                { id: 2, title: 'Explearn', url: 'https://picsum.photos/640/360?random=2', tags: ['Vue', 'Node', 'PostgreSQL'] },
                { id: 3, title: 'Explearn', url: 'https://picsum.photos/640/360?random=3', tags: ['Vue', 'Node', 'PostgreSQL'] },
                { id: 4, title: 'Explearn', url: 'https://picsum.photos/640/360?random=4', tags: ['Vue', 'Node', 'PostgreSQL'] },
                { id: 5, title: 'Explearn', url: 'https://picsum.photos/640/360?random=5', tags: ['Vue', 'Node', 'PostgreSQL'] },
            ],
            'projectSelected': { id: 1, title: 'Explearn', url: 'https://picsum.photos/320/180?random=1', tags: ['Vue', 'Node', 'PostgreSQL'] }
        }
    }

    showModal = (projectSelected) => {
        this.setState({ projectSelected })
    }

    hideModal = () => {
        this.setState({ projectSelected: null })
    }

    render() {
        const projectCards = this.state.projects.length ? (
            this.state.projects.map(project => {
                return <ProjectCard key={project.id} project={project} onShowModal={() => this.showModal(project)}></ProjectCard>
            })
        ) : (
            <p>Coming soon.</p>
        )

        return (
            <div className="container c-work">
                <header>
                    <h1 className="title">WO<br/><span className="is-light">RK.</span></h1>
                    <div className="title-bar"></div>
                </header>
                <section>
                    {projectCards}
                </section>
                {this.state.projectSelected && <ProjectModal project={this.state.projectSelected} onHideModal={this.hideModal}></ProjectModal>}
            </div>
        )
    }
}

export default Work
