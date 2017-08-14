'use strict';

var ngrok = require('ngrok');

module.exports = function(grunt) {

  return grunt.registerTask('ngrok', 'Run ngrok', function() {

    var done = this.async();

    ngrok.connect({
      port: 80,
      host_header: grunt.config('config.site')
    }, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      if (grunt.option('pagespeed')) {
        grunt.config.set('pagespeed.options.url', url);
        grunt.task.run('pagespeed');
        done();
      }
      else {
        console.log('ngrok running - press Ctrl-Z to terminate');
        console.log(url);
      }

    });
  });

};
