const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry:{
        app: './src/index.js'
    },
    // devtool:'inline-source-map',
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'line-style',
            template:'./src/index.html',//模板文件，即需要打包和拷贝到build目录下的html文件
			// filename:'index.html',//目标html文件
			// chunks:['[name].bundle.js'],   //对应加载的资源,html文件需要引入的js模块
			// inject:true         //资源加入到底部，把模块引入到html文件的底部
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer:{
        static: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    }
}