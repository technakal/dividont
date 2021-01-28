const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      'postcss-loader',
    ],
  },
];

module.exports = {
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    port: 3001,
  },
  entry: path.join(__dirname, 'src', 'index.js'),
  module: { rules },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HTMLPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src'),
      component: path.resolve(__dirname, './src/component'),
      container: path.resolve(__dirname, './src/container'),
      service: path.resolve(__dirname, './src/service'),
    },
  },
};
