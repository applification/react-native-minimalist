const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader',
        ],
      },
    ],
  },
  externals: {
    react: 'react',
    'react-native': 'react-native',
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
};
