module.exports = {
	entry: './src/app.module.js',
	output: {
		path: './public/js',
		filename: 'app.js'
	},
	module : {
		loaders: [
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: [ 'es2015' ]
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.html$/,
				loader: 'html?attrs=false'
			}
		]
	}
};
