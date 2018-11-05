import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter } from '../actions/index';

const mapStateToProps = state => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = {
  incrementCounter,
}

class SubCompOne extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.incrementCounter(this.state.count)
  }

  render() {
    return (
        <button onClick={this.handleClick}>
          Increment Counter
        </button>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCompOne)