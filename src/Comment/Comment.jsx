import React, {Component, PropTypes} from 'react';
import cn from 'classnames';
import importcss from 'importcss';
import styles from './Comment.css';
import ClearIcon from 'react-icons/lib/md/clear';
import FavoriteIcon from 'react-icons/lib/md/favorite-outline';

@importcss(styles)
class Comment extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date),
    customAvatar: PropTypes.node
  };

  static defaultProps = {
    time: new Date()
  };

  render() {
    const {author, text, time, customAvatar} = this.props;

    const avatar = customAvatar || <div styleName="comment__avatar">{author.split('').shift().toUpperCase()}</div>;

    return (
      <section styleName="comment">
        <div styleName="comment__avatar-container">
          {avatar}
        </div>
        <div styleName="comment__content">
          <div styleName="comment__actions"><ClearIcon /></div>
          <div styleName="comment__author">{author}</div>
          <div styleName="comment__text">{text}</div>
          <footer styleName="comment__footer">
            <div styleName="comment__footer-actions"><FavoriteIcon /></div>
            <div className="comment__meta">{time.toISOString().slice(0, 10)}</div>
          </footer>
        </div>
      </section>
    );
  }
}

export default Comment;
