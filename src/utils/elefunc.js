// 要用element为我们封装的方法
//那个参数也可以在外面传
import { MessageBox } from 'element-ui'
//把element自带的确认框方法封装一下
export function confirm(params) {
  MessageBox.confirm(params.content, params.tip || "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: params.type || "warning",
    center: true
  })
    .then(() => {
      //函数在这边调用,东西还是在那边执行
      //函数是点击确定才会执行的
      params.fn && params.fn(params.data||'')
    })
    .catch(() => {
      // root.$message({
      //   type: "info",
      //   message: "已取消删除"
      // });
      //当然点击取消也可以传一个方法
      //短路运算,有才会执行
      params.catchFn && params.catchFn()
    });
}