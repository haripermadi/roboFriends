import React, { Component } from 'react'

import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import { robots } from '../robots'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const { robots, search } = this.state
    const filteredRobo = robots.filter(robot => {
      return robot.name.toLowerCase().includes(search.toLowerCase())
    })

    return (!robots.length) ?
      <h1 className="tc f1">Loading...</h1>
      :
      (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <SearchBox
            search={search}
            searchChange={this.onSearchChange}
          />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobo} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}


export default App