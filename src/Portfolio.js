import React, { Component } from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import projects from './projects'

export default class Portfolio extends Component {
  constructor() {
    super()
    const uniqueFilters = [...new Set(projects.map((item) => item.category))]
    this.state = {
      filterList: ['all', ...uniqueFilters],
      filteredProjects: projects,
    }
  }

  handleClick = (filter) => {
    this.setState({
      filteredProjects: filter === 'all' ? projects : projects.filter((item) => item.category === filter),
    })
  }

  render() {
    return (
      <div>
        <Toolbar filterList={this.state.filterList} onClick={this.handleClick} />
        <ProjectList projects={this.state.filteredProjects} />
      </div>
    )
  }
}
