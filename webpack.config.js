const path = require('path')

const htmlWebpackPlugin = require( 'html-webpack-plugin' )

module.exports = {
  // 1. entry
  entry: path.join( __dirname, './src/js/main.js' ),

  // 2. output
  output: {
    path: path.join( __dirname, './dist' ),
    filename: 'bundle.js'
  },

  // 3. loader
  module:{
    rules:[
      //babel
      {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},
      // css
      {test:/\.css$/,use:['style-loader','css-loader']},
      // 图片
      {test:/\.(jpg|png|gif)$/,use:['url-loader']}
    ]
  },

  // 4. plugins
  plugins: [
    new htmlWebpackPlugin({
      template: path.join( __dirname, './src/index.html' ),
      filename: 'index.html'
    })
  ]
}