import React from 'react'; //eslint-disable-line
import Comment from './Comment';

const requiredProps = {
  author : "Vasya Pupkin",
  text : "I am comment"
};

const customAvatar = <div style={{ width: 34, height: 34, lineHeight: "34px", textAlign:"center", color: "red", border:"2px solid green" }}>QQ</div>;

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Comment', module)
    .add('default', () => (
      <Comment {...requiredProps}/>
    ))
    .add('with custom avatar', () => (
      <Comment {...requiredProps} customAvatar={customAvatar} />
    ))
    .add('editable comment', () => (
      <Comment {...requiredProps} customAvatar={customAvatar} editable />
    ))
    .add('reply form', () => (
      <Comment
        author="Vasya Pupkin"
        text="Write something..."
        customAvatar={customAvatar}
        defaultEditMode={true}
        hideTime
        hideAuthor
        customCommentFooterActions={<span></span>}
        editableOnClick
      />
    ))

};
