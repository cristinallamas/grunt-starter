'use strict';

module.exports = {

  port: 3000,
  site: 'localhost',
  devSite: 'http://<%=config.site %>:<%= config.port %>',

  dir: {
    src:   './src',
    tmp:   './.tmp',
    dist:  './dist',
    grunt: 'grunt',
    vendor: './node_modules'
  },

  css: {
    tmp: '<%= config.dir.tmp %>/css',
    src: '<%= config.dir.src %>/sass',
    dist: '<%= config.dir.dist %>/css',
    globCss:  '{,*/}*.css',
    globSass: '{,**/}*.{scss,sass}'
  },

  js: {
    src: '<%= config.dir.src %>/js',
    tmp:  '<%= config.dir.tmp %>/js',
    dist: '<%= config.dir.dist %>/js',
    glob: '{,*/}*.js'
  }

};
