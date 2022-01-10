const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WatchIgnorePlugin = require('webpack').WatchIgnorePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.jsx'),
  },
  plugins: [
    new WatchIgnorePlugin([
      path.resolve(__dirname, './data/')
    ]),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'assets/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          // "sass-loader"
        ]
      },
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};