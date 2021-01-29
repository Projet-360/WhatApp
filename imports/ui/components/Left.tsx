import React from 'react';
import {Meteor} from 'meteor/meteor';

import StyledLeft from '../elements/StyledLeft';
import Header from './Header';
import Avatar from './Avatar';
import Status from './Status';
import Searchbar from './Searchbar';
import Chatlist from "./Chatlist"

const icons:string[] = ["circle-notch", "comment-alt", "ellipsis-v"];

const Left = (props:any):JSX.Element => {
  const { chats, onChatClick, selectedChat } = props;
  return (
    <StyledLeft>
        <Header icons={icons} iconClass="greyIcon">
          <Avatar avatar_url={Meteor.user().profile.picture}></Avatar> 
        </Header>
        <Status/>
        <Searchbar/>
        <Chatlist 
          chats={chats} 
          onChatClick={onChatClick} 
          selectedChat={selectedChat}
        />
    </StyledLeft>
  )
};
 
export default Left;
