const path = require('path');

module.exports = {
    entry: './src/script/index.js',
    output: {
        path: path.resolve(__dirname, './dist/assets/js'),
        // filename: 'index.js'
    },
    module :{
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
}

