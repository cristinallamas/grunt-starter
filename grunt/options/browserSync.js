'use strict';

module.exports = {

  bsFiles: {
    src: [
      '<%= config.dir.dist %>',
      '<%= config.css.dist %>/<%= config.css.globCss %>',
      '<%= config.js.dist %>/<%= config.js.globJs %>'
    ]
  },
  options: {
    open: false,
    watchTask: true,
    injectChanges: false,
    proxy: {
      target: 'http://<%= config.site %>',
    }
  }

};
