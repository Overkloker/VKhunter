//Created by Frank 09.03.2016 on (22:10). FOR PROJECT ©VKhunter
//FILE NAME: webpack.config __ (IDE PhpStorm) Березень 2016

var path = require("path");
require('es6-promise').polyfill();

module.exports = {
  entry: {
    //admin: "./src/app/admin/index.js",
    front: "./src/app/front/index.js"
  },
  output: {
    publicPath: "/assets/",
    path: path.resolve(__dirname, "./build"),
    filename: "[name].application.js"
  },
  resolve: {
    root: [
      path.resolve(__dirname, "./src")
    ]
  },
  "module": {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
    loaders: [
      {test: /[\/]angular\.js$/, loader: "exports?angular"},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.json/, loader: "json"},
      {test: /\.html$/, loader: "ngtemplate?relativeTo=/src/!html"},
      {test: /\.png$/, loader: "url?limit=100000"},
      {test: /\.gif$/, loader: "url?limit=10000"},
      {test: /\.(jpg|woff|woff2|eot|svg|ttf)(\?.*)?$/, loader: "file"}
    ],
    noParse: [
      /angular[\/]angular\.js$/,
      /bootstrap\.js$/,
      /jquery\.js$/,
      /jquery\-ui\.js$/,
      /moment\.js$/,
      /ui\-bootstrap\-tpls\.js/
    ]
  },
  plugins: []
};
