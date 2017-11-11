const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackStripLoader = require('strip-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PATHS = {
    app: path.join(__dirname, 'src/'),
    public: path.join(__dirname, 'public'),
    dist: path.join(__dirname, 'dist'),
    template: path.join(__dirname, 'index.html')
};
const PLATFORM = process.env.PLATFORM
    ? process.env.PLATFORM
    : 'desktop';

const config = {
    entry: {
        app: ['babel-polyfill', `${PATHS.app}/index.js`]
    },
    output: {
        path: PATHS.public,
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ],
        alias: {
            PLATFORM: `platforms/${PLATFORM}`
        }
    },
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        port: 4444,
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: PATHS.app,
                loader: 'babel-loader',
                query: {
                    presets: ['es2016', 'es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            PLATFORM: JSON.stringify(PLATFORM)
        })
    ]
}

if (process.env.NODE_ENV === 'prod') {
    config.output.path = PATHS.dist;
    config.output.publicPath = '/';

    // Strip console.log
    config.module.loaders.push({
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: WebpackStripLoader.loader('console.log')
    });

    // Clean build dir
    config.plugins.push(new CleanWebpackPlugin([PATHS.dist], {
        root: __dirname,
        verbose: true,
        dry: false
    }));

    // Copy fonts to dist
    config.plugins.push(
        new CopyWebpackPlugin([{
            from: `${PATHS.public}/fonts`,
            to: `${PATHS.dist}/fonts`
        }])
    );

    // Copy mock data to dist
    config.plugins.push(
        new CopyWebpackPlugin([{
            from: `${PATHS.public}/api`,
            to: `${PATHS.dist}/api`
        }])
    );

    config.module.loaders.push({
        test: /\.scss$/,
        loaders: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ],
        include: `${__dirname}/src`
    });

    config.plugins.push(new HtmlWebpackPlugin({
        hash: false,
        title: 'VOD CTV',
        filename: 'index.html',
        template: PATHS.template,
    }));

} else {

    config.module.loaders.push({
        test: /\.scss$/,
        loaders: [
            'style-loader',
            'css-loader?sourceMap',
            'sass-loader'
        ],
        include: `${__dirname}/src`
    });

    config.plugins.push(new HtmlWebpackPlugin({
        hash: true,
        title: 'VOD CTV',
        filename: 'index.html',
        template: PATHS.template,
    }));
}

module.exports = config;