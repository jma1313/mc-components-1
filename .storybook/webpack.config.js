const path = require("path");
const webpack = require('webpack');

const GLOBALS = {
  'process.env.BRIGHTCOVE_ACCOUNT_ID': JSON.stringify('5344802162001'),
  'process.env.BRIGHTCOVE_PLAYER_ID': JSON.stringify('rkcQq7gAe'),
};

module.exports = {
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
  ],
  module: {
    rules: [
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
