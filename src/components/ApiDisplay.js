import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

const mapStateToProps = state => {
  return {
    count: state.counterReducer.count,
    latestLaunch: state.launchReducer.latest,
    nextLaunch: state.launchReducer.next,

  }
}

class ApiDisplay extends Component {

  render() {
    return (
      <Style>
        <h4>API Data</h4>
        <h4>API Call Count: {this.props.count}</h4>
        <h4>Latest Launch:</h4>
        <p>Mission Name: {this.props.latestLaunch.missionName}</p>
        <p>Rocket Name: {this.props.latestLaunch.rocketName}</p>
        <p>Launch Date: {this.props.latestLaunch.launchDate}</p>
        <h4>Next Launch:</h4>
        <p>Mission Name: {this.props.nextLaunch.missionName}</p>
        <p>Rocket Name: {this.props.nextLaunch.rocketName}</p>
        <p>Launch Date: {this.props.nextLaunch.launchDate}</p>
      </Style>
    )
  }
}

const Style = styled.div`
  border: 1px solid blue;
`;

export default connect(mapStateToProps)(ApiDisplay)