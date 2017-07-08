'use strict';

//import webpack plugins
var webpack = require('webpack');

//define the webpack configuration object (to be exported from this file)
var config = {
    devtool: 'inline-source-map',
    context: __dirname + '/app',
    entry: './app.module.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        alias:  {
            'npm': __dirname + '/node_modules'
        }
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }

}

module.exports = config;