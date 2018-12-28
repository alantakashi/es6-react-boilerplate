import React, { Component } from 'react'
import Header from './common/header'
import Footer from './common/footer'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div>React simple starter</div>
        <Footer />
      </div>
    )
  }
}
