'use strict';

module.exports = {

  options: {
    format: require('eslint-stylish-config')
  },
  target: [
    '<%= config.js.src %>/<%= config.js.glob %>'
  ]

};
