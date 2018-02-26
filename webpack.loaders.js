const ExtractTextPlugin = require('extract-text-webpack-plugin');

// ** Loaders **
module.exports = {
  babel: { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
  cssDev: { test: /\.css$/, use: ['style-loader', 'css-loader'] },
  scssDev: { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
  cssProd: {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader'],
    }),
  },
  scssProd: {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: { importLoaders: 1 },
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'sass-loader',
          options: { outputStyle: 'expanded' },
        },
      ],
    }),
  },
};
