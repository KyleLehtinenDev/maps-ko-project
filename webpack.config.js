var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Brewery Search",
            template: "index.html"
        })
    ],
    externals: {
        "ko": "ko"
    }
};