import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'

import ProjectCard from './ProjectCard/ProjectCard'
import ProjectModal from './ProjectModal/ProjectModal2'

class Work extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                { id: 1, title: 'Board', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, temporibus. Vel, facere ullam natus accusantium alias dolorum obcaecati autem nobis architecto incidunt sit illum, consequuntur saepe perferendis dolores delectus laudantium.', link: 'http://google.fr', url: 'https://picsum.photos/640/360?random=1', tags: ['React', 'Symfony', 'MongoDB'] },
                { id: 2, title: 'Explearn', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, temporibus. Vel, facere ullam natus accusantium alias dolorum obcaecati autem nobis architecto incidunt sit illum, consequuntur saepe perferendis dolores delectus laudantium.', link: 'http://google.fr', url: 'https://picsum.photos/640/360?random=2', tags: ['Vue', 'Node', 'PostgreSQL'] },
                { id: 3, title: 'Todo', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, temporibus. Vel, facere ullam natus accusantium alias dolorum obcaecati autem nobis architecto incidunt sit illum, consequuntur saepe perferendis dolores delectus laudantium.', link: 'http://google.fr', url: 'https://picsum.photos/640/360?random=3', tags: ['Vue', 'Laravel', 'MySQL'] },
                { id: 4, title: 'Explearn', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, temporibus. Vel, facere ullam natus accusantium alias dolorum obcaecati autem nobis architecto incidunt sit illum, consequuntur saepe perferendis dolores delectus laudantium.', link: 'http://google.fr', url: 'https://picsum.photos/640/360?random=4', tags: ['Vue', 'Node', 'PostgreSQL'] },
                { id: 5, title: 'Explearn', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, temporibus. Vel, facere ullam natus accusantium alias dolorum obcaecati autem nobis architecto incidunt sit illum, consequuntur saepe perferendis dolores delectus laudantium.', link: 'http://google.fr', url: 'https://picsum.photos/640/360?random=5', tags: ['Vue', 'Node', 'PostgreSQL'] },
            ],
            'projectSelected': { id: 1, title: 'Board', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, temporibus. Vel, facere ullam natus accusantium alias dolorum obcaecati autem nobis architecto incidunt sit illum, consequuntur saepe perferendis dolores delectus laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, temporibus.', link: 'http://google.fr', url: 'https://picsum.photos/640/360?random=1', tags: ['React', 'Symfony', 'MongoDB', 'Redis'] }
        }
    }

    showModal = (projectSelected) => {
        this.setState({ projectSelected })
    }

    hideModal = () => {
        this.setState({ projectSelected: null })
    }

    render() {
        const { t } = this.props

        const projectCards = this.state.projects.length ? (
            this.state.projects.map(project => {
                return <ProjectCard key={project.id} project={project} isActive={this.state.projectSelected && project.id === this.state.projectSelected.id} onShowModal={() => this.showModal(project)}></ProjectCard>
            })
        ) : (
            <p>Coming soon.</p>
        )

        return (
            <div className="container c-work">
                <header>
                    <h1 className="title">{t('work.header.title_1')}<br/><span className="is-light">{t('work.header.title_2')}</span></h1>
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

export default withTranslation('translations')(Work)
