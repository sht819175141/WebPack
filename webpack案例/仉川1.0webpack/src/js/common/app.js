/**
 * Created by Administrator on 2017/5/17.
 */
//������ʽ�ĵ�һ�ַ�ʽ��
//require("style-loader!css-loader!../css/style.css");
// ������������ webpack -w ʱʱ��⣻
//������ʽ�ĵڶ��ַ�ʽ��
//require("../css/style.css");
// webpack ./src/js/app.js  ./dist/js/bundle.js --module-bind "css=style!css"                                       ./src/dist/js/bundle.js
//�����ַ�ʽ�� webpack.config.js
require("../css/page/style.css");
require("../css/global/reset.css");
///require("../css/common/common.scss");

console.log("this is a webpack test");
require("./add.js");


