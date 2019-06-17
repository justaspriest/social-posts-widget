const BUILD_DIR = __dirname + '/build';
const MODULE_DIR = __dirname + '/node_modules';
const EXCLUDED_DIR_LIST = [BUILD_DIR, MODULE_DIR];

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'js/social-posts-widget.js',
        path: BUILD_DIR,
        libraryTarget: 'commonjs2',
        libraryExport: 'default'
    },
    devtool: "source-map",
    resolve: {
        extensions: [
            ".ts", ".tsx", ".js", ".jsx"
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
        react: 'react',
        "react-dom": 'react-dom'
    }
}