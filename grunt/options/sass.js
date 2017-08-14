'use strict';

var compass = require('compass-importer'),
    assetFunctions = require('node-sass-asset-functions'); //https://www.npmjs.com/package/node-sass-asset-functions

module.exports = {

  options: {
    sourceMap: true,
    importer: compass,
    functions: assetFunctions({
      http_images_path: '/themes/custom/subscriptions_master/src/images',
      http_fonts_path: '/themes/custom/subscriptions_master/src/fonts'
    }),
    includePaths: [
      // dipping in and out of ../subscriptions_master in order to allow child themes to share include paths
      '../../../subscriptions_master/<%= config.css.src %>',
      '../../../subscriptions_master/<%= config.dir.vendor %>/jacket/stylesheets',
      '../../../subscriptions_master/<%= config.dir.vendor %>/sass-mq',
      '<%= config.css.src %>',
      '<%= config.dir.vendor %>/jacket/stylesheets',
      '<%= config.dir.vendor %>/sass-mq'
    ]
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.css.src %>',
      src: '<%= config.css.globSass %>',
      dest: '<%= config.css.dist %>',
      ext: '.css'
    }]
  }

};
