const path = require('path');

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
            test: /\*\.(js|jsx)/,
            exclude: path.resolve(__dirname, '/node_modules'),
            use: 'babel-loader'
        }
    ]
    }
}