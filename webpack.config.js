const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const resolvedPath = fileOrDir => path.resolve(__dirname, fileOrDir)
const devMode = process.env.NODE_ENV === 'development'

console.log({devMode})

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
        use: [{
          loader: "coffee-loader"
        }],
        test: /\.coffee$/,
        exclude: /node_modules/
      },
      {
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: devMode,
              localIdentName: "[local]"
            }
          },
        ],
        test: /\.css$/
      }
    ]
  },

  devServer: {
    contentBase: "public",
    historyApiFallback: true
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

  devtool: devMode ? "eval-source-map" : "none"
};
