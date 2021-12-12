<template>
  <ev-grid
    :columns="column"
    :rows="tableData"
    :option="options"
    :row-height="40"
  >
    <template #buttons>
      <ev-icon
        class="edit"
        icon="ev-icon-registration"
      />
      <ev-icon
        class="remove"
        icon="ev-icon-s-close"
      />
    </template>
  </ev-grid>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TabTable',
  props: {
    datas: {
      type: Array,
      default() {
        return [];
      },
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    useCheckbox: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  setup(props) {
    // TODO: 변동
    const tableData = ref(props.datas);
    // TODO: 변동
    const column = ref(props.columns);

    const options = ref({
      adjust: true,
      showHeader: false,
      style: {
        border: 'none',
      },
      useCheckbox: {
        use: props.useCheckbox,
      },
    });

    return {
      tableData,
      column,
      options,
    };
  },
};
</script>

<style scoped lang="scss">
  .edit{
    color: purple;
  }
  .remove{
    color: red;
  }
  
</style>
