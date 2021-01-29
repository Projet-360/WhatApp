import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import Left from './Left';
import Right from './Right';

import StylesdMain from '../elements/StyledMain';
import { ChatsCollection } from '../../api/chats';
import { findChats } from '../../api/helpers';

const Main = () => {
  Tracker.autorun(() =>{
    Meteor.subscribe('chats.mine');
  })
  return (
      <StylesdMain>
        <Left chats={findChats()}></Left>
        <Right right></Right>
      </StylesdMain>
  )
};

export default Main;
