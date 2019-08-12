const slws = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: slws.lib.entries,
    target: 'node',
    devtool: 'source-map',
    externals: [nodeExternals()],
    mode: 'development',
    optimization: { minimize: false },
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json']
    }
}