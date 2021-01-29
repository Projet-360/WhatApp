import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import _ from 'lodash'


import Left from './Left';
import Right from './Right';

import StylesdMain from '../elements/StyledMain';
import { Chat } from '../../api/models';
import { findChats } from '../../api/helpers';

const Main = () => {
  Tracker.autorun(() =>{
    Meteor.subscribe('chats.mine');
  });

  const [messageVisible, setMessageVisible] = React.useState<boolean>(false);
  const [selectedChat, setSelectedChat ] = React.useState<Chat>({});

  const handleChatClick = (_id:string):void => {
    console.log('selected chat before', selectedChat);
    if(!messageVisible) {
      setMessageVisible(true)
    }
    const newChat:Chat = _.find(findChats(), {_id})
    console.log('selected chat after', newChat);
    setSelectedChat(newChat);
  }

  return (
      <StylesdMain>
        <Left 
        chats={findChats()} 
        onChatClick={handleChatClick}
        selectedChat={selectedChat}
        />
        <Right 
        right 
        messageVisible={messageVisible}
        selectedChat={selectedChat}
        />
      </StylesdMain>
  )
};

export default Main;
