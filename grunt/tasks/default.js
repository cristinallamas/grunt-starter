'use strict';

module.exports = function(grunt) {

  return grunt.registerTask('default', 'Default task', function() {
    grunt.task.run([
      'clean',
      'sasslint',
      'concurrent:build',
      'eslint'
    ]);
  });

};
