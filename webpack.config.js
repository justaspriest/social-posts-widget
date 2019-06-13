const BUILD_DIR = __dirname + '/build';
const MODULE_DIR = __dirname + '/node_modules';
const EXCLUDED_DIR_LIST = [BUILD_DIR, MODULE_DIR];

module.exports = {
    entry: {
        widget: './src/components/social-posts-widget.tsx'
    },
    output: {
        filename: 'js/social-posts-widget.js',
        path: BUILD_DIR,
        libraryTarget: 'commonjs2',
        libraryExport: 'default'
    },
    externals: {
        react: 'react',
        "react-dom": 'react-dom'
    },
    resolve: {
        extensions: [
            ".ts", ".tsx", ".js", ".jsx"
        ]
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: EXCLUDED_DIR_LIST,
                loader: 'babel-loader'
            },
            {
                test: /.tsx?$/,
                exclude: EXCLUDED_DIR_LIST,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: EXCLUDED_DIR_LIST,
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ]
    }
}