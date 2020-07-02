
//虽然此文件被main.js载入,但是要用vue仍然需要单独载入
//被载入的时候,就会自己执行一次
//只有在打包的情况下一个JS才可以载入另外个JS文件(或者在node中)
import Vue from "vue";


//自定义全局组件
//要用这种方式注册组件,必须改vue的指向
//现在我们是runtime模式,指向的是不完整的vue.js
//所以现在需要我们自己改

//引进组件的html模板
import SvuIcon from "./SvgIcon.vue"
//将模板注册到Vue上
Vue.component('svg-icon', SvuIcon)


//解析svg文件
//config里面还需要进行配置
//1.读取指定目录的所有文件(目录,是否遍历子集目录,定义遍历文件规则)
const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext)
};
requireAll(req);