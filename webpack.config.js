const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management',
        template: 'src/index.html',
        filename: 'index.html',
      	inject: 'body',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
        'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
        'xml-loader',
        ],
      },
    ],
  },
};