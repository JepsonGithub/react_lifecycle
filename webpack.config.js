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
  ],

  // 配置代理
  devServer: {
    // 真实接口:'https://api.douban.com/v2/movie/in_theaters'
    // https://webpack.js.org/configuration/dev-server/#devserver-proxy
    // http://www.jianshu.com/p/3bdff821f859
    proxy: {
      // 使用: /api/movie/in_theaters
      // 访问: /api/movie/in_theaters ==> https://api.douban.com/v2/movie/in_theaters
      '/api': {
        target: 'https://api.douban.com/v2',
        // https 请求需要配置
        secure: false,
        // 必须配置该项
        changeOrigin: true,
        // '/api/movie/in_theaters' 路径重写为：'/movie/in_theaters'
        pathRewrite: {"^/api" : ""}
      }
    }
  }
}