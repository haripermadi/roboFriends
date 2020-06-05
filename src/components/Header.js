import React, { PureComponent } from 'react'

import CounterButton from './CounterButton'

class Header extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('shouldheader----', nextProps, '---', nextState)
  //   return false
  // }

  render() {
    console.log('header---')
    return (
      <div>
        <h1 className="f1">Robo Friends</h1>
        <CounterButton color={'red'} />
      </div>
    )
  }
}

export default Header