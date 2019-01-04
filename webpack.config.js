const path = require('path');

const ENTRY_FILE = path.resolve(__dirname, 'assets/js/main.js');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

const config = {
  mode: process.env.MODE,
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    // filename: '[name].[format]',
  },
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        // include: [],
      },
    ],
  },
};

module.exports = config;
