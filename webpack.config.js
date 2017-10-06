var autoprefixer = require('autoprefixer');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/app.jsx'],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
  },
  devServer: {
    disableHostCheck: true,
    host: '127.0.0.1',
    noInfo: true,
    port: 7777,
    quiet: false,
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
              'presets': [
                ['es2015', { modules: false }],
                'stage-0',
                'react',
              ],
            }
          }, {
            loader: 'eslint-loader',
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
          options: {
            attrs: {
              title: 'app-style'
            }
          }
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [autoprefixer('last 2 versions', 'ie 10')]
            }
          }
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.svg/,
        use: [
          'babel-loader',
          'svg-react-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      alwaysWriteToDisk: true,
    }),
    new CopyWebpackPlugin([
      { from: 'src/static/quest_pathways.json', to: 'api/quest-pathways.json' },
      { from: 'src/static/users.json', to: 'api/users.json' },
    ]),
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.svg'],
    modules: [
      path.resolve('./'),
      path.resolve('./src'),
      path.resolve('./src/assets'),
      path.resolve('./src/components'),
      'node_modules',
    ],
  },
};
