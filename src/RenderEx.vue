<template>
  <div>
    <component-option />
    <component-option-render />
  </div>
</template>

<script>
import { h } from 'vue';
const componentOptionRender = {
  data() {
    return { hello: 'Hello World Render' };
  },
  render() {
    /**
     * @param {String | Object | Function} tag(HTML 태그 이름, 컴포넌트...)
     * @param {Object} props
     * @param {String | Array | Object} children
     * 
     * @returns {VNode}
     */
    return h('h1', {}, this.hello);
  },
};

const componentOption = {
  data() {
    return { hello: 'Hello World' };
  },
  template: '<h1>{{ hello }}</h1>',
};

export default {
  name: 'RenderEx',
  components: {
    'component-option': componentOption,
    'component-option-render': componentOptionRender,
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
