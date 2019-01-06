const path = require('path');
const ExtractCSS = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ENTRY_FILE = path.resolve(__dirname, 'src', 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

const config = {
  mode: process.env.MODE,
  entry: ['@babel/polyfill', ENTRY_FILE],

  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(s?css)$/,
        use: ExtractCSS.extract([
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer({ browsers: 'cover 99.5%' })];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ]),
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    // filename: '[name].[format]',
  },
  plugins: [new ExtractCSS('app.css')],
};

module.exports = config;
