import React from 'react'
import styled from 'styled-components';

const ChildComponent = ({ children, name }) => {
  return (
    <Style>
      <h3>{name}</h3>
      {children}
    </Style>
  )
}

const Style = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;
  box-shadow: 0 0.125rem 1.25rem rgba(0,0,0,.2);
`;

export default ChildComponent