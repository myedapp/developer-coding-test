const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const loaders = require('./webpack.loaders');

// ** PlugIns **
const html = new HtmlWebpackPlugin({ template: 'src/index.html' });
const extractText = new ExtractTextPlugin({ filename: 'bundle.css' });
const uglify = new UglifyJsPlugin({ sourceMap: true });
const nameModules = new webpack.NamedModulesPlugin();
const hotModuleReplacement = new webpack.HotModuleReplacementPlugin();

module.exports = (env) => {
  const productionRules = [loaders.babel, loaders.scssProd, loaders.cssProd];
  const developmentRules = [loaders.babel, loaders.scssDev, loaders.cssDev];
  let rules = [];

  const productionPlugins = [html, extractText, uglify];
  const developmentPlugins = [html, nameModules, hotModuleReplacement];
  let plugins = [];



  if (env.prod == true) {
    console.log('\n** Building For Production **\n');
    rules = productionRules;
    plugins = productionPlugins
  } else {
    console.log('\n** Running in Development Mode **\n');
    rules = developmentRules;
    plugins = developmentPlugins
  }

  return {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'   // React Router Won't work without this
    },
    module: {
      rules: rules,
    },
    devtool: 'source-map' ,
    // ** Dev Sever Required For enabling HMR
    devServer: {
      contentBase: './dist',
      hot: true,
      historyApiFallback: true   // React Router Won't work without this
    },

    plugins: plugins,
  }
};
