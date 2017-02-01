var path = require('path')
var PATH = {
  app: path.resolve(__dirname, 'src', 'app'),
  assets: path.resolve(__dirname, 'src', 'assets')
}

module.exports = {
  entry: PATH.app + '/index.js',
  output: {
    path: path.resolve(__dirname, 'dist') + '/app',
    filename: 'bundle.min.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
}
