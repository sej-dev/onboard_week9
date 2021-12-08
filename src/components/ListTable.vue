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
  </ev-grid>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'DataTable',
  setup() {
    const tableData = ref([
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
    ]);
    const widthMV = ref('100%');
    const heightMV = ref('100%');
    const adjustMV = ref(true);
    const rowHeightMV = ref(45);
    const columnWidthMV = ref(80);
    const borderMV = ref('none');
    const columns = ref([
      { caption: '', field: 'user-icon', type: 'string' },
      { caption: 'Name', field: 'userName', type: 'string', width: 80 },
      { caption: 'Role', field: 'role', type: 'string' },
      { caption: 'Phone', field: 'phone', type: 'string' },
      { caption: 'Email', field: 'email', type: 'string' },
      { caption: 'Last Login', field: 'lastLogin', type: 'string' },
    ]);

    return {
      columns,
      tableData,
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
