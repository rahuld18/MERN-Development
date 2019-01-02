var webpack = require('webpack');
    var path = require('path');
module.exports = {
  
  mode:'development',
    entry: './src/index.js',
    output: {
        path: __dirname,
        publicPath:'/',
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            query:{
              presets:["react","es2015","stage-1"]
            }
          }
        }
      ]
    },
   
    devServer:{
      historyApiFallback:true,
      contentBase:'./'
    }
   
  };
