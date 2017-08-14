'use strict';

module.exports = function(grunt) {

  return grunt.task.registerTask('serve', 'Create a local server and watch the SASS and JS folders for changes.', function() {
    grunt.task.run([
      'clean',
      'sasslint',
      'concurrent:build',
      'eslint',
      'browserSync',
      'serve-ready',
      'watch',
    ]);

    grunt.registerTask('serve-ready', function() {
      var site = grunt.config('config.devSite');
      var template = '[{blue:%s}] ';
      var logger  = require('eazy-logger').Logger({
        prefix: template.replace('%s', 'DD'),
        useLevelPrefixes: false
      });

      logger.info('{bold:%s', 'You are now ready!');
      logger.unprefixed('info', '{grey:-------------------------------------------------------}');
      logger.unprefixed('info', 'Please visit: {magenta:%s}', site);
      logger.unprefixed('info', '{cyan:%s}', '(Hold down cmd and click URL above)');
    });
  });

};
