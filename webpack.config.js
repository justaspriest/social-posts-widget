const BUILD_DIR = __dirname + '/build';
const MODULE_DIR = __dirname + '/node_modules';
const EXCLUDED_DIR_LIST = [BUILD_DIR, MODULE_DIR];

module.exports = {
  entry: {
    widget: './src/index.tsx'
  },
  output: {
    filename: 'social-posts-widget.js',
    path: BUILD_DIR,
    library: 'socPost',
    libraryTarget: 'var'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dev',
    host: '0.0.0.0',
    port: 3000
  },
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.jsx'
    ]
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: EXCLUDED_DIR_LIST,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.js$/,
        exclude: EXCLUDED_DIR_LIST,
        loader: 'source-map-loader',
        enforce: 'pre'
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}