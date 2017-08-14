'use strict';

module.exports = {

  babel: {
   entry: '<%= config.js.src %>/theme.js',
    output: {
      path: '<%= config.js.dist %>',
      filename: 'theme.js'
    },
    devtool: 'eval-source-map',
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }]
    }
  }

};
