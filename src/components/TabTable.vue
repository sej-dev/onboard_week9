<template>
  <ev-grid :columns="column" :rows="tableData" :option="options"> </ev-grid>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TabTable',
  props: {
    datas: {
      type: Array,
    },
    columns: {
      type: Array,
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

<style></style>
