const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPugin = require('html-webpack-plugin');

module.exports = {

    // モード
    // development | production |none 
    mode: 'development',

    entry: './src/script/index.js',

    //  出力ディレクトリ
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: 'index.js'
    },

    module :{
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // javascriptとしてバンドルせず css として出力する
                    },
                    {
                        loader: 'css-loader' //SASSをCSSに変換
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPugin({
            template: './src/index.html',
        }),
    ],

}
