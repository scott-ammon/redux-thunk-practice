import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addLatestLaunch, addNextLaunch } from '../actions/index';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const mapDispatchToProps = {
  addLatestLaunch,
  addNextLaunch,
}

class FetchButton extends Component {

  static propTypes = {
    addLatestLaunch: PropTypes.func.isRequired,
    addNextLaunch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    addLatestLaunch: () => {},
    addNextLaunch: () => {},
  }

  render() {
    return (
      <Styled>
        <button onClick={this.props.addLatestLaunch} className="latest">
          Get Latest Launch
        </button>
        <button onClick={this.props.addNextLaunch} className="next">
          Get Next Launch
        </button>
      </Styled>
    )
  }
}

export default connect(null, mapDispatchToProps)(FetchButton)

const Styled = styled.div`
  button {
    margin: 2rem 0;
    padding: .5rem 1rem;
    border: none;
    border-radius: .5rem;
    background: blue;
    color: white;
  }
  .latest {
    background: blue;
  }
  .next {
    background: red;
  }
`;