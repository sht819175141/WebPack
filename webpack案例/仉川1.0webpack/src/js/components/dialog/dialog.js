/**
 * Created by Administrator on 2017/4/12.
 */
require("./dialog.css");
var dialogHtml=require("./dialog.html");

module.exports=function(arg){
    $("body").append(dialogHtml);
    $(".cont>span").last().html(arg)

}
