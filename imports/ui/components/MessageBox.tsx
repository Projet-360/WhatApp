import React from 'react';
import { Meteor } from 'meteor/meteor';
import FontAwesome from 'react-fontawesome';

import StyledMessageBox from '../elements/StyledMessageBox';

let isEven:boolean = false;

const MessageBox = (props:any):JSX.Element => {
  const {messages} = props;
  console.log('messages', messages);
  messages.forEach(message =>{
    if(!message.senderId) {
      message.ownership = !!message.ownership === isEven ? 'mine' : 'other';
      isEven= !isEven;
      return message;
    }else{
      message.ownership = message.senderId === Meteor.userId() ? 'mine' : 'other';
      return message;
    }
  })
  console.log('message avec ownership', messages)
  return (
    <StyledMessageBox>
kjbgkjgk
    </StyledMessageBox>
  )
};

export default MessageBox;