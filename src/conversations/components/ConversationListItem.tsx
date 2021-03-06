import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React, { Fragment } from 'react';
import history from '../../history';
import { User } from '../../users/types';
import { IConversation } from '../types';

interface ConversationListItemProps {
  conversation: IConversation;
  users: User[];
}

class ConversationListItem extends React.Component<ConversationListItemProps>{
  render(){
    const { conversation } = this.props;
    return <Fragment>
        <ListItem button onClick={() => history.push(`/conversation/${conversation._id}`)}>
          <ListItemAvatar>
            <AvatarGroup max={3}>
              {conversation.targets.map((target, index) => <Avatar key={index}>{this.getUserFormList(target)?.firstname[0] || 'Unknown User'[0] }</Avatar>)}
            </AvatarGroup>
          </ListItemAvatar>
          <ListItemText
            primary={conversation.messages[conversation.messages.length-1].content}
            secondary={conversation.updatedAt.toLocaleString()}>
          </ListItemText>
        </ListItem>
      <Divider />
    </Fragment>
  }

  getUserFormList = (id: string) => this.props.users.find(user => user._id === id)
}

export default ConversationListItem;