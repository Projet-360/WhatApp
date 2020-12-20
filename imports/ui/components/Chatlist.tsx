import React from 'react';

import { Chat } from '../../api/models'
import StyledChatlist from '../elements/StyledChatlist';
import ChatItem from './ChatItem';

const Chatlist = (props:any):JSX.Element => {
    const { chats } = props;
    const renderChats = ():JSX.Element[] => {
        return chats.map((chat:Chat)=> {
            return (
                <ChatItem
                    key={chat._id}
                    {...chat}
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
