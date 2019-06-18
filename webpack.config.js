const BUILD_DIR = __dirname + '/build';
const DEV_DIR = __dirname + '/dev';
const MODULE_DIR = __dirname + '/node_modules';
const EXCLUDED_DIR_LIST = [BUILD_DIR, MODULE_DIR];

var config = {
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
    contentBase: DEV_DIR,
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

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    const fs = require('fs');
    const devResources = `${DEV_DIR}/js`;
    if (fs.existsSync(devResources)) {
      fs.unlinkSync(devResources);
      console.log(`Symlink ${devResources} deleted`);
    }
    fs.symlink(BUILD_DIR, devResources, 'dir', (err) => {
      if (err) throw err;
      console.log(`Created symlink from ${BUILD_DIR} to ${devResources}`);
    });
  }

  return config;
}