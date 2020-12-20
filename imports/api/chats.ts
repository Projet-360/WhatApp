import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import moment from 'moment';

import { Chat } from './models';

export const ChatsCollection = new Mongo.Collection<Chat>('Chats')

export const dummyChats:Chat[] = [
    {
        title: "",
        picture: "",
        participants: ["kKbK7dA7ZiD2ZEB6W","5Qw9RGPGv2AoSzyri"],
        lastMessage: {
            content: "Salut, ca va ?",
            createdAt: moment()
                        .toDate()
        }
    },
    {
        title: "",
        picture: "",
        participants: ["NmCALfc3dZa42GrQD","kKbK7dA7ZiD2ZEB6W"],
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
        participants: ["5Qw9RGPGv2AoSzyri","NmCALfc3dZa42GrQD"],
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