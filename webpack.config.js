const path = require('path');

module.exports = {
    entry: {
        app: './app/components/App.js'
    },
    devServer: {
        contentBase: './public'
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            presets:["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            }
        ]
    }
}