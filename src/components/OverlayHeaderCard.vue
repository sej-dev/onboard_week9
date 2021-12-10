<template>
  <div class="card">
    <div
      class="header"
      :style="headerStyle"
    >
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
import { computed } from 'vue';

/**
 * header 옵션
 * - position: left, right, center,
 * - width:
 */
export default {
  name: 'OverlayHeaderCard',
  props: {
    header: {
      type: Object,
      default() {
        return {};
      },
    },
    /*
    position: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].includes(value);
      },
      default() {
        return 'center';
      },
    },
    width: {
      type: String,
      default() {
        return '';
      },
    },
    */
  },

  setup(props) {
    const headerStyleProps = computed(() => ({
      position: 'center',
      width: '',
      backgroundColor: 'black',
      ...props.header,
    }));

    const headerStyle = computed(() => {
      const position = {
        left: { float: 'left' },
        right: { float: 'right' },
        center: { marginLeft: 'auto', marginRight: 'auto' },
      };

      return {
        ...position[headerStyleProps.value.position],
        width: headerStyleProps.value.width,
        backgroundColor: headerStyleProps.value.backgroundColor,
      };
    });

    return {
      headerStyle,
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
    margin-top: -20px;
    color: #ffffff;

    padding: 15px;
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
