<template>
  <overlay-header-card
    class="overlay-header-card"
    :header="{ background: 'linear-gradient(60deg,#ffa726,#fb8c00)' }"
  >
    <template #header>
      <div>
        <h4>Employees Stats</h4>
        <p>New employees on 15th September, 2016</p>
      </div>
    </template>
    <template #main>
      <data-table
        v-bind="dataTable"
        :use-checkbox="true"
      />
    </template>
  </overlay-header-card>

  <overlay-header-card
    class="overlay-header-card"
    :header="{ background: 'linear-gradient(60deg,#66bb6a,#43a047)' }"
  >
    <template #header>
      <ul
        class="tab-names"
        @click="onTabClick"
      >
        <li class="tab-button">
          <ev-button type="text">
            Tasks:
          </ev-button>
        </li>
        <li
          v-for="sectionName in tabs.sectionNames"
          :key="sectionName"
          class="tab-button"
        >
          <ev-button
            :class="[activeTabSection === sectionName ? 'active' : '']"
            :data-tab="sectionName"
            type="text"
          >
            <ev-icon icon="ev-icon-s-double-right" />
            {{ sectionName.toUpperCase() }}
          </ev-button>
        </li>
      </ul>
    </template>
    <template #main>
      <template
        v-for="section in tabs.sections"
        :key="section.name"
      >
        <keep-alive>
          <tab-table
            v-if="activeTabSection === section.name"
            class="tab-table"
            v-bind="section"
          />
        </keep-alive>
      </template>
    </template>
  </overlay-header-card>
</template>

<script>
import DataTable from '@/components/DataTable.vue';
import TabTable from '@/components/TabTable.vue';
import OverlayHeaderCard from '@/components/OverlayHeaderCard.vue';

import { ref } from 'vue';

const dataTable = {
  datas: [
    [1, 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
    [2, 'Minerva Hooper', '$23,738', 'Curaçao', 'Sinaai-Waas'],
    [3, 'Sage Rodriguez', '$56,142', 'Netherlands', 'Overland Park'],
    [4, 'Philip Chaney', '$38,735', 'Korea, South', 'Gloucester'],
  ],
  columns: [
    { caption: 'ID', field: 'id', type: 'number', width: '10%' },
    { caption: 'Name', field: 'name', type: 'string', width: '20%' },
    { caption: 'Salary', field: 'salary', type: 'string', width: '20%' },
    { caption: 'Country', field: 'country', type: 'string', width: '20%' },
    { caption: 'City', field: 'city', type: 'string', width: '25%' },
  ],
};

const tabs = {
  sectionNames: ['bugs', 'website', 'server'],
  sections: [
    {
      name: 'bugs',
      datas: [
        ['bugs'],
        ['Sign contract for "What are conference organizers afraid of?'],
        ['Lines From Great Russian Literature? Or E-mails From My Boss?'],
        ['Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit'],
      ],
      columns: [
        { caption: 'todo', field: 'todo', type: 'string', width: '70%' }, 
        { caption: 'buttons', field: 'buttons', type: 'boolean', width: '30%' }
      ],
      useCheckbox: true,
    },
    {
      name: 'website',
      datas: [
        ['website'],
        ['Sign contract for "What are conference organizers afraid of?'],
        ['Lines From Great Russian Literature? Or E-mails From My Boss?'],
        ['Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit'],
      ],
      columns: [
        { caption: 'todo', field: 'todo', type: 'string', width: '70%' }, 
        { caption: 'buttons', field: 'buttons', type: 'boolean', width: '30%' }
      ],
      useCheckbox: true,
    },
    {
      name: 'server',
      datas: [
        ['server'],
        ['Sign contract for "What are conference organizers afraid of?'],
        ['Lines From Great Russian Literature? Or E-mails From My Boss?'],
        ['Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit'],
      ],
      columns: [
        { caption: 'todo', field: 'todo', type: 'string', width: '70%' }, 
        { caption: 'buttons', field: 'buttons', type: 'boolean', width: '30%' }
      ],
      useCheckbox: true,
    },
  ],
};

export default {
  name: 'ListTablesArea',
  components: { OverlayHeaderCard, DataTable, TabTable },
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

.overlay-header-card {
  width: 40%;
  
  h4 {
    font-weight: 300;
    font-size: 1.125rem;
    line-height: 1.5em;

    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: hsla(0, 0%, 100%, 0.62);
  }
}

.tab-names {
  display: flex;

  button.active{
    background-color: #7fc582;
  }
}

.ev-button {
  color: #ffffff !important;
}
</style>

<style lang="scss">
  .ev-grid {
    .table-header li {
      min-width: auto !important;

      span{
        font-weight: 200;
        color: #ff9800;
      }
    }
    .table-body tbody {

      td {
        min-width: auto !important;
        font-weight: 100;
        font-size: 14px;
      }
      .cell {
        display: inline-flex !important;
      }
    }
  }
  .tab-table .table-body {
    overflow: hidden;

    tbody td:nth-child(2) {
      width: 70%;
      height: 50px !important;
      line-height: unset !important;
      overflow-wrap: break-word !important;
      
      div {
        white-space: initial;
      }
    }
  }
</style>
