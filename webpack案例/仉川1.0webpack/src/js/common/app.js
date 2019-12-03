/**
 * Created by Administrator on 2017/5/17.
 */
//引入样式的第一种方式；
//require("style-loader!css-loader!../css/style.css");
// 在命令行运行 webpack -w 时时检测；
//引入样式的第二种方式；
//require("../css/style.css");
// webpack ./src/js/app.js  ./dist/js/bundle.js --module-bind "css=style!css"                                       ./src/dist/js/bundle.js
//第三种方式见 webpack.config.js
require("../css/page/style.css");
require("../css/global/reset.css");
///require("../css/common/common.scss");

console.log("this is a webpack test");
require("./add.js");


