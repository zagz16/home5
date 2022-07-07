import React, { Component } from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import projects from './projects'

export default class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      nameButton: [{ name: 'all' }, { name: 'Websites' }, { name: 'Flayers' }, { name: 'Business Cards' }],
      def: 'all',
      filtered: [],
    }
  }

  commitInputChanges = (e) => {
    this.setState({ def: e.target.value })
  }

  render() {
    const { nameButton, def } = this.state
    return (
      <div>
        <Toolbar name={nameButton} onChange={this.commitInputChanges} />
        <ProjectList arr={projects} />
      </div>
    )
  }
}
