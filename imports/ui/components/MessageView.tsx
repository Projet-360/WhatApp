import React from 'react';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import Avatar from './Avatar';

const icons:string[] = ["search", "paperclip", "ellispsi-v"]

const MessageView = (props:any):JSX.Element => {
    const selectedChat:Chat = props.selectedChat;
    return (        
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={icons}>
                <Avatar avatar_url={selectedChat.picture}></Avatar>
                <div className="headerMsg--container">
                    <span className="headerMsg--title">
                        {selectedChat.title}
                    </span>

                    <span className="headerMsg--sbTitle">
                        en ligne
                    </span>

                </div>
            </Header>
        </StyledMessageView>
    )
}

export default MessageView;