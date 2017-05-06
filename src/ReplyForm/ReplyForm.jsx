import React, { Component, PropTypes } from 'react';
import Textarea from 'react-textarea-autosize';
import AddIcon from 'react-icons/lib/md/add-circle-outline';
//import Avatar from 'lsk-general/src/General/Avatar';
import Avatar from '../Avatar';
import cn from 'classnames';
import importcss from 'importcss';
import styles from './ReplyForm.css';

@importcss(styles)
class ReplyForm extends Component {
  static propTypes = {
    //author: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    sendBtnText: PropTypes.string,
    cancelBtnText: PropTypes.string,
    customAvatar: PropTypes.node,
    onSend: PropTypes.func
  };
  static defaultProps = {
    placeholder: "Write here...",
    sendBtnText: "Send",
    cancelBtnText : "Cancel",
    onSend : () => {}
  };

  render() {
    const {
      author,
      placeholder,
      sendBtnText,
      cancelBtnText,
      customAvatar,
      onSend
    } = this.props;

    const avatar = this.props.customAvatar || <div  styleName="reply-form__avatar"><Avatar /></div>;

    return (
      <section styleName="reply-form">
        <Textarea rows={3} placeholder={placeholder}></Textarea>
        <footer styleName="reply-form__footer">
          <div styleName="reply-form__actions">
            <button styleName="comment__icon-btn"><AddIcon size="20px" color="#828282"/></button>
          </div>
          <div styleName="reply-form__actions">
            <button styleName="reply-form__btn" onClick={this.onCancel}>{cancelBtnText}</button>
            <button styleName="reply-form__btn" onClick={this.onSend}>{sendBtnText}</button>
          </div>

        </footer>
      </section>
    );
  }
}

export default ReplyForm;
