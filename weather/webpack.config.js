
    module.exports = {
      entry: './public/Mainapp.js',
      output: {
        path: __dirname ,
        filename: 'public/bundle.js'
      },

      resolve:{
        root: __dirname,
        alias: {
          WeatherForm: 'public/WeatherForm.js'  ,
          WeatherMessage: 'public/WeatherMessage.js'  ,        
          WeatherMain: 'public/WeatherMain.js',
          Api: 'public/api/weatherapi.js'
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
