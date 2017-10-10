import React from 'react';
var createReactClass = require('create-react-class');

import messages from '../messages.json';

import './Message.less';

const Message = createReactClass({
  getInitialState() {
    const { messageId } = this.props.params;

    return {
      message: messages.find(message => message.id === messageId)
    }
  },

  componentWillReceiveProps(nextProps){
    const { messageId: prevId } = this.props.params;
    const { messageId: nextId } = nextProps.params;

    if (prevId != nextId ){
      this.setState({
        message: messages.find(message => message.id === nextId)
      });
    }
  },

  render(){
        const { message } = this.state;
        return (
          <div className="Message">
            <p>From: {message.senderName} ({message.senderEmail})</p>
            <p>To: you</p>
            <p>Subject: {message.subject}</p>
            <hr/>
            <p>{message.body}</p>
          </div>
        );
  }
});

export default Message;
