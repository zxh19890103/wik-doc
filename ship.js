const { join } = require('path');
const ghpages = require('gh-pages');

ghpages.publish(
  join(__dirname, '_site'),
  {
    branch: 'main',
    repo: 'https://github.com/zxh19890103/wik-doc.git',
  },
  (err) => {
    console.log('publish failed for: ', err);
  },
);
