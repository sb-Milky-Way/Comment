import React from 'react'; //eslint-disable-line
import ReplyForm from './ReplyForm';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('ReplyForm', module)
    .add('default', () => (
      <ReplyForm />
    ))
};
