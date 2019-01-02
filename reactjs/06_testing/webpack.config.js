var webpack=require('webpack');

    module.exports = {
      entry: './public/components/clock.js',
      output: {
        path: __dirname ,
        filename: 'public/bundle.js'
      },

      resolve:{
        root: __dirname,
        alias: {
          Clock: 'app/components/clock.js'  ,
        
           },
        extension:['','.js']

      },


      module :{
        loaders: [
          {
            loader : 'babel-loader',
            query: {
              presets : ['react','es2015']
            },
            test : /\.js?$/,
            exclude : /(node_modules)/ 
          }
        ]
      }
}
