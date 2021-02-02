import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import moment from 'moment';
import FlipMove from 'react-flip-move';

import StyledMessageBox from '../elements/StyledMessageBox';
import Day from './Day';
import MessageText from './MessageText';

let isEven:boolean = false;
let messagesEnd:HTMLDivElement;
const format:string ="D MMMM Y";

const MessageBox = (props:any):JSX.Element => {
  const {selectedChat, messages} = props;
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
  //console.log('message avec ownership', messages)
  const groupedMessages:any = _.groupBy(messages, message => {
    return moment(message.createdAt).format(format);    
  })
 // console.log('groupedMessages', groupedMessages )
  const newMessages:any[] = Object.keys(groupedMessages)
  .map(key => {
    return {
      date: key,
      groupedMessages: groupedMessages[key],
      today: moment().format(format) === key
    }
  })
  const renderMessages = (newMessage:any):JSX.Element[] => {
    return newMessage.groupedMessages.map(message => {
      const msgClass:string = `message message--${message.ownership}`
      return ( 
        <MessageText
        key={message._id}
        msgClass={msgClass}
        content={message.content}
        ownership={message.ownership}
        createdAt={message.createdAt} 
        />
      )
    })
  }

  const scrollToBottom = ():void => {
    messagesEnd.scrollIntoView({behavior: "smooth"})
  }
  React.useEffect(()=> {
    scrollToBottom()
  }, [selectedChat, messages])
   
  const renderDays = ():JSX.Element[] => {
    return newMessages.map((newMessage, index:number) => {
      const dateText:string = newMessage.today ? "aujourd'hui" : newMessage.date ;
      return (
        <div key={index}>
          <Day date={dateText}/>
          {renderMessages(newMessage)}
        </div>
      )
    })
  }
//console.log('newMessages', newMessages )
  return (
    <StyledMessageBox>
      <FlipMove>
        {renderDays()}
      </FlipMove>      
      <div ref={(el:HTMLDivElement)=> messagesEnd = el}></div>
    </StyledMessageBox>
  )
};

export default MessageBox;