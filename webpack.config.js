const HtmlWebpackPlugin = require('html-webpack-plugin'),
      KEYS = require("dotenv").config(),
      webpack = require("webpack");

if (KEYS.error) { throw KEYS.error; }

module.exports = (env) => {

    return {
        entry: "./js/app.js",
        output: {
            path: __dirname + "/dist",
            filename: "bundle.js"
        },
        module: {
            loaders: [
                { 
                    test: /\.json$/,
                    loader: "json-loader" },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader" }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Brewery Search",
                template: "index.html"
            }),
            new webpack.DefinePlugin({
                "GMAPS_API_KEY": JSON.stringify(process.env.GMAPS_API_KEY)
            })
        ],
        externals: {
            "ko": "ko"
        },
        node: {
            fs: "empty",
            net: "empty",
            tls: "empty"
        }
    }
};