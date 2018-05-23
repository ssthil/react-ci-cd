const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './public/index.html'),
  filename: './index.html'
})

const CleanWebpackPlugin = require('clean-webpack-plugin')

const outputDirectory = 'dist'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundel.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    port: 7500,
    open: true
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    htmlWebpackPlugin
  ]
}