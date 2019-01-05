/*
* export default只能暴露一个
* */
export default {
  name: 'Tom',
  setName: function (name) {
    this.name = name
  }
}

/*
* 下面这样也是可以的
* */
// let name="12345"
// export default name