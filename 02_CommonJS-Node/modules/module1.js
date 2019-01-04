/**
 * 使用module.exports = value向外暴露一个对象，也可以暴露常量，或者暴露一个函数
 */
"use strict"
module.exports = {
  foo() {
    console.log('moudle1 foo()')
  }
}