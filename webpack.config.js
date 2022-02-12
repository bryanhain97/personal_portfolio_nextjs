const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: '/src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: path.resolve(__dirname, '/node_modules'),
                use: 'babel-loader'
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
}