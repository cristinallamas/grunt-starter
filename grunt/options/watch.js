'use strict';

module.exports = {

  sass: {
    files: [
      '<%= config.css.src %>/<%= config.css.globSass %>'
    ],
    tasks: [
      'sasslint',
      'sass'
    ],
    options: {
      debounceDelay: 250,
      spawn: false
    }
  },

  js: {
    files: ['<%= config.js.src %>/<%= config.js.glob %>'],
    tasks: ['eslint', 'webpack']
  }

};
