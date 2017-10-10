import React from 'react';
var createReactClass = require('create-react-class');
import PropTypes from 'prop-types';

import MessagePreview from './MessagePreview.jsx';
import './InboxPage.less';

import messages from '../messages.json';

const InboxPage = createReactClass({
  getInitialState: function(){
    return { messages };
  },

  handlePreviewClick: function(messageId){
    this.context.router.push(`/inbox/messages/${messageId}`);
  },
  render: function(){
    const {messageId: selectedMessageId } = this.props.params;
    return (
      <div className="InboxPage">
        <div className = "messages">
          {
            this.state.messages.map(message =>
              <MessagePreview key = {message.id}
                              title = {message.subject}
                              sender = {message.senderName}
                              onClick = {this.handlePreviewClick.bind(null, message.id)}
                              selected = {message.id === selectedMessageId}
              />
            )
          }
        </div>

        <div className="message-container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

InboxPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default InboxPage;
