var path = require('path');

module.exports = {
  mode: 'development',
  entry:  './resources/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public/dist/'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
}