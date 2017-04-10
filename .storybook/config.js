import { config } from 'storybox';
config({
  options: {
    name: 'Components',
  },
  backgrounds: null,
  modules: require('glob!./glob.txt'),
});
