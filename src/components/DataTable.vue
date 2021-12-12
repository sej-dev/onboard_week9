<template>
  <ev-grid
    :columns="column"
    :rows="tableData"
    :option="options"
    column-width="50"
  />
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'DataTable',
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
  },
  setup(props) {
    // TODO: 변동
    const tableData = ref(props.datas);
    // TODO: 변동
    const column = ref(props.columns);

    const options = {
      adjust: true,
      rowHeight: 50,
      showHeader: true,
      style: {
        border: 'none',
      },
    };

    return {
      tableData,
      column,
      options,
    };
  },
};
</script>

<style lang="scss">
.ev-grid{
  .table-body{
    tr > td {
      min-width: none !important;
    }
  }
}
</style>
