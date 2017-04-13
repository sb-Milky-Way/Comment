import React from 'react'; //eslint-disable-line
import Comment from './Comment';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Comment', module)
    .add('default', () => (
      <Comment text="I am comment"/>
    ))
    .add('with time', () => (
      <Comment text="Comment with time" time={new Date()}/>
    ))
};
