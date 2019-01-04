/**
 * 使用exports.xxx = value向外暴露一个对象 必须添加属性的方式暴露,不能直接用exports=function(){}；
 */
"use strict"
exports.foo = function () {
  console.log('module3 foo()')
}

exports.bar = function () {
  console.log('module3 bar()')
}


/*
这种方式是错误的
exports=function () {
  console.log("this is test exports")
}*/
