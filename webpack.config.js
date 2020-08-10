const path = require('path');
const { DefinePlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';
const isProd = !isDev;

const getNameMask = () => isDev ? '[name].bundle' : '[name].[contenthash].bundle';

const getOptimisation = () => {
	const optimisation = {
		splitChunks: {
			chunks: 'all'
		}
	};

	if(isProd) {
		optimisation.minimizer = [
			new OptimizeCSSAssetsWebpackPlugin(),
			new TerserWebpackPlugin()
		]
	}

	return optimisation;
};

const getJsLoaders = () => {
	const loaders = [{
		loader: 'babel-loader',
		options: {
			presets: [
				'@babel/preset-env',
				'@babel/preset-react'
			]
		}
	}];

	if(isDev) {
		loaders.push('eslint-loader');
	}

	return loaders;
};

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode,
	entry: {
		main: ['@babel/polyfill', './index.jsx']
	},
	output: {
		filename: `${getNameMask()}.js`,
		path: path.resolve(__dirname, 'dist')
	},
	devtool: isDev ? 'source-map' : 'none',
	resolve: {
		modules: ["src", "node_modules"],
		extensions: ['.js', '.jsx']
	},
	optimization: getOptimisation(),
	devServer: {
		port: 8080,
		hot: isDev
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.ico'),
					to: path.resolve(__dirname, 'dist')
				}
			]
		}),
		new MiniCSSExtractPlugin({filename: `${getNameMask()}.css` }),
		new DefinePlugin({ 'process.env.DEV': JSON.stringify(isDev)})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{
					loader: MiniCSSExtractPlugin.loader,
					options: {
						hmr: isDev,
						reloadAll: true
					}
				},
				'css-loader']
			},
			{
				test: /\.s[ac]ss$/,
				use: [{
					loader: MiniCSSExtractPlugin.loader,
					options: {
						hmr: isDev,
						reloadAll: true
					}
				},
				'css-loader',
				'sass-loader']
			},
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: getJsLoaders()
			}
		]
	}
};
