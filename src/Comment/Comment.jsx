import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import importcss from 'importcss';
import styles from './Comment.css';
import ClearIcon from 'react-icons/lib/md/clear';
import FavoriteIcon from 'react-icons/lib/md/favorite-outline';

@importcss(styles)
class Comment extends Component {
  static propTypes = {
    text : PropTypes.string.isRequired,
    author : PropTypes.string.isRequired,
    time : PropTypes.instanceOf(Date)
  };
  static defaultProps = {
    time : new Date()
  };

  avatarRenderer = () => {
    return <div>UU</div>;
  }

  render() {
    const { author, text, time } = this.props;

    return (
      <div styleName="commentContainer">
        <div styleName="userAvatarContainer">
            {this.avatarRenderer()}
        </div>
        <div styleName="commentContent">
            <div styleName="commentActions"><ClearIcon /></div>
            <div styleName="commentAuthor">{author}</div>
            <div styleName="commentText">{text}</div>
            <div styleName="commentFooter">
              {time.toISOString().slice(0, 10)}
              <div styleName="commentFooterActions"><FavoriteIcon /></div>
            </div>
        </div>
      </div>
    );
  }
}

export default Comment;
