import React from 'react'; //eslint-disable-line
import ReplyForm from '../ReplyForm';
import CommentList from '../CommentList';
import NestedComments from './NestedComments';
const user1 = {
  _id: '12345',
  href: '/user/12345',
  name: 'Александр Пушкин',
  avatar: 'http://um.mos.ru/upload/resize_cache/iblock/11f/300_300_2/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD_%D0%A2%D1%80%D0%BE%D0%BF%D0%B8%D0%BD%D0%B8%D0%BD.jpg',
};

const user2 = {
  _id: '12346',
  href: '/user/12346',
  name: 'Никита Михалков',
  avatar: 'http://um.mos.ru/upload/resize_cache/iblock/11f/300_300_2/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD_%D0%A2%D1%80%D0%BE%D0%BF%D0%B8%D0%BD%D0%B8%D0%BD.jpg',
};

const user3 = {
  _id: '12347',
  href: '/user/12347',
  name: 'Ваня Иванов',
  avatar: 'http://um.mos.ru/upload/resize_cache/iblock/11f/300_300_2/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD_%D0%A2%D1%80%D0%BE%D0%BF%D0%B8%D0%BD%D0%B8%D0%BD.jpg',
};


const now = new Date();

const comments = [
  { id : 1, user : user1, content : "Привет, Никита!", date : new Date(now.setSeconds(now.getSeconds() + 0))},
  { id : 2, user : user2, content : "Привет, Санек!", date : new Date(now.setSeconds(now.getSeconds() + 10)) },
  { id : 3, user : user1, content : "Как дела?", date : new Date(now.setSeconds(now.getSeconds() + 20)) },
  { id : 4, user : user2, content : "Ничего, книги пишу", date : new Date(now.setSeconds(now.getSeconds() + 30)) },
  { id : 5, user : user1, content : "Скучный ты", date : new Date(now.setSeconds(now.getSeconds() + 40)) },
];

const nestedComments = [
  { id : 1, user : user1, content : "Привет, Никита!", date : new Date(now.setSeconds(now.getSeconds() + 0))},
  { id : 2, user : user2, content : "Привет, Санек!", date : new Date(now.setSeconds(now.getSeconds() + 10)) },
  { id : 3, user : user1, content : "Как дела?", date : new Date(now.setSeconds(now.getSeconds() + 20)),
    children : [
      { id : 7, user : user3, content : "Я тут дочерний коммент написал", date : new Date(now.setSeconds(now.getSeconds() + 55))},
      { id : 8, user : user3, content : "Я молодец", date : new Date(now.setSeconds(now.getSeconds() + 56))},
      { id : 9, user : user3, content : "!!!", date : new Date(now.setSeconds(now.getSeconds() + 57))},
    ]
  },
  { id : 4, user : user2, content : "Ничего, книги пишу", date : new Date(now.setSeconds(now.getSeconds() + 30)) },
  { id : 5, user : user1, content : "Скучный ты", date : new Date(now.setSeconds(now.getSeconds() + 40)) },
];


module.exports = function ({ storiesOf, action }) {
  return storiesOf('Comment box', module)
    .add('default', () => (
      <div>
        <CommentList comments={comments}/>
        <ReplyForm user={user1} />
      </div>
    ))
    .add('nested comments', () => (
      <div>
        <ReplyForm user={user3} />
        <NestedComments comments={nestedComments} />
      </div>
    ))

};
