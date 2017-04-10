import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import importcss from 'importcss';
import styles from './ReplyForm.css';

@importcss(styles)
class Comment extends Component {
  static propTypes = {

  };
  static defaultProps = {

  };

  render() {

    return (
      <div styleName="ReplyFormContainer">
        <div>
          Reply form here
        </div>

      </div>
    );
  }
}

export default Comment;
