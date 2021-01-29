import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import moment from 'moment';

import { Chat } from './models';

export const ChatsCollection = new Mongo.Collection<Chat>('Chats')

export const dummyChats:Chat[] = [    
    {
        title: "",
        picture: "",        
        participants: ["PwZuL9chJxjc6vPxF","ke2tgSuY4TyQ7pCXa"],
        lastMessage: {
            content: "Salut, ca va ?",
            createdAt: moment()
                        .toDate()
        }
    },
    {
        title: "",
        picture: "",
        participants: ["8kMuE27zvpHGqhJXu","PwZuL9chJxjc6vPxF"],
        lastMessage: {
            content: "Salut, bien ou bien ?",
            createdAt: moment()
                        .subtract(1, 'days')
                        .toDate()
        }
    },
    {
        title: "",
        picture: "",
        participants: ["yAKWfnmkYX8B4CXwd","8kMuE27zvpHGqhJXu"],
        lastMessage: {
            content: "Salut, ma couille ?",
            createdAt: moment()
                        .subtract(2, 'days')
                        .toDate()
        }
    }
]

if(Meteor.isServer) {    
    Meteor.publish('chats.all', function(){
        return ChatsCollection.find();
    });
    Meteor.publish('chats.mine', function(){
        return ChatsCollection.find({
            participants: {
                $in: [this.userId]
            }
        })
    })
}
