'use strict';

//import webpack plugins
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//define the webpack configuration object (to be exported from this file)
var config = {
    context: __dirname + '/app',
    entry: {
        app: './app.module.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, 
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor"),
        new HtmlWebpackPlugin({
            template: './index.ejs'
        }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           "Tether": 'tether'
       })
    ]
};

module.exports = config;