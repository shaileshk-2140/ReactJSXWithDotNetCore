const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const bundleOutputDir = './wwwroot/dist';

var bootstrapEntryPoint = require('./webpack.bootstrap.config');
var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];

var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath:'dist/'
})
var cssConfig = isProd ? cssProd : cssDev;
var bootstrapConfig = isProd ? bootstrapEntryPoint.prod : bootstrapEntryPoint.dev;

module.exports = {
    context: __dirname ,
    entry: {
        app: './ClientApp/App.js',
        bootstrap: bootstrapConfig
    },
    output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].bundle.js',
            publicPath: 'dist/'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /ClientApp/,
                 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
             
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader' }
        ]
    },
    plugins: [
        new ExtractTextPlugin("site.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]   
}