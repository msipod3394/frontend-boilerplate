const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    // モード
    // development | production |none 
    mode: 'development',

    entry: './src/script/main.js',

    //  出力ディレクトリ
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/main.js',
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
        new MiniCssExtractPlugin({
            filename: './css/main.css',
        }
        ),
        new HtmlWebpackPugin({
            template: './src/templates/index.html',
        }),
        new CleanWebpackPlugin(),
    ],

}
