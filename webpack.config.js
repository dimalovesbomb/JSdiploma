const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      minify: false,
      scriptLoading: 'defer', // *read down*
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      templateContent: `
                        <html>
                          <head>
                            <meta charset="utf-8">
                            <title>Дипломная работа Дмитрия Купрюнина</title>
                            <link rel="stylesheet" href="src/css/master.css">
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

// gotta manually change <script scr="dist/build.js" /> in index.html
