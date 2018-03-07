const path = require('path');

//Extract the style sheets into a dedicated file in production 
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "css/style.css",
  disable: process.env.NODE_ENV === "development"
});

//Module  exports
module.exports = {
      performance: { 
        hints: false 
      },

      devServer: {
        contentBase: path.resolve(__dirname, 'production'),
        compress: true
      },

      entry: ['./src/polyfills.js', './src/index.js', './src/scss/style.scss'],

      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'production')
      },

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