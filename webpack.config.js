module.exports = {
  entry: './browser/index.jsx', 
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js' 
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    ]
  }
};