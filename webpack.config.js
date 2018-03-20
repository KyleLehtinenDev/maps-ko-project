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
                "GMAPS_API_KEY": JSON.stringify(process.env.GMAPS_API_KEY),
                "GMAPS_API_VERSION": JSON.stringify(process.env.GMAPS_API_VERSION),
                "BREWERY_DB_API_KEY": JSON.stringify(process.env.BREWERY_DB_API_KEY),
                "GOOGLE_PLACES_KEY": JSON.stringify(process.env.GOOGLE_PLACES_KEY)
            })
        ],
        externals: {
            "ko": "ko"
        },
        node: {
            fs: "empty",
            net: "empty",
            tls: "empty"
        },
    }
};