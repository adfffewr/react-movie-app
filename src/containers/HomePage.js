// HomePage.js

import React from 'react';
import styled from 'styled-components';
import ItemList from '../components/ItemList';

const ListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const List = styled.li`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    width: 33.33%;
  }

  @media screen and (min-width: 1200px) {
    width: 25%;
  }
`;

const HomePage = () => {
  return (
    <>
      <ListBox>
        <List>
          <ItemList />
        </List>
        <List>
          <ItemList />
        </List>
        <List>
          <ItemList />
        </List>
        <List>
          <ItemList />
        </List>
        <List>
          <ItemList />
        </List>
      </ListBox>
    </>
  );
};

export default HomePage;
