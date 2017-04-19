import React, { Component, PropTypes as pt } from 'react';
import ReactImageFallback from 'react-image-fallback';
import cn from 'classnames';
import './Avatar.css';

class Avatar extends Component {
  static displayName = 'Avatar';
  static propTypes = {
    children: pt.string,
    src: pt.string.isRequired,
    fallback: pt.string.isRequired,
    initial: pt.string.isRequired,
    alt: pt.string,
    className: pt.string
  };
  static defaultProps = {
    className: 'avatar-image',
    children: '',
    alt: 'Same image should be here.'
  };

  render() {
    return (
      <div>
        {this.props.children}
        <ReactImageFallback
          src={this.props.src}
          fallbackImage={this.props.fallback}
          initialImage={this.props.initial}
          alt={this.props.alt}
          className={this.props.className}
        />
      </div>
    );
  }
}

export default Avatar;
