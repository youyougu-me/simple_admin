<template>
  <svg :class="svgClass" aria-hidden="true">
    <!-- 这个类跟阿里里面内置的保持一致 -->
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",
  data() {
    return {};
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      } else {
        return `svg-icon`;
      }
    }
  },
  props: {
    iconClass: {
      type: String, //定义值的接收类型
      default: ""
    },
    className: {
      type: String, //定义值的接收类型
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
// .svg-icon每个图标的自定义基类
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: #fff;
  //特有的类
  &.menu {
    font-size: 100px !important;
  }
}
</style>