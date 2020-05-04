const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [new HtmlWebpackPlugin({
    filename: '../index.html',
    scriptLoading: 'defer',
    meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
    templateContent: `
                      <html>
                        <head>
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
      }
    ]
  }
}
