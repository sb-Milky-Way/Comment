import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import Avatar from './Avatar';

const initialImage = 'https://commons.wikimedia.org/wiki/File:Loading_icon.gif';
const srcImage = 'http://www.artfulstudio.ru/images/af_avatargallery/a-1297877929.gif';
const fallbackImage = 'http://i.imgur.com/gh4u70G.png';
const alt = 'Same image should be here.';
const smallSize = 'small';
const largeSize = 'large';

const stories = storiesOf('Avatar', module);

stories.addDecorator(withKnobs);

stories.add('large with source image', () => (
  <Avatar
    src={text('srcImage', srcImage)}
    fallback={text('fallbackImage', fallbackImage)}
    initial={text('initialImage', initialImage)}
    alt={text('alt', alt)}
    size={text('size', largeSize)}
  />
)).add('large with fallback image', () => (
  <Avatar
    src={text('srcImage', 'No image.')}
    fallback={text('fallbackImage', fallbackImage)}
    initial={text('initialImage', initialImage)}
    alt={text('alt', alt)}
    size={text('size', largeSize)}
  />
)).add('large without image', () => (
  <Avatar
    src={text('srcImage', 'No image.')}
    fallback={text('fallbackImage', 'No image.')}
    initial={text('initialImage', initialImage)}
    alt={text('alt', alt)}
    size={text('size', largeSize)}
  />
)).add('small', () => (
  <Avatar
    src={text('srcImage', srcImage)}
    fallback={text('fallbackImage', fallbackImage)}
    initial={text('initialImage', initialImage)}
    alt={text('alt', alt)}
    size={text('size', smallSize)}
  />
));
