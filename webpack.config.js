const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

  entry: './src/js/index.js',

  output: {
    path: path.join(__dirname, "/dist"), 
    publicPath: '',
    filename: "main.js"
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    writeToDisk: true,
    stats: 'errors-only',
    overlay: true,
    open: true,
  },

  module: {

    rules: [

      {
        test: /\.(sass|css|scss)/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: "images", 
          },
        }, ],
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
              esModule: false,
            }
          }
        ]
      },

      {
        test: /\.html$/i,
        loader: 'html-loader', 
      },

      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      
    ],

  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
  ],
};