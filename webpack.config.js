const path = require('path')
const BundleTracker = require('webpack-bundle-tracker')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: [
    // './assets/js/index',
    './assets/js/ui_header'
  ],
  output: {
    path: path.resolve('./assets/bundles/'),
    filename: 'app.js'
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new ExtractTextPlugin('[name]')
  ],

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {vue: 'vue/dist/vue.js'}
  }
}
