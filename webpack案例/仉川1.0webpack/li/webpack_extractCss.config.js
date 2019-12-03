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
        path: path.join(__dirname,"/dist"), //��ʾ --hotʱ�ı��
        filename: "./js/bundle.js"
        //chunkFilename:"./js/[name].js"// �����������ļ����ļ���
        //publicPath:"https://www.baidu.com" //·������
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
        contentBase:"./src", //�����ļ��ĸ�Ŀ¼ ����localhost:�˿ں� ��չʾ���ļ�Ŀ¼
        port: 9999,
        inline: true,//����ˢ�������  ���滻��webpack-dev-server --hot
    }

}


//ÿ����webpack�ļ��иı�����ʱ��Ҫ������һ�黷����
//��ͼƬС��ĳһֵʱ ��ͼƬת��Ϊbase64,ת�����ַ��������һ��http����
//loader:"url-loader"?limit=2048 ����ת����base64����������ͼƬС��2048(�ֽ�)ʱ��ת����base64
//����ͼƬ����2048 ʱת������base64 ����dist������ һ������ͼƬ
//����������ʱ���ǵ�ɾ��dist ������������


//extract-text-webpack-plugin ����css����÷���
/*1.�ڱ�������extract-text-webpack-plugin��� �����룻
 2. ��module�м�����Ӧ��loader,��������{test:/\.css$/,loader:ExtractCss.extract("style-loader","css-loader")}
 3.��plugins ��ʵ��һ�£��Ϳ��Խ����ص�css ���뵽�������ϣ�*/
//��ʹ��link ���� dist�е�css
//ע��extract�����ʱ�����ͬһĿ¼�µ�css�����кϲ�
//��Ҫ��{test:/\.css$/,loader:"style-loader!css-loader"}ͬʱʹ�ã�(������ʽ��Ⱦ�ͳ��벻��ͬʱ)



//webpack-dev-server(����express��װ)  ����һ��webpack����ע��webpack-dev-server  �� webpack �İ汾һ��Ҫ��Ӧ����֧�֣�




//html �������















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
 //ʹ��url-loader ʱ ��Ҫfile-loader ��֧��
 // ��������е�element �鿴imgʱ�ῴ��һ�󴮵��ַ� base64 �����һ��http����  ͼƬ�ǽ�С��ͼƬ/
 //{test:/\.html$/,loader:"html-loader"},
 //{test:require.resolve("zepto"),loader:"exports-loader?window.$!script-loader"}
 ]
 },
 }*/


/*{test: /\.css$/, loader: Extract.extract("style-loader", "css-loader")},
 {test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=374470&name=images/pic[hash].[ext]"},
 /!*ʹ��url-loader ʱ ��Ҫfile-loader ��֧��*!/
 /!* ��������е�element �鿴imgʱ�ῴ��һ�󴮵��ַ� base64 �����һ��http����  ͼƬ�ǽ�С��ͼƬ*!/
 {test: /\.html$/, loader: "html-loader"},
 {test: require.resolve("zepto"), loader: "exports-loader?window.$!script-loader"},
 //exclude �ų�
 {test: /\.js/, exclude: /node_modules/, loader: "babel-loader"}*/















