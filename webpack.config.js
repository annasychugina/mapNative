const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const loaders = require('./webpack.config.loaders')();

loaders.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
    })
});

loaders.push({
    test: /\.s?css$/,
    loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: ['css-loader?minimize', 'sass-loader']
    })
});

module.exports = {
    entry: {
        main: './src/main.js',
    },
    output: {
        filename: '[chunkhash].js',
        path: '/Users/anna/Desktop/mapL/dist'
    },
    devtool: 'source-map',
    module: {
        loaders
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                drop_debugger: false
            }
        }),
        new ExtractTextPlugin('styles.css'),
        new HtmlPlugin({
            title: 'friends editor',
            template: 'index.hbs',
            filename: 'index.html',
            chunks: ['main']
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
