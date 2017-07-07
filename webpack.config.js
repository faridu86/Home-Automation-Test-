var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src/app.es6'
	],
	output: {
		path: path.join(__dirname, 'public/dist'),
		filename: '[name].bundle.js',
    publicPath: '/public'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js', '.css']
	},
	module: {
		loaders: [
			{
				test: /\.(js|es6)$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
			{ 
				test: /\.css|scss|style$/, 
				loader: 'style-loader!css-loader!sass-loader'
			},
			{ test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=30000&minetype=application/font-woff&name=[name]-[hash:6].[ext]" },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=30000&minetype=application/font-woff2&name=[name]-[hash:6].[ext]" },
      { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=[name]-[hash:6].[ext]" },
      { test: /\.(svg|jpg|jpeg|png)$/, loader: 'file-loader?name=[name]-[hash:6].[ext]' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.json$/, loader: "json-loader" }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		hot: true,
		proxy: {
			'*': 'http://localhost:3000'
		}
	}
};