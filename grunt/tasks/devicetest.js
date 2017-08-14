'use strict';

module.exports = function(grunt) {

  return grunt.registerTask('devicetest', 'Create an ngrok instance to use for device testing', function() {
    grunt.task.run([
      'ngrok'
    ]);
  });

};
