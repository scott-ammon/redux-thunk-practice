import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

const mapStateToProps = state => {
  return {
    count: state.count,
  }
}

class SubCompTwo extends Component {

  render() {
    return (
      <Style>
        <h3>Counter:{this.props.count}</h3>
      </Style>
    )
  }
}

const Style = styled.div`
  h3 {
    margin: 0;
  }
`;

export default connect(mapStateToProps)(SubCompTwo)