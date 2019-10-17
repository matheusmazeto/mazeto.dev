import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/global';

import Sidebar from '../sidebar';
import Header from '../header';

import { Wrapper } from './style';
import Menu from '../menu';

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={{}}>
      <>
        <GlobalStyle />
        <Wrapper>
          <Header open={open} setOpen={() => setOpen(!open)} />
          <main>{children}</main>
        </Wrapper>
      </>
    </ThemeProvider>
  );
}

export default Layout;
