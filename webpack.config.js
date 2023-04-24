const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      module: require.resolve('module'),
      vm: require.resolve('vm-browserify'),
      path: require.resolve('path-browserify'),
      fs: false,
    },
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
