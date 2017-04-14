import { config } from 'storybox';
config({
  options: {
    name: 'Comment',
  },
  backgrounds: null,
  modules: require('glob!./glob.txt'),
});
