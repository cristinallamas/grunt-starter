'use strict';

module.exports = function(grunt) {

  // Time how long tasks take and display them in the console
  require('time-grunt')(grunt);

  // Load our tasks as and when needed
  require('jit-grunt')(grunt, {
    sasslint: 'grunt-sass-lint'
  });

  var configs = require('load-grunt-configs')(grunt, {
    config: {
      src: [
        'grunt/*.js',
        'grunt/options/*.js',
        'grunt/tasks/*.js'
      ]
    }
  });

  grunt.initConfig(configs);

};
