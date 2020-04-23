// Header.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from './GlobalStyles';

const HeaderBox = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #24272b;
`;

const ListUl = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

const List = styled.li`
  a {
    color: ${palette.white};
    text-decoration: none;
    display: block;
    padding: 0 10px;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderBox>
        <Nav>
          <ListUl>
            <List>
              <Link to="/">Movies</Link>
            </List>
            <List>
              <Link to="/search">Search</Link>
            </List>
          </ListUl>
        </Nav>
      </HeaderBox>
    </>
  );
};

export default Header;
