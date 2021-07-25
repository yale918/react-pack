const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
      path:path.resolve(__dirname,'dist'),
      filename:'bundle.js',
  },
  module:{
    rules:[
      {
        test:/.js*/,
        loader:"babel-loader",
        options:{
          presets:['@babel/preset-env','@babel/preset-react']
        }
      },
      {
        test:/.jsx*/,
        loader:"babel-loader",
        options:{
          presets:['@babel/preset-env','@babel/preset-react']
        }
      }
    ]
  }

}