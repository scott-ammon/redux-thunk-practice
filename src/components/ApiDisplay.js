import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return {
    count: state.counterReducer.count,
    latestLaunch: state.launchReducer.latest,
    nextLaunch: state.launchReducer.next,
  }
}

class ApiDisplay extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    latestLaunch: PropTypes.object,
    nextLaunch: PropTypes.object,
  }

  static defaultProps = {
    count: 0,
    latestLaunch: {},
    nextLaunch: {},
  }

  render() {
    return (
      <Style>
        <h4>Call Count: {this.props.count}</h4>
        <br></br>
        <h4 className="latest">Latest Launch:</h4>
        <p>Mission Name: {this.props.latestLaunch.missionName}</p>
        <p>Rocket Name: {this.props.latestLaunch.rocketName}</p>
        <p>Launch Date: {this.props.latestLaunch.launchDate.match(/[^T]*/)[0]}</p>
        <br></br>
        <h4 className="next">Next Launch:</h4>
        <p>Mission Name: {this.props.nextLaunch.missionName}</p>
        <p>Rocket Name: {this.props.nextLaunch.rocketName}</p>
        <p>Launch Date: {this.props.nextLaunch.launchDate.match(/[^T]*/)[0]}</p>
      </Style>
    )
  }
}

const Style = styled.div`
  p {
    text-align: left;
  }
  .latest, .next {
    width: 50%;
    margin: 0 auto;
    border-radius: .5rem;
    color: white;
  }
  .latest {
    background: blue;
  }
  .next {
    background: red;
  }
`;

export default connect(mapStateToProps)(ApiDisplay)