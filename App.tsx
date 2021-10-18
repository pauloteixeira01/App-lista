import React from 'react';
import Home from './src/pages/home';
import {StyledStatusBar} from './src/pages/home/styles';

const App = () => {
  return (
    <>
      <StyledStatusBar />
      <Home />
    </>
  );
};

export default App;
