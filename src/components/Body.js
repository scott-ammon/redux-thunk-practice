import React from 'react';
import Child from './Child';
import FetchButton from './FetchButton';
import ApiDisplay from './ApiDisplay';
import styled from 'styled-components';

export default function Body() {
  return (
    <Style>
      <h3>Parent Container</h3>
      <Flex>
        <Child name={"One"}>
          <FetchButton />
        </Child>
        <Child name={"Two"}>
          <ApiDisplay />
        </Child>
      </Flex>
    </Style>
  )
}

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
`;

const Style = styled.div`

`;
