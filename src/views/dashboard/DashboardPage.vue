<template>
  <left-side-nav-layout>
    <template #header>
      Dashboard
    </template>

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
  </left-side-nav-layout>
</template>

<script>
import LeftSideNavLayout from '@/components/layout/page/LeftSideNavLayout.vue';
import FlexConatiner from '@/components/container/FlexConatiner.vue';

import TimelineChartsArea from '@/views/dashboard/TimelineChartsArea.vue';
import StatusCardsArea from '@/views/dashboard/StatusCardsArea.vue';
import ListTablesArea from '@/views/dashboard/ListTablesArea.vue';

export default {
  name: 'DashBoardPage',
  components: {
    FlexConatiner,
    TimelineChartsArea,
    StatusCardsArea,
    ListTablesArea,
    LeftSideNavLayout,
  },
};
</script>

<style></style>
