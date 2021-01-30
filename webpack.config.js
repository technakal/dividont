var path = require('path');
var HTMLPlugin = require('html-webpack-plugin');
var rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    },
];
module.exports = {
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        hot: true,
        port: 3001,
    },
    entry: path.join(__dirname, 'src', 'index.js'),
    module: { rules: rules },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HTMLPlugin({
            template: './public/index.html',
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
