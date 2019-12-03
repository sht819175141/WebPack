/**
 * Created by Administrator on 2017/5/19.
 */
const webpacks=require("webpack");
const path=require("path");
const ExtractCss=require("extract-text-webpack-plugin");
const HtmlWebpackPlugin=require("html-webpack-plugin")
console.log(ExtractCss)

module.exports= {
    entry: "./src/js/app.js",
    output: {
        path: path.join(__dirname,"/dist"), //演示 --hot时改变的
        filename: "./js/bundle.js"
        //chunkFilename:"./js/[name].js"// 按需加载输出文件的文件名
        //publicPath:"https://www.baidu.com" //路径部署
    },
    module: {
        loaders: [
            /*{test:/\.css$/,loader:"style-loader!css-loader"},*/
            /*{test:/\.(scss|sass)$/,loader:"sass-loader!node-sass"},*/
            {test:/\.(png|jpe?g|git)$/, loader:"url-loader?limit=40960&name=images/pic[hash].[ext]"},
            {test:/\.css$/,loader:ExtractCss.extract("style-loader","css-loader")}
        ]
    },
    plugins:[
        new ExtractCss("css/publicStyle.css")
    ],
    devServer:{
        contentBase:"./src", //监听文件的根目录 即打开localhost:端口号 后展示的文件目录
        port: 9999,
        inline: true,//保存刷新浏览器  热替换是webpack-dev-server --hot
    }

}


//每次在webpack文件中改变配置时，要重新跑一遍环境；
//当图片小于某一值时 让图片转化为base64,转化成字符，会减少一次http请求；
//loader:"url-loader"?limit=2048 限制转化成base64的条件；当图片小于2048(字节)时；转化成base64
//当该图片大于2048 时转化不成base64 会在dist中生成 一个加密图片
//当遇到报错时，记得删掉dist 重新启环境；


//extract-text-webpack-plugin 抽离css插件用法；
/*1.在本地下载extract-text-webpack-plugin插件 并引入；
 2. 在module中加载响应的loader,并作抽离{test:/\.css$/,loader:ExtractCss.extract("style-loader","css-loader")}
 3.在plugins 中实例一下，就可以将本地的css 抽离到发布版上；*/
//并使用link 链接 dist中的css
//注意extract抽离的时候抽离同一目录下的css并进行合并
//不要和{test:/\.css$/,loader:"style-loader!css-loader"}同时使用；(设置样式渲染和抽离不能同时)



//webpack-dev-server(基于express封装)  启动一个webpack服务；注意webpack-dev-server  和 webpack 的版本一定要对应否则不支持；




//html 构建插件















/*module .exports={
 entry: {
 app:__dirname +"/src/js/app.js"
 },
 output: {
 path:__dirname + "/dist",
 filename: "./js/[name].js"
 },
 module:{
 loaders:[
 /!*{test:/\.css$/,loader:"style-loader!css-loader"}*!/
 //{test:/\.css$/,loader:Extract.extract("style-loader","css-loader")},
 //{test:/\.(png|jpg|gif)$/,loader:"url-loader?limit=374470&name=images/pic[hash].[ext]"},
 //使用url-loader 时 需要file-loader 做支持
 // 到浏览器中的element 查看img时会看到一大串的字符 base64 会减少一次http请求  图片是较小的图片/
 //{test:/\.html$/,loader:"html-loader"},
 //{test:require.resolve("zepto"),loader:"exports-loader?window.$!script-loader"}
 ]
 },
 }*/


/*{test: /\.css$/, loader: Extract.extract("style-loader", "css-loader")},
 {test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=374470&name=images/pic[hash].[ext]"},
 /!*使用url-loader 时 需要file-loader 做支持*!/
 /!* 到浏览器中的element 查看img时会看到一大串的字符 base64 会减少一次http请求  图片是较小的图片*!/
 {test: /\.html$/, loader: "html-loader"},
 {test: require.resolve("zepto"), loader: "exports-loader?window.$!script-loader"},
 //exclude 排除
 {test: /\.js/, exclude: /node_modules/, loader: "babel-loader"}*/















