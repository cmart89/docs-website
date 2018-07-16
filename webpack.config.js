const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['isomorphic-fetch','./react-src/index.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({ //this is to make react work in IE11 along with isomorphic fetch
      Promise: 'es6-promise-promise'
    })
  ],
}

/*

add this after module to create an new index file based on the template react-index.html

,
  plugins:[
    new HtmlWebpackPlugin({
      template: './react-index.html'
    })
  ]

*/