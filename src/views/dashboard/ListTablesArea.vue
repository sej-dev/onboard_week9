<template>
  <overlay-header-card :style="{ header: { backgroundColor: '#fd9d19' } }">
    <template #header>
      <div>
        <h4>Employees Stats</h4>
        <p>New employees on 15th September, 2016</p>
      </div>
    </template>
    <template #main>
      <data-table v-bind="dataTable" :useCheckbox="true" />
    </template>
  </overlay-header-card>

  <overlay-header-card :style="{ header: { backgroundColor: '#5cb360' } }">
    <template #header>
      Tasks:
      <ul @click="onTabClick">
        <li v-for="sectionName in tabs.sectionNames" :key="sectionName" :data-tab="sectionName" class="tab-button">
          <ev-button type="text"> {{ sectionName.toUpperCase() }} </ev-button>
        </li>
      </ul>
    </template>
    <template #main>
      <template v-for="section in tabs.sections" :key="section.name">
        <tab-table v-if="activeTabSection === section.name" v-bind="section" />
      </template>
    </template>
  </overlay-header-card>
</template>

<script>
import DataTable from '@/components/DataTable.vue';
import TabTable from '@/components/TabTable.vue';
import OverlayHeaderCard from '@/components/OverlayHeaderCard.vue';
import { ref } from '@vue/reactivity';

const dataTable = {
  datas: [
    [1, 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
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

const tabs = {
  sectionNames: ['bugs', 'website', 'server'],
  sections: [
    {
      name: 'bugs',
      datas: [
        ['Sign contract for "What are conference organizers afraid of?'],
        ['Lines From Great Russian Literature? Or E-mails From My Boss?'],
        ['Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit'],
      ],
      columns: [{ caption: '', field: 'sentence', type: 'string' }],
      useCheckbox: true,
    },
    {
      name: 'website',
      datas: [
        ['Sign contract for "What are conference organizers afraid of?'],
        ['Lines From Great Russian Literature? Or E-mails From My Boss?'],
        ['Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit'],
      ],
      columns: [{ caption: '', field: 'sentence', type: 'string' }],
      useCheckbox: true,
    },
    {
      name: 'server',
      datas: [
        ['Sign contract for "What are conference organizers afraid of?'],
        ['Lines From Great Russian Literature? Or E-mails From My Boss?'],
        ['Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit'],
      ],
      columns: [{ caption: '', field: 'sentence', type: 'string' }],
      useCheckbox: true,
    },
  ],
};

export default {
  components: { OverlayHeaderCard, DataTable, TabTable },
  name: 'ListTablesArea',
  setup() {
    const activeTabSection = ref(tabs.sectionNames[0]);
    const onTabClick = ({ target }) => {
      const { tab } = target.dataset;
      activeTabSection.value = tab;
    };

    return {
      dataTable,
      tabs,

      activeTabSection,
      onTabClick,
    };
  },
};
</script>

<style scoped lang="scss">
.active {
  background-color: #75bd79;
}
</style>
