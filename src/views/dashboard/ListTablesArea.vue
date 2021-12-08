<template>
  <overlay-header-card>
    <template #header>
      <div>
        <h4>Employees Stats</h4>
        <p>New employees on 15th September, 2016</p>
      </div>
    </template>
    <template #main>
      <list-table v-bind="dataTableOptions" />
    </template>
  </overlay-header-card>

  <overlay-header-card>
    <template #header>
      Tasks:
      <button>BUGS</button>
      <button>WEBSITE</button>
      <button>SERVER</button>
    </template>
    <template #main>
      <list-table v-bind="listTableOptions" />
    </template>
  </overlay-header-card>
</template>

<script>
import ListTable from '../../components/ListTable.vue';
import OverlayHeaderCard from '../../components/OverlayHeaderCard.vue';

const dataTableOptions = {
  tableData: [
    [1, 'Dakota Rice', '$36,738', 'Niger,Oud-Turnhout'],
    [2, 'Minerva Hooper', '$23,738', 'Curaçao', 'Sinaai-Waas'],
    [3, 'Sage Rodriguez', '$56,142', 'Netherlands', 'Overland Park'],
    [4, 'Philip Chaney', '$38,735', 'Korea, South', 'Gloucester'],
  ],
  columns: [
    { caption: 'ID', field: 'id', type: 'number' },
    { caption: 'Name', field: 'name', type: 'string' },
    { caption: 'Salary', field: 'salary', type: 'string' },
    { caption: 'Country', field: 'country', type: 'string' },
    { caption: 'City', field: 'city', type: 'string' },
  ],
};

const listTableOptions = {
  tableData: [],
  columns: [
    { caption: '', field: 'checkbox', type: '' },
    { caption: '', field: 'sentence', type: 'string' },
    { caption: '', field: 'buttons', type: '' },
  ],
};

export default {
  components: { OverlayHeaderCard, ListTable },
  name: 'ListTablesArea',
  setup() {
    return {
      dataTableOptions,
      listTableOptions,
    };
  },
};
</script>

<style></style>
