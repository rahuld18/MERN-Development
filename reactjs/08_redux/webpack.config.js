var webpack = require('webpack');
    var path = require('path');
module.exports = {
  
  mode:'development',
    entry: './app/app.js',
    output: {
        path: __dirname,
      filename: './public/bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            query:{
              presets:["react","es2015"]
            }
          }
        }
      ]
    }
   
  };
