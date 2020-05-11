// HomePage.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { movieGet } from '../api';
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
  const [lists, setLists] = useState('');
  const getList = async () => {
    const res = await movieGet();
    setLists(res.data.results);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <ListBox>
        {lists.length >= 1 &&
          lists.map((data) => (
            <List key={data.id}>
              <ItemList data={data} />
            </List>
          ))}
      </ListBox>
    </>
  );
};

export default HomePage;
