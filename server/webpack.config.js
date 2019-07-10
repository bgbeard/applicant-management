const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  target: 'node',
  externals: {
    knex: 'commonjs knex'
  }
}
