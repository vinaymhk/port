const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.html'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}