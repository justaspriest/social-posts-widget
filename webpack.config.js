module.exports = {
    entry: {
        widget: './src/components/social-posts-widget.jsx'
    },
    output: {
        filename: 'js/social-posts-widget.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env',
                            '@babel/react'
                        ]
                    }
                }
            }
        ]
    }
}