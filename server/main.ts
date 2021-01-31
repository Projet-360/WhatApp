import { Meteor } from 'meteor/meteor';

import { createDummyUsers, createDummyChats, createDummyMessages } from '../imports/api/helpers';
import { dummyUsers } from '../imports/api/users';
import { ChatsCollection, dummyChats } from '../imports/api/chats';
import { MessagesCollection, DummyMessages } from '../imports/api/messages';

Meteor.startup(()=> {
    const numberOfUsers:number = Meteor.users.find().count();
    const numberOfChats:number = ChatsCollection.find().count();
    const numberOfMessages:number = MessagesCollection.find().count();

    if(numberOfUsers === 0) {
        console.log("Il n'y a pas d'utilisateurs")
        createDummyUsers(dummyUsers);
    } else {
        console.log("Il y a des d'utilisateurs")
    }

    if(numberOfChats === 0) {
        console.log("Il n'y a pas de chats")
        createDummyChats(dummyChats);
    } else {
        console.log("Il y a pas de chats")
    }  
    
    if(numberOfMessages === 0) {
        console.log("Il n'y a pas de Messages")
        createDummyMessages(DummyMessages);
    } else {
        console.log("Il y a pas de Messages")
    }  
});