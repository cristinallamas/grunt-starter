'use strict';

module.exports = {

  options: {
    configFile: '<%= config.css.src %>/sass-lint.yml',
  },
  target: ['<%= config.css.src %>/<%= config.css.globSass %>']

};
