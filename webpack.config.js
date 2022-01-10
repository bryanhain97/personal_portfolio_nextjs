const path = require('path');

module.exports = {
    entry: '/src/output.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
            include: /\*\.(js|jsx)/,
            exclude: path.resolve(__dirname, '/node_modules'),
            use: 'babel-loader'
        }
    ]
    }
}