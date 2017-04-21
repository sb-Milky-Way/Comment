import React, { Component, PropTypes } from 'react';
import Textarea from 'react-textarea-autosize';
import AddIcon from 'react-icons/lib/md/add-circle-outline';
import cn from 'classnames';
import importcss from 'importcss';
import styles from './ReplyForm.css';

@importcss(styles)
class ReplyForm extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    sendBtnText: PropTypes.string,
    customAvatar: PropTypes.node,
    onSend: PropTypes.func
  };
  static defaultProps = {
    placeholder: "Write here...",
    sendBtnText: "Send",
    onSend : () => {}
  };

  render() {
    const {
      author,
      placeholder,
      sendBtnText,
      customAvatar,
      onSend
    } = this.props;

    const avatar = customAvatar || <div styleName="reply-form__avatar">{author.split('').shift().toUpperCase()}</div>;

    return (
      <section styleName="reply-form">
        <div styleName="reply-form__avatar-container">
          {avatar}
        </div>
        <div styleName="reply-form__content">
          <Textarea rows={3} placeholder={placeholder}></Textarea>
          <div styleName="reply-form__footer">
            <div styleName="reply-form__footer-send">
              <button styleName="reply-form__footer-send-btn" onClick={onSend}>{sendBtnText}</button>
            </div>
            <div styleName="reply-form__footer-actions">
              <AddIcon size="20px" color="#828282"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ReplyForm;
