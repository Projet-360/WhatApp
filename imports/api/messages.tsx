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
    Meteor.methods({
      'message.insert': function(message) {
        return MessagesCollection.insert(message);
      }
    });
}

export const DummyMessages:Message[] = [
        {
          chatId: "4sNDtFFSMvZzACANi",
          content: "Salut a va ?",
          createdAt: moment().subtract(2, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "3ZsaFfmDTC2oe4Y9M",
          content: "Salut a va ?",
          createdAt: moment().subtract(2, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "4sNDtFFSMvZzACANi",
          content: "Salut a va ?",
          createdAt: moment().subtract(2, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "3ZsaFfmDTC2oe4Y9M",
          content: "Salut a va ?",
          createdAt: moment().subtract(2, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "4sNDtFFSMvZzACANi",
          content: "Salut a va ?",
          createdAt: moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "3ZsaFfmDTC2oe4Y9M",
          content: "Salut a va ?",
          createdAt: moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "4sNDtFFSMvZzACANi",
          content: "Salut a va ?",
          createdAt: moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "3ZsaFfmDTC2oe4Y9M",
          content: "Salut a va ?",
          createdAt: moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "4sNDtFFSMvZzACANi",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "3ZsaFfmDTC2oe4Y9M",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "4sNDtFFSMvZzACANi",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "3ZsaFfmDTC2oe4Y9M",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "4sNDtFFSMvZzACANi",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "3ZsaFfmDTC2oe4Y9M",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "4sNDtFFSMvZzACANi",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "3ZsaFfmDTC2oe4Y9M",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "4sNDtFFSMvZzACANi",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        },
        {
          chatId: "3ZsaFfmDTC2oe4Y9M",
          content: "Salut a va ?",
          createdAt: moment().toDate(),
          type: MessageType.TEXT,
        }
      ]