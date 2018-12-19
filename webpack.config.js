const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

const resolvedPath = fileOrDir => path.resolve(__dirname, fileOrDir)

module.exports = {
  mode: "development",
  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {}
      }
    })],
  },
  context: resolvedPath("./app"),

  entry: {
    index: "./initialize.coffee",
  },

  output: {
    path: resolvedPath("./public"),
    filename: "javascripts/app.js"
  },

  resolve: {
    extensions: ["*", ".mjs", ".js", ".coffee"]
  },

  module: {
    rules: [{
        test: /\.coffee$/,
        exclude: /node_modules/,
        use: [{
          loader: "coffee-loader"
        }]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[local]"
            }
          },
        ]
      }
    ]
  },

  devServer: {
    contentBase: "public",
    historyApiFallback: true,
    compress: false
  },

  watchOptions: {
    ignored: /node_modules/
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "stylesheets/app.css"
    }),
    new HtmlWebpackPlugin({
      template: 'assets/index.html'
    })
  ],

  devtool: "eval-source-map"
};
