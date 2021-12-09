<template>
  <ev-grid
    :columns="column"
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
      useCheckbox: {
        use: useCheckboxMV,
      },
    }"
  >
  </ev-grid>
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
    const widthMV = ref('100%');
    const heightMV = ref('100%');
    const adjustMV = ref(true);
    const rowHeightMV = ref(45);
    const columnWidthMV = ref(80);
    const borderMV = ref('none');
    // TODO: 변동
    const column = ref(props.columns);
    // TODO: 변동
    const useCheckboxMV = ref(props.useCheckbox);

    return {
      tableData,
      column,
      widthMV,
      heightMV,
      adjustMV,
      rowHeightMV,
      columnWidthMV,
      borderMV,
      useCheckboxMV,
    };
  },
};
</script>

<style></style>
