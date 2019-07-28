const webpack = require('webpack');
const { appEntry, devOutput } = require('./common-paths');

const port = process.env.PORT || 3000;
const config = {
	mode: 'none',
	entry: {
		app: appEntry
	},
	output: {
		path: devOutput,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					{
						loader: 'style-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localsConvention: 'camelCase',
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				use: 'react-hot-loader/webpack',
				include: /node_modules/
			}
		]
	},
	optimization: {
		minimize: false
	},
	devtool: 'inline-source-map',
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		hot: true,
		open: 'Google Chrome'
	}
};
module.exports = config;
