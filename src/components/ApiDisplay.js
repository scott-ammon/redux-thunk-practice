import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return {
    count: state.counterReducer.count,
    latestLaunch: state.launchReducer.latest,
    nextLaunch: state.launchReducer.next,
    isFetching: state.launchReducer.isFetching,
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
        this.props.isFetching ? 
          <Style>
            <h4>Fetching Data</h4>
            <div className="container">
              <div className="loading"></div>
            </div>
          </Style> : 
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
        );
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
  .container {
    width: 90%;
    margin: 0 auto;
  }
  .loading {
    margin: 50px auto 0 auto;
    border: 16px solid #f3f3f3;
    border-top: 16px solid blue;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); 
  }
`;

export default connect(mapStateToProps)(ApiDisplay)