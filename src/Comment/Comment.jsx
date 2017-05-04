import React, {Component, PropTypes} from 'react';
import cn from 'classnames';
import importcss from 'importcss';
import styles from './Comment.css';
import ClearIcon from 'react-icons/lib/md/clear';
import FavoriteIcon from 'react-icons/lib/md/favorite-outline';
import EditIcon from 'react-icons/lib/md/edit';
import AddIcon from 'react-icons/lib/md/add-circle-outline';
import DefaultAvatar from '../Avatar';
import ReplyForm from '../ReplyForm';
import Textarea from 'react-textarea-autosize';
import Time from 'react-time-format';

@importcss(styles)
class Comment extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date),
    timeFormat : PropTypes.string,
    customAvatar: PropTypes.node,
    editable : PropTypes.bool,
    onSend : PropTypes.func,
    onCancel : PropTypes.func,
    onDelete : PropTypes.func,
    defaultEditMode : PropTypes.bool,
    hideAuthor : PropTypes.bool,
    hideTime : PropTypes.bool,
    customCommentFooterActions : PropTypes.any,
    editableOnClick : PropTypes.bool,
    className : PropTypes.string,
    placeholder : PropTypes.string,
    sendBtnText : PropTypes.string,
    cancelBtnText : PropTypes.string,
  };

  static defaultProps = {
    time: new Date(),
    timeFormat: "MM-DD-YYYY",
    placeholder: "Write here...",
    sendBtnText: "Send",
    cancelBtnText: "Cancel"
  };

  constructor(props) {
    super(props);
    this.state = {
      editMode : props.defaultEditMode
    }
  }

  toggleEditMode = (e) => {
    e.preventDefault();
    this.setState({ editMode : !this.state.editMode });
  }

  onSend = (e) => {
    if (this.props.onSend) {
      this.props.onSend();
    }
  }

  onCancel = (e) => {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
    this.toggleEditMode(e);
  }

  onCommentTextClick = (e) => {
    if (this.props.editableOnClick)
      this.toggleEditMode(e);
  }

  renderComment = () => {
    const {
      author,
      text,
      time,
      timeFormat,
      editable,
      onDelete,
      hideAuthor,
      hideTime,
      customCommentFooterActions
    } = this.props;
    return (
      <div styleName="comment__content">
        {!hideAuthor &&
          <div styleName="comment__author">{author}</div>
        }
        <div styleName="comment__actions">

          {editable &&
            <button styleName="comment__icon-btn" onClick={this.toggleEditMode}><EditIcon /></button>
          }
          {onDelete &&
            <button styleName="comment__icon-btn" onClick={onDelete}><ClearIcon /></button>
          }
        </div>

        <div styleName="comment__text" onClick={this.onCommentTextClick}>{text}</div>
        <footer styleName="comment__footer">
          {!hideTime &&
            <div styleName="comment__meta">
              <Time value={time} format={timeFormat} />
            </div>
          }
          <div styleName="comment__footer-actions">
            {!customCommentFooterActions &&
              <button styleName="comment__icon-btn"><FavoriteIcon /></button>
            }
            {customCommentFooterActions}
          </div>
        </footer>
      </div>
    )
  }

  renderReplyForm = () => {
    const { placeholder, sendBtnText, cancelBtnText } = this.props;
    return <ReplyForm placeholder={placeholder} autor="#" />
  }

  render() {

    const avatar = this.props.customAvatar || <div  styleName="comment__avatar"><DefaultAvatar /></div>;

    const commentContent = this.state.editMode ? this.renderReplyForm() : this.renderComment();

    return (
      <section styleName="comment" className={this.props.className}>
        <div styleName="comment__avatar-container">
          {avatar}
        </div>
        {commentContent}
      </section>
    );
  }
}

export default Comment;
