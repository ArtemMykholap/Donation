const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: /data/,
  },
  plugins: [
    new webpack.DefinePlugin({
      SERVER_URL: JSON.stringify('http://localhost:3000'),
    }),
  ],
  devServer: {
    port: process.env.PORT || 8000,
    open: true,
    historyApiFallback: true,
  },
});
