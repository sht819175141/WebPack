/**
 * Created by Administrator on 2017/4/12.
 */
/*require("../../css/commom/style.css");*/
require("../../css/global/reset.css");
require("../../css/page/style.css");
require("../../css/page/publicStyle.css");

$("#btn").on("click",function(){
    //按需加载：
    /*require.ensure(["../components/dialog/dialog.js"],function(require){
            var Reders= require("../components/dialog/dialog.js");
            new Reders(new Date().getTime())
    },"dia")*/
     require.ensure(["dialog/dialog.js"],function(require){
     var Reders= require("dialog/dialog.js");
     new Reders(new Date().getTime())
     },"dia")
});


/*$("#btn").on("click",function(){
    //按需加载：
     require.ensure(["../components/dialog/dialog.js"],()=>{
     var Reders= require("../components/dialog/dialog.js");
     new Reders(new Date().getTime())
     },"dia")
})*/
