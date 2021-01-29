import React from 'react';

import { Chat } from '../../api/models'
import StyledChatlist from '../elements/StyledChatlist';
import ChatItem from './ChatItem';

const Chatlist = (props:any):JSX.Element => {
    const { chats, onChatClick, selectedChat } = props;
    const renderChats = ():JSX.Element[] => {
        return chats.map((chat:Chat)=> {
            const active:boolean = selectedChat._id === chat._id;
            return (
                <ChatItem
                    key={chat._id}
                    {...chat}
                    onChatClick={onChatClick}
                    active={active}                  
                />            
            )
        })
    }
  return (
    <StyledChatlist>
        {renderChats()}
    </StyledChatlist>
  )
};
 
export default Chatlist;
