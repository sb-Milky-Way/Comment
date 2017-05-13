import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import Comment from '../Comment';
import ReplyForm from '../ReplyForm';
import FavoriteIcon from 'react-icons/lib/md/favorite-outline';
import ClearIcon from 'react-icons/lib/md/clear';
import EditIcon from 'react-icons/lib/md/edit';
import petrovich from 'petrovich';
import importcss from 'importcss';
import styles from './CommentBox.css';

@importcss(styles)
export default class CommentBox extends Component {

  @autobind
  renderComment(comment, index, level = 0, parent) {
    const { user, nested } = this.props;
    const maxLevel = typeof nested == "number" ? +this.props.nested : (!nested ? 0 : Number.MAX_VALUE);
    // const maxNestingLevel = 4;
    const marginLeft = level > maxLevel ? 0 : 20 * Math.min(level, maxLevel);
    const htmlId = `comment_${comment._id}`;

    return (
      <div key={comment._id} style={{ marginLeft }} id={htmlId}>
        <Comment user={comment.user}>
          <Comment.Header userName={comment.user.name}>

              <If condition={comment.replyId}>
                <Comment.Actions leftAligned>
                  <a className="reply-to" href={`#comment_${comment.replyId}`}>
                    ответил {petrovich.male.first.dative(parent.user.name.split(" ")[0])}
                  </a>
                </Comment.Actions>
              </If>

            <If condition={user && comment.user && user._id === comment.user._id}>
              <Comment.Actions>
                <EditIcon/>
                <ClearIcon />
              </Comment.Actions>
            </If>
          </Comment.Header>
          <Comment.Content>{comment.content}</Comment.Content>
          <Comment.Footer date={comment.date} dateHref={`/comments/${comment._id}`}>
            <Comment.Actions leftAligned>
              <a href="#">
                Ответить
              </a>
            </Comment.Actions>
            <Comment.Actions>
              <FavoriteIcon />
            </Comment.Actions>
          </Comment.Footer>
        </Comment>
        {(comment.children || this.props.comments.filter( c => c.replyId && c.replyId == comment._id ) || []).map((cc, ii) => this.renderComment(cc, ii, level + 1, comment))}
      </div>
    );
  }

  render() {
    const { comments, user, canWrite } = this.props;
    const commentsTree = comments || [];
    // Сортируем
    return (
      <div style={{ background: '#fff', padding: '10 20' }}>
        {commentsTree.filter(c => !c.replyId).map((comment, index) => this.renderComment(comment, index, 0))}
        {canWrite && user && <ReplyForm user={user} /> }
      </div>
    );
  }
}
