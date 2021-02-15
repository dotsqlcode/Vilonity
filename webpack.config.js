const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    },
    devtool: isDev ? 'cheap-inline-module-source-map' : false,
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new HTMLWebpackPlugin({
            filename: 'macros.html',
            template: path.resolve(__dirname, 'src/macros.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev,
                        } 
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isDev,
                        }  
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: isDev,
                        } 
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isDev,
                        }  
                    },
                ]
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                exclude: path.resolve(__dirname, 'img/icons'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                enabled: false,
                              progressive: true,
                              quality: 80
                            },
                            optipng: {
                              enabled: false,
                            },
                            pngquant: {
                                enabled: false,
                              quality: [0.65, 0.90],
                              speed: 4
                            },
                            gifsicle: {
                                enabled: false,
                              interlaced: false,
                            },
                            webp: {
                                enabled: false,
                              quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                include: [
                    path.resolve(__dirname, 'src/img/icons')
                ],
                use: [
                    {
                        loader: 'svg-sprite-loader',
                    }
                ]
            }
        ]
    }
}