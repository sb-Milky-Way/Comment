import React from 'react'; //eslint-disable-line
import Comment from './Comment';

const requiredProps = {
  author: 'Vasya Pupkin',
  text: 'I am comment',
};


const user = {
  _id: '12345',
  href: '/user/12345',
  name: 'Александр Пушкин',
  avatar: 'http://um.mos.ru/upload/resize_cache/iblock/11f/300_300_2/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD_%D0%A2%D1%80%D0%BE%D0%BF%D0%B8%D0%BD%D0%B8%D0%BD.jpg',
};

const customAvatar = <div style={{ width: 34, height: 34, lineHeight: '34px', textAlign: 'center', color: 'red', border: '2px solid green' }}>QQ</div>;

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('Comment', module)
    .add('default', () => (
      <Comment {...requiredProps} />
    ))
    .add('with custom avatar', () => (
      <Comment {...requiredProps} customAvatar={customAvatar} />
    ))
    .add('time format', () => (
      <Comment {...requiredProps} timeFormat="DD.MM.YY HH:MM" />
    ))
    .add('editable comment', () => (
      <Comment {...requiredProps} editable />
    ))
    .add('editable and removable comment', () => (
      <Comment {...requiredProps} editable onDelete={() => { console.log('delete click'); }} />
    ))
    .add('reply form', 'test', () => (
      <Comment
        author="Вася Пупкин"
        text="Добавить запись..."
        placeholder="Добавить запись..."
        sendBtnText="Отправить"
        cancelBtnText="Отмена"
        hideTime
        hideAuthor
        customCommentFooterActions={<span />}
        editableOnClick

      />
    ))
    // by @isuvorov
    .add('sample', () => (
      <Comment
        user={user}
        href="/comment/12345" // Ссылка при клике на дату
        date={new Date('2017-02-14')}
        content="Буря мглою небо кроет, Вихри снежные крутя; То, как зверь, она завоет, То заплачет, как дитя."
      />
    ))
    .add('date=только что', () => (
      <Comment
        user={user}
        date={new Date()}
        content="Буря мглою небо кроет, Вихри снежные крутя; То, как зверь, она завоет, То заплачет, как дитя."
      />
    ))
    .add('date=10 минут назад', () => (
      <Comment
        user={user}
        date={new Date(Date.now() - 10 * 60 * 1000)}
        content="Буря мглою небо кроет, Вихри снежные крутя; То, как зверь, она завоет, То заплачет, как дитя."
      />
    ))
    .add('date=10 апр в 0:42', () => (
      <Comment
        user={user}
        date={new Date('2017-04-10 0:42:33')}
        content="Буря мглою небо кроет, Вихри снежные крутя; То, как зверь, она завоет, То заплачет, как дитя."

      />
    ))
    .add('date=10 апр 2016 в 0:42', () => (
      <Comment
        user={user}
        date={new Date('2016-04-10 0:42:33')}
        content="Буря мглою небо кроет, Вихри снежные крутя; То, как зверь, она завоет, То заплачет, как дитя."

      />
    ))
    .add('content as string', () => (
      <Comment
        user={user}
        content="Буря мглою небо кроет, Вихри снежные крутя; То, как зверь, она завоет, То заплачет, как дитя."
      />
    ))
    .add('content as string', () => (
      <Comment
        user={user}
        content="Будет ли у нас мультилайн? Нужно поразмышлять!

Буря мглою небо кроет,
Вихри снежные крутя;
То, как зверь, она завоет,
То заплачет, как дитя."
      />
    ))
    .add('content as jsx', () => (
      <Comment
        user={user}
        content={(
          <div>
            <h3>Стих 2</h3>
            <p>
              Наша ветхая лачужка
              И печальна и темна.
              Что же ты, моя старушка,
              Приумолкла у окна?
            </p>
          </div>
        )}
      />
    ))
    .add('content as html', () => (
      <Comment
        user={user}
        content={{
          html: ```
<h3>Стих 2</h3>
<p>
  Наша ветхая лачужка
  И печальна и темна.
  Что же ты, моя старушка,
  Приумолкла у окна?
</p>
```,
        }}
      />
    ))
    .add('content as markdown', () => (
      <Comment
        user={user}
        content={{
          md: ```
# Буря мглою небо кроет...

Буря мглою *небо* кроет,
Вихри снежные крутя...
```,
        }}
      />
    ))
    .add('empty', () => (
      <Comment />
    ))
    .add('content size=tiny', () => (
      <Comment
        content="Some word "
      />
    ))
    .add('content size=middile', () => (
      <Comment
        content="Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words"
      />
    ))
    .add('content size=large', () => (
      <Comment
        content="Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words"
      />
    ))
    .add('edit', () => (
      <Comment
        content="Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words Any words any words  any wor ds  any words  any words  any wor ds  any words  any words  any wor ds  any words  any w rds  any words"
      />
    ))
    .add('panels', () => (
      <Comment
        topPanel={(
          <span>
            x
          </span>
        )}
        bottomPanel={(
          <div>
            <span style={{ float: 'left' }}>
              Ответить
            </span>
            <span style={{ float: 'right' }}>
              like
            </span>
          </div>
        )}
      />
    ))
    .add('panels with children', () => (
      <Comment
        topPanel={(
          <div>
            <span style={{ float: 'left' }}>
               редактирование комментария
            </span>
            <span style={{ float: 'right' }}>
              x
            </span>
          </div>
        )}
      >
        <form>
          <textarea />
          (Отмена)
          <input type="submit" />
        </form>
      </Comment>
    ))
    .add('knob', () => (
      <Comment
        content={knob.text('content')}
      />
    ));
};
