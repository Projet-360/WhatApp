import React from 'react';

import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';

const messageText:string = "WhatApp se connecte à vôtre téléphone pour synchroniser le message. Pour réduire des données, connectez vôtre téléphone à un nouveau WIFI"

const Right = (props:any):JSX.Element => {
  const { right, messageVisible, selectedChat} = props
  return (
      <StyledRight>
        {messageVisible ? (
          <MessageView selectedChat={selectedChat}/>
        ) : (
          <RightImg right={right} messageText={messageText}/>
        )}
        

      </StyledRight>
  )
};

export default Right;
