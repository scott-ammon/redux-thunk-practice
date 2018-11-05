import React from 'react';
import SubCompTwo from './SubCompTwo';
import styled from 'styled-components';

export default function ChildTwo() {
  return (
    <Style>
      <SubCompTwo />
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