const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

    
    // モード
    // development | production | none 
    mode: 'development',

    devtool: 'source-map',
    entry: './src/script/main.js',

    //  出力ディレクトリ
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name]-[hash].js',
    },

    module :{
        rules: [
            // Vue
            {
                test: /\.vue/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'vue-loader',
                    },
                ],
            },
            // Babelを使ってES6をトランスパイルする
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { 'targets': '> 0.25%, not dead' }],                               
                            ], 
                        },
                    },
                ],
            },
            // sass
            {
                test: /\.(css|sass|scss)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // javascriptとしてバンドルせず css として出力する
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader' //SASSをCSSに変換
                    },
                ],
            },
            // 画像読み込み
            {
                test: /\.(png|jpg|jpeg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'images/[name]-[hash].[ext]',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                        },
                    },
                ],
            },
            // pug
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                         }
                    },
                ],
            },
       ],
    },

    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name]-[hash].css',
        }
        ),
        new HtmlWebpackPugin({
            template: './src/templates/index.pug',
            filename: 'index.html',
        }),
        new HtmlWebpackPugin({
            template: './src/templates/access.pug',
            filename: 'access/index.html',
        }),
        new HtmlWebpackPugin({
            template: './src/templates/test_folder/index.pug',
            filename: 'test_folder/index.html',
        }),
        new CleanWebpackPlugin(),
    ],

}
