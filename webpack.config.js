const webpackMerge = require('webpack-merge');
const commonConfig = require('./build-utils/webpack.common');
const devConfig = require('./build-utils/webpack.dev');
const prodConfig = require('./build-utils/webpack.prod');

module.exports = env => {
	let envConfig;
	if (env === 'prod') {
		envConfig = prodConfig;
		console.log('** building for production');
	} else {
		envConfig = devConfig;
		console.log('** building for development');
	}
	return webpackMerge(commonConfig, envConfig);
};
