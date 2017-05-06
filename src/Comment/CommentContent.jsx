import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';
import cn from 'classnames';
import importcss from 'importcss';
import styles from './Comment.css';

var markdown = new MarkdownIt({ html : true });

@importcss(styles)
class CommentContent extends React.Component {
  static propTypes = {
    md : PropTypes.bool,
    html : PropTypes.bool
  }

  static defaultProps = {
  }

  renderContent = () => {
    const { children, md, html } = this.props;
    if (md)
      return <div dangerouslySetInnerHTML={{__html: markdown.render(children)}} />
    if (html)
      return <div dangerouslySetInnerHTML={{ __html: children }} />
    return children;
  }

  render() {
    const { className } = this.props;
    return (
      <div
          styleName={cn(className, 'comment__content')}
        >
          {this.renderContent()}
      </div>
    );
  }
}

export default CommentContent;
