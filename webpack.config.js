const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'build.css',
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      minify: false,
      scriptLoading: 'defer',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      templateContent: `
                        <html>
                          <head>
                            <meta charset="utf-8">
                            <title>Дипломная работа Дмитрия Купрюнина</title>
                          </head>
                          <body>
                            <div id="app"></div>
                          </body>
                        </html>
                      `
  })],
  devServer: {
    historyApiFallback: true
  },
  module: {
  rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
}
