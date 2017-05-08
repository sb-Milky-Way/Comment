import React from 'react';
import Comment from '../Comment';

export default class NestedComments extends React.Component {
  renderComment = (comment, index, nestingLevel) => {
    return (<div key={comment.id}>
      <Comment user={comment.user}>
        <Comment.Header userName={comment.user.name} />
        <Comment.Content>{comment.content}</Comment.Content>
        <Comment.Footer date={comment.date} />
      </Comment>
      {comment.children &&
        <div style={{marginLeft: 20*nestingLevel}}>
          {comment.children.map((cc, ii) => this.renderComment(cc, ii, nestingLevel + 1))}
        </div>
      }
    </div>)
  }

  render() {
      const { comments } = this.props;
      return (
        <div>
          {comments.map((c, i) => this.renderComment(c, i, 1))}
        </div>
      )

  }
}
