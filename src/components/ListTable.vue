<template>
  <ev-grid
    :columns="columns"
    :rows="tableData"
    :width="widthMV"
    :height="heightMV"
    :option="{
      adjust: adjustMV,
      rowHeight: rowHeightMV,
      columnWidth: columnWidthMV,
      showHeader: false,
      style: {
        border: 'none',
      },
    }"
  >
    <template>
      <ev-checkbox />
    </template>
    <template> </template>
  </ev-grid>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'DataTable',
  props: {
    tableData: {
      type: Array,
    },
    columns: {
      type: Array,
    },
  },
  setup(props) {
    // TODO: 변동
    const tableData1 = ref(props.tableData);
    const widthMV = ref('100%');
    const heightMV = ref('100%');
    const adjustMV = ref(true);
    const rowHeightMV = ref(45);
    const columnWidthMV = ref(80);
    const borderMV = ref('none');
    // TODO: 변동
    const columns1 = ref(props.columns);

    return {
      tableData1,
      columns1,
      widthMV,
      heightMV,
      adjustMV,
      rowHeightMV,
      columnWidthMV,
      borderMV,
    };
  },
};
</script>

<style></style>
