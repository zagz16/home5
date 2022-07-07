import React, { Component } from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import projects from './projects'

export default class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      justClicked: null,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({ justClicked: e.target })
  }

  render() {
    return (
      <div>
        <Toolbar onClick={this.handleClick} />
        <ProjectList arr={projects} />
      </div>
    )
  }
}
