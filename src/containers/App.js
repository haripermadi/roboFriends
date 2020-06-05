import React, { Component } from 'react'
import { connect } from 'react-redux'

import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import Header from '../components/Header'
import './App.css'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
  // console.log('map---', state)
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onrequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    // console.log('store----', this.props)
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ robots: users }))
    this.props.onrequestRobots()
  }

  // onSearchChange = (event) => {
  //   this.setState({
  //     search: event.target.value
  //   })
  // }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobo = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (isPending) ?
      <h1 className="tc f1">Loading...</h1>
      :
      (
        <div className="tc">
          <Header />
          <SearchBox
            search={searchField}
            searchChange={onSearchChange}
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


export default connect(mapStateToProps, mapDispatchToProps)(App)