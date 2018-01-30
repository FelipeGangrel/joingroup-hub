const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './js/app.js', 
        './scss/main.scss',
    ],
    output: {
        filename: 'dist/bundle.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1',
                })
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader','sass-loader'])
            }

        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'dist/[name].bundle.css',
            allChunks: true,
        }),
    ]
}