'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { main: './source/code/index.ts' },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './source/pages/index.pug'
        })
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: { loader: 'ts-loader' },
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: { root: path.resolve(__dirname, 'source/pages') }
                },
            },
        ]
    }
}
