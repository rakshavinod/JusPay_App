const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'public'), // Ensure this matches or is correctly configured for development
  },
});
