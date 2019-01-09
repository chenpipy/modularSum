//define如果通过路径引用js文件，那么其相对路径并不是当前的js文件，而是引用该文件的html所在的路径
define(['./js/modules/config.js'],function (config) {
  //配置
  require.config(config)
  console.log()

  //引入模块使用
  require(['alerter', 'angular','index','text!@template/section1.html'], function (alerter, angular,index,section1) {
    alerter.showMsg()
    // console.log(angular);
    document.getElementById("main").innerHTML=section1
  })
})
