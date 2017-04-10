import React from 'react'; //eslint-disable-line
import Comment from './Comment';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Comment', module)
    .add('default', () => (
      <Comment />
    ))
};
