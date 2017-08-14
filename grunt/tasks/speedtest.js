'use strict';

module.exports = function(grunt) {

  return grunt.registerTask('speedtest', 'Run site through google pagespeed', function() {
    grunt.option('pagespeed', true);
    grunt.task.run([
      'ngrok'
    ]);
  });

};
