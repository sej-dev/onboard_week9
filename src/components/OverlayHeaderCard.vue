<template>
  <div class="card">
    <div class="header">
      <slot name="header" />
    </div>

    <div class="main">
      <slot name="main" />
    </div>

    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
/**
 * TODO:
 * header 옵션
 * - position: left, right, center,
 * - size:
 * - shape: square, circle
 */
export default {
  name: 'OverlayHeaderCard',
  props: {
    style: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props) {
    return {
      colors: {
        header: {
          backgroundColor: props.style.header?.backgroundColor,
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.card {
  color: #999;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);

  padding-right: 15px;
  padding-left: 15px;

  .header {
    margin: -20px 15px 0;
    background-color: v-bind('colors.header.backgroundColor');
    color: #ffffff;
  }

  .main {
    padding: 15px 20px;
  }

  .footer {
    margin: 0 20px 10px;
    padding: 10px 0 10px 0;
    border-top: 1px solid #eee;

    font-size: 12px;
  }
}
</style>
