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
    console.log('chats', findChats());
  })
  return (
      <StylesdMain>
        <Left></Left>
        <Right right></Right>
      </StylesdMain>
  )
};

export default Main;
