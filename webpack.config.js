const path = require('path');
const webpack = require('webpack');
const PATHS = {
    app: path.join(__dirname, 'src/'),
    public: path.join(__dirname, 'public')
};
const PLATFORM = process.env.PLATFORM
    ? process.env.PLATFORM
    : 'desktop';

module.exports = {
    entry: {
        app: ['babel-polyfill', `${PATHS.app}/index.js`]
    },
    output: {
        path: PATHS.public,
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
        port: 3333,
        contentBase: PATHS.public
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
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'sass-loader'
                ],
                include: `${__dirname}/src`
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            PLATFORM: JSON.stringify(PLATFORM)
        })
    ]
}