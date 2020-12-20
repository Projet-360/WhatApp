import React from 'react';

import Left from './Left';
import Right from './Right';

import StylesdMain from '../elements/StyledMain';

const Main = () => {
  return (
      <StylesdMain>
        <Left></Left>
        <Right right></Right>
      </StylesdMain>
  )
};

export default Main;
