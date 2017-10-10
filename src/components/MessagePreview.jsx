import React from 'react';
var createReactClass = require('create-react-class');
import classNames from 'classnames';

import './MessagePreview.less';

const MessagePreview = createReactClass({
  render() {
    const { title, sender, onClick, selected } = this.props;
    const classes = classNames("MessagePreview", {selected});

    return (
      <div className={classes} onClick={onClick}>
        <div className="title">
          {title}
        </div>

        <div className="from">
          {`from ${sender}`}
        </div>
      </div>
    );
  }
});

 export default MessagePreview;
