var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: '../src/public/style.css'
});

var BUILD_DIR = path.resolve(__dirname, 'dst');
var APP_DIR = path.resolve(__dirname, 'src/app');


var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]',
                },
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
        ]
    },
    plugins: [
        extractPlugin
    ]
};

module.exports = config;
