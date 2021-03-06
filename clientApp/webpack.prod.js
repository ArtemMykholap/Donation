const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  watchOptions: {
    ignored: 'data/**',
  },
  plugins: [
    new webpack.DefinePlugin({
      SERVER_URL: JSON.stringify('/data'),
    })],
});
