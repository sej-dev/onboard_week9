<template>
  <the-header>Dashboard</the-header>

  <the-side-navbar />

  <div class="container">
    <flex-conatiner>
      <timeline-charts-area />
    </flex-conatiner>

    <flex-conatiner>
      <status-cards-area />
    </flex-conatiner>

    <flex-conatiner>
      <list-tables-area />
    </flex-conatiner>
  </div>
</template>

<script>
import TheHeader from '../../components/layout/TheHeader.vue';
import TheSideNavbar from '../../components/layout/TheSideNavbar.vue';

import FlexConatiner from '../../components/layout/container/FlexConatiner.vue';
import TimelineChartsArea from '../dashboard/TimelineChartsArea.vue';
import StatusCardsArea from '../dashboard/StatusCardsArea.vue';
import ListTablesArea from '../dashboard/ListTablesArea.vue';

export default {
  components: {
    TheHeader,
    TheSideNavbar,
    FlexConatiner,
    TimelineChartsArea,
    StatusCardsArea,
    ListTablesArea,
  },
  name: 'DashBoard',
  setup() {
    return {};
  },
};
</script>

<style></style>
