<template>
  <side-nav-layout>
    <template #header> Dashboard </template>

    <template #main>
      <flex-conatiner>
        <timeline-charts-area />
      </flex-conatiner>

      <flex-conatiner>
        <status-cards-area />
      </flex-conatiner>

      <flex-conatiner>
        <list-tables-area />
      </flex-conatiner>
    </template>
  </side-nav-layout>
</template>

<script>
import FlexConatiner from '../../components/layout/container/FlexConatiner.vue';
import TimelineChartsArea from '../dashboard/TimelineChartsArea.vue';
import StatusCardsArea from '../dashboard/StatusCardsArea.vue';
import ListTablesArea from '../dashboard/ListTablesArea.vue';
import SideNavLayout from '../../components/layout/SideNavLayout.vue';

export default {
  components: {
    FlexConatiner,
    TimelineChartsArea,
    StatusCardsArea,
    ListTablesArea,
    SideNavLayout,
  },
  name: 'DashBoard',
  setup() {
    return {};
  },
};
</script>

<style></style>
