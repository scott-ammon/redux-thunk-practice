import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, addLatestLaunch, addNextLaunch } from '../actions/index';
import styled from 'styled-components';

const mapDispatchToProps = {
  incrementCounter,
  addLatestLaunch,
  addNextLaunch,
}

class FetchButton extends Component {

  render() {
    return (
      <Styled>
        <h4>Fetch SpaceX Data</h4>
        <button onClick={this.props.addLatestLaunch}>
          Get Latest Launch
        </button>
        <button onClick={this.props.addNextLaunch}>
          Get Next Launch
        </button>
      </Styled>
    )
  }
}

export default connect(null, mapDispatchToProps)(FetchButton)

const Styled = styled.div`
  border: 1px solid blue;
  button {
    margin-bottom: 1rem;
    padding: .5rem 1rem;
    border: none;
    border-radius: .5rem;
    background: blue;
    color: white;
  }
`;