import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import importcss from 'importcss';
import styles from './Comment.css';

@importcss(styles)
class Comment extends Component {
  static propTypes = {

  };
  static defaultProps = {

  };

  render() {

    return (
      <div styleName="CommentContainer">
        <div>
          Comment here
        </div>

      </div>
    );
  }
}

export default Comment;
