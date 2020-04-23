// Layout.js

import React from 'react';
import styled from 'styled-components';
import Router from './Router';

const Main = styled.main`
  padding: 80px 16px;
  box-sizing: border-box;
`;

const Layout = () => {
  return (
    <>
      <Main>
        <Router />
      </Main>
    </>
  );
};

export default Layout;
