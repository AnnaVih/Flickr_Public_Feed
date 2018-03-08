const path = require('path');

//Extract the style sheets into a dedicated file in production 
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "css/style.css",
});

//Module  exports
module.exports = {
      mode: 'development',

      performance: { 
        hints: false 
      },

      devServer: {
        contentBase: path.join(__dirname, 'development'),
        compress: true
      },

      entry: ['./src/polyfills.js', './src/scss/style.scss', './src/index.js',],

      // output: {
      //   filename: 'main.js',
      //   path: path.resolve(__dirname, 'development')
      // },

      devtool: "source-map", //"source-map"-like devtool is possible

      module: {

          rules: [
            //Babel loader
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },

            //Sass Loaders
            {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
            })
          }
        ]
    },
    plugins: [
      extractSass
    ]
  };