import React from 'react';
import Child from './Child';
import FetchButton from './FetchButton';
import ApiDisplay from './ApiDisplay';
import styled from 'styled-components';

const Body = () => {
  return (
    <Flex>
      <Child name={"Fetch SpaceX Data"}>
        <FetchButton />
      </Child>
      <Child name={"API Results"}>
        <ApiDisplay />
      </Child>
    </Flex>
  )
}

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0.125rem 1.25rem rgba(0,0,0,.2);
`;

export default Body