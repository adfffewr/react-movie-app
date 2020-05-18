// SearchPage.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { movieSearch } from '../api';
import ItemList from '../components/ItemList';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  display: block;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  border: none;
  box-shadow: none;
  outline: none;
  color: #fff;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 100px;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 3px;
  border: none;
  background-color: #24272b;
  color: #fff;
  font-size: 1rem;
  margin-left: 1.2rem;
`;

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

function SearchPage() {
  const [searchText, setSearchText] = useState('');
  const [lists, setLists] = useState('');
  const [searchResult, setSearchResult] = useState(false);

  const searchMovie = async () => {
    const res = await movieSearch(searchText);
    setLists(res.data.results);
    setSearchResult(true);
  };

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    searchMovie();
  };

  return (
    <>
      {!searchResult ? (
        <Form onSubmit={onSubmitSearch}>
          <Input
            type="text"
            placeholder="검색할 영화를 입력해주세요."
            value={searchText}
            onChange={onChangeSearchText}
          />
          <Button type="submit">검색</Button>
        </Form>
      ) : (
        <ListBox>
          {lists.length >= 1 &&
            lists.map((data) => (
              <List key={data.id}>
                <ItemList data={data} />
              </List>
            ))}
        </ListBox>
      )}
    </>
  );
}

export default SearchPage;
