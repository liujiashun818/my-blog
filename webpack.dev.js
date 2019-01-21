const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    'app.bundle': './view/entry/home.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: './dist',
    contentBase: './',
    inline: true,
    port: 3000,
    open: true,
    historyApiFallback: true  
  },
});
