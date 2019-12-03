var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');//html-webpack-plugin插件的引用
module.exports = {
    entry: {//入口文件可以引入多个文件,创建多个js的链接
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js',
        'bootstrap': 'bootstrap-loader', //引入bootstrap 方式
    },
    output: {  //打包后的文件
        filename:'js/[name].js', //打包以后的文件名
        path: __dirname + "/dist",  //打包后的文件
        // publicPath:'http://cdn.com'//发布的时候前面的网址路径
    },
     module: {
         loaders: [
            {
                test: /\.(css|scss)$/,
                loaders: ['to-string-loader', 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader"
            },
            {
                test: /\.(png|jpg|icon|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
      plugins: [
            //如果多个页面js的引用,分别要给多个页面的话,需要多创建new htmlwebpackPlugin,因为这个是数组
         new htmlWebpackPlugin({
            //  filename:'index-[hash].html',可以指定成这个,如果指定成index.html就是固定命名了,以后最新的文件就使这个了
             filename:'a.html', //页面名称
             template: 'index.html',//以什么文件为模版,路径默认为webpack.config.js一个根目录
             inject: 'head', //可以把脚本放在哪里head footer
             title: 'webpack is a.html 1', //可以在html里直接引用 <%= htmlWebpackPlugin.options.title%>
             date:new Date(), //可以直接在页面中传值
             minify: { //里面有很多功能,可以做到清除注释
                 removeComments: true,//清除注释
                 collapseWhitespace:true,//清除空格
             },
             chunks:['main','a','bootstrap'] //chunks,用来引入对这个页面有用的js文件
         }),
          new htmlWebpackPlugin({
             filename:'b.html',
             template: 'index.html',
             inject: 'footer',
             title: 'webpack is b.html',
            excludeChunks:['a','c','main','bootstrap']//也可以排除掉这些js文件,剩余的全部引入
         }),
          new htmlWebpackPlugin({
            filename:'c.html',
             template: 'index.html',
             inject: true,
             title: 'webpack is c.html',
             chunks:['c','bootstrap']
          }),
           new webpack.ProvidePlugin({ //加载jq
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery":"jquery"
        })
        ],
}
