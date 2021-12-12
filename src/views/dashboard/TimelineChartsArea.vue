<template>
  <overlay-header-card
    v-for="card in cards"
    :key="card.key"
    class="overlay-header-card"
    :header="card.header"
  >
    <template #header>
      <timeline-chart v-bind="card.chartOptions" />
    </template>

    <template #main>
      <component :is="card.Main" />
    </template>

    <template #footer>
      <component :is="card.Footer" />
    </template>
  </overlay-header-card>
</template>

<script>
import OverlayHeaderCard from '@/components/OverlayHeaderCard.vue';
import TimelineChart from '@/components/TimelineChart.vue';

import dayjs from 'dayjs';
const time = dayjs().format('YYYY-MM-DD HH:mm:ss');

const cards = [
  {
    key: 'DailySales',
    header: {
      background: 'linear-gradient(60deg,#26c6da,#00acc1)',
    },
    chartOptions: {
      type: 'line',
      labels: [
        dayjs(time).subtract(6, 'day'),
        dayjs(time).subtract(5, 'day'),
        dayjs(time).subtract(4, 'day'),
        dayjs(time).subtract(3, 'day'),
        dayjs(time).subtract(2, 'day'),
        dayjs(time).subtract(1, 'day'),
        dayjs(time),
      ],
      data: [2, 4, 8, 1, 4, 7, 4],
      interval: 'day',
      formatter: (value) => {
        const day = dayjs(value).format('dd').charAt(0).toUpperCase();
        return day;
      },
    },
    Main: () => (
      <div class="main">
        <h4 class="title">Daily Sales</h4>
        <p class="description">
          <span style={{ color: '#4caf50' }}>55%</span> increase in today sales.
        </p>
      </div>
    ),
    Footer: () => (
      <div class="footer">
        <ev-icon icon="ev-icon-time-line" />
        updated 4 minutes ago
      </div>
    ),
  },
  {
    key: 'EmailSubscription',
    header: {
      background: 'linear-gradient(60deg,#ef5350,#e53935)',
    },
    chartOptions: {
      type: 'bar',
      labels: [
        dayjs(time).subtract(11, 'month'),
        dayjs(time).subtract(10, 'month'),
        dayjs(time).subtract(9, 'month'),
        dayjs(time).subtract(8, 'month'),
        dayjs(time).subtract(7, 'month'),
        dayjs(time).subtract(6, 'month'),
        dayjs(time).subtract(5, 'month'),
        dayjs(time).subtract(4, 'month'),
        dayjs(time).subtract(3, 'month'),
        dayjs(time).subtract(2, 'month'),
        dayjs(time).subtract(1, 'month'),
        dayjs(time),
      ],
      data: [2, 4, 8, 1, 4, 7, 4, 1, 5, 8, 22, 1],
      interval: 'month',
      formatter: (value) => {
        const day = dayjs(value).format('MMM');
        return day;
      },
    },
    Main: () => (
      <div class="main">
        <h4 class="title">Email Subscription</h4>
        <p class="description">Last Campaign Performance</p>
      </div>
    ),
    Footer: () => (
      <div class="footer">
        <ev-icon icon="ev-icon-time-line" />
        updated 10 days ago
      </div>
    ),
  },
  {
    key: 'CompletedTasks',
    header: {
      background: 'linear-gradient(60deg,#66bb6a,#43a047)',
    },
    chartOptions: {
      type: 'line',
      labels: [
        dayjs(time).subtract(21, 'hour'),
        dayjs(time).subtract(18, 'hour'),
        dayjs(time).subtract(15, 'hour'),
        dayjs(time).subtract(12, 'hour'),
        dayjs(time).subtract(9, 'hour'),
        dayjs(time).subtract(6, 'hour'),
        dayjs(time).subtract(3, 'hour'),
        dayjs(time),
      ],
      data: [2, 4, 8, 1, 4, 7, 4],
      interval: 'hour',
      formatter: (value) => {
        const day = dayjs(value).format('ha');
        return day;
      },
    },
    Main: () => (
      <div class="main">
        <h4 class="title">Completed Tasks</h4>
        <p class="description">Last Campaign Performance</p>
      </div>
    ),
    Footer: () => (
      <div class="footer">
        <ev-icon icon="ev-icon-time-line" />
        campaign sent 26 minutes ago
      </div>
    ),
  },
];

export default {
  name: 'TimelineChartList',
  components: { OverlayHeaderCard, TimelineChart },
  setup() {
    return {
      cards,
    };
  },
};
</script>

<style lang="scss" scoped>
.overlay-header-card {
  width: 30%;

  :deep(.main) {
    .title {
      color: black;
      margin-bottom: 10px;
    }

    .description {
      font-size: 14px;
    }
  }

  :deep(.footer) {
    i {
      margin-right: 3px;
    }
  }
}
</style>
