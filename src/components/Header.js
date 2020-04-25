// Header.js

import React from 'react';
import styled, { css } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
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
  background-color: ${palette.gray1};
`;

const ListUl = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

const List = styled.li`
  /* ${(props) => console.log(props.path)} */
  /* ${(props) => {
    if (props.path) {
      return css`
        border-bottom: 1px solid red;
      `;
    }
  }} */
  a {
    color: ${palette.white};
    text-decoration: none;
    display: block;
    padding: 0 10px;
    opacity: ${(props) => (props.path ? 1 : 0.5)};
  }
`;

const Header = (props) => {
  // console.log(props);
  return (
    <>
      <HeaderBox>
        <Nav>
          <ListUl>
            <List path={props.location.pathname === '/'}>
              <Link to="/">Movies</Link>
            </List>
            <List path={props.location.pathname === '/search'}>
              <Link to="/search">Search</Link>
            </List>
          </ListUl>
        </Nav>
      </HeaderBox>
    </>
  );
};

export default withRouter(Header);
