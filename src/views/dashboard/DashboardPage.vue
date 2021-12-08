<template>
  <the-header>Dashboard</the-header>

  <the-side-navbar />

  <div class="container">
    <flex-conatiner>
      <timeline-chart-list />
    </flex-conatiner>

    <flex-conatiner>
      <status-card-list />
    </flex-conatiner>

    <flex-conatiner>
      <overlay-header-card>
        <template #main>
          <list-table />
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
          <list-table />
        </template>
      </overlay-header-card>
    </flex-conatiner>
  </div>
</template>

<script>
import TheHeader from '../../components/layout/TheHeader.vue';
import TheSideNavbar from '../../components/layout/TheSideNavbar.vue';
import OverlayHeaderCard from '../../components/OverlayHeaderCard.vue';

import FlexConatiner from '../../components/layout/container/FlexConatiner.vue';
import TimelineChartList from '../dashboard/TimelineChartList.vue';
import StatusCardList from '../dashboard/StatusCardList.vue';
import ListTable from '../../components/ListTable.vue';

export default {
  components: {
    TheHeader,
    TheSideNavbar,
    OverlayHeaderCard,
    FlexConatiner,
    TimelineChartList,
    StatusCardList,
    ListTable,
  },
  name: 'DashBoard',
  setup() {
    return {};
  },
};
</script>

<style></style>
