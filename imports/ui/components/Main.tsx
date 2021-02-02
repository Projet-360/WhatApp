import React from 'react';
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import _ from 'lodash'


import Left from './Left';
import Right from './Right';

import StylesdMain from '../elements/StyledMain';
import { Chat } from '../../api/models';
import { findChats } from '../../api/helpers';

const Main = (props:any):JSX.Element => {
  const [messageVisible, setMessageVisible] = React.useState<boolean>(false);
  const [selectedChat, setSelectedChat ] = React.useState<Chat>({});

  const handleChatClick = (_id:string):void => {
    //console.log('selected chat before', selectedChat);
    if(!messageVisible) {
      setMessageVisible(true)
    }
    const newChat:Chat = _.find(props.chats, {_id})
    //console.log('selected chat after', newChat);
    setSelectedChat(newChat);
  }

  return (
      <StylesdMain>
        {!props.loading ? (
          <React.Fragment>
            <Left 
            chats={props.chats} 
            onChatClick={handleChatClick}
            selectedChat={selectedChat}
            />
            <Right 
            right 
            messageVisible={messageVisible}
            selectedChat={selectedChat}
            />
          </React.Fragment>

        ) : null
      }
       
      </StylesdMain>
  )
};

export default withTracker(() => {
  const chatReady:boolean = Meteor.subscribe('chats.mine').ready();
  const messageReady:boolean = Meteor.subscribe('messages.all').ready();
  return {
    loading: chatReady && messageReady ? false : true,
    chats: findChats()
  }
})(Main);
