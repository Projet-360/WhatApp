import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import moment from 'moment';

import { Message, MessageType } from './models';

export const MessagesCollection = new Mongo.Collection<Message>('Messages')

export const message:Message[] = [
]

if(Meteor.isServer) {    
    Meteor.publish('messages.all', function(){
        return MessagesCollection.find();
    });
}

export const DummyMessages:Message[] = [
        {
          chatId: "WJrQ4oQQqaaQuksTZ",
          content: "Salut a va ?",
          createdAt: moment().subtract(2, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "LnpQMJnoiis5snAsm",
          content: "Salut a va ?",
          createdAt: moment().subtract(2, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "WJrQ4oQQqaaQuksTZ",
          content: "Salut a va ?",
          createdAt: moment().subtract(2, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "LnpQMJnoiis5snAsm",
          content: "Salut a va ?",
          createdAt: moment().subtract(2, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "WJrQ4oQQqaaQuksTZ",
          content: "Salut a va ?",
          createdAt: moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "LnpQMJnoiis5snAsm",
          content: "Salut a va ?",
          createdAt: moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "WJrQ4oQQqaaQuksTZ",
          content: "Salut a va ?",
          createdAt: moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "LnpQMJnoiis5snAsm",
          content: "Salut a va ?",
          createdAt: moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "WJrQ4oQQqaaQuksTZ",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "LnpQMJnoiis5snAsm",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "WJrQ4oQQqaaQuksTZ",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "LnpQMJnoiis5snAsm",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "WJrQ4oQQqaaQuksTZ",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "LnpQMJnoiis5snAsm",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "WJrQ4oQQqaaQuksTZ",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "LnpQMJnoiis5snAsm",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "WJrQ4oQQqaaQuksTZ",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "LnpQMJnoiis5snAsm",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        }
      ]