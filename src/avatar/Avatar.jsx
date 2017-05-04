import React, { Component, PropTypes } from 'react';
import Img from "react-image-fallback";
import cn from 'classnames';
import importcss from 'importcss';

import styles from './Avatar.css';

@importcss(styles)
class Avatar extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.number,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    shadow: React.PropTypes.bool,
    backgroundColor: PropTypes.string,
    borderWidth: PropTypes.number,
    border: PropTypes.string,
    grayscale: PropTypes.bool,
    blur: PropTypes.bool,
    invert: PropTypes.bool,
    placeholder: PropTypes.bool,
    color: PropTypes.string,
    children: PropTypes.any,
    badgePosition: PropTypes.object,
    badgeContent: PropTypes.any
  };
  static defaultProps = {
    placeholder: true,
    size: 50,
    shadowed : false,
    borderRadius : 50,
    badgePosition: {}
  };
  constructor(props) {
    super(props);
  }
  render() {
    const {
      src,
      alt,
      title,
      className,
      size,
      borderColor,
      borderRadius,
      shadow,
      backgroundColor,
      borderWidth,
      border,
      grayscale,
      blur,
      invert,
      placeholder,
      color,
      text,
      children,
      badgePosition,
      badge
    } = this.props;

    const classNames = cn({
      Avatar: true,
      placeholder : !src && placeholder,
      className,
      grayscale,
      blur,
      invert,
      shadow,
      text
    });

    const style = {
      avatar: {
        width: size,
        height: size,
        border,
        borderColor,
        borderRadius,
        borderWidth,
        backgroundColor,
        color
      },
      badge: {
        top: badgePosition.top,
        left: badgePosition.left,
        right: badgePosition.right,
        bottom: badgePosition.bottom
      }
    };

    const Badge = badge &&
      <div styleName="badge" style={style.badge}>
        {badge}
      </div>;

    const ImgLoader = src &&
      <div className={styles.loader}>
      </div>;

    return (
      <div styleName="AvatarContainer">
        <div styleName={classNames} style={style.avatar}>
          {src && <Img fallbackImage={ImgLoader} initialImage={ImgLoader} src={src} alt={alt} title={title} /> }
          {children}
        </div>
        {Badge}
      </div>
    );
  }
}

export default Avatar;
