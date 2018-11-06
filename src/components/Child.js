import React from 'react'
import styled from 'styled-components';

const ChildComponent = ({ children, name }) => {
  return (
    <Style>
      <h3>Child Container {name}</h3>
      {children}
    </Style>
  )
}

const Style = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;

export default ChildComponent