import React from 'react'
import SubCompOne from './SubCompOne';
import styled from 'styled-components';

export default function ChildOne() {
  return (
    <Style>
      <SubCompOne />
    </Style>
  )
}

const Style = styled.div`
  display: inline-block;
  margin: 1rem;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 3rem;
`;
