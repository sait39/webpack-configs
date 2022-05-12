const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { merge } = require('webpack-merge');

const commonConfig = require('../webpack.common');

module.exports = (env) => {
	const config = require('./webpack.' + env);
	return merge(commonConfig, config);
}
