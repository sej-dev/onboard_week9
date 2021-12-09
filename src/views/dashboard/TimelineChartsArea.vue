<template>
  <overlay-header-card class="overlay-header-card" v-for="card in cards" :key="card.key" :style="card.style">
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
import OverlayHeaderCard from '../../components/OverlayHeaderCard.vue';
import TimelineChart from '../../components/TimelineChart.vue';

import dayjs from 'dayjs';
const time = dayjs().format('YYYY-MM-DD HH:mm:ss');

import functionalComponent from '@/utils/functionalComponent.js';

const cards = [
  {
    key: 'DailySales',
    style: {
      header: {
        backgroundColor: '#1dc0d4',
      },
    },
    chartOptions: {
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
    Main: functionalComponent(
      <div>
        <h4>Daily Sales</h4>
        <p>
          <span> 55%</span>
          increase in today sales.
        </p>
      </div>
    ),
    Footer: functionalComponent(<div>updated 4 minutes ago</div>),
  },
  {
    key: 'EmailSubscription',
    style: {
      header: {
        backgroundColor: '#ee524f',
      },
    },
    chartOptions: {
      labels: [
        dayjs(time).subtract(6, 'month'),
        dayjs(time).subtract(5, 'month'),
        dayjs(time).subtract(4, 'month'),
        dayjs(time).subtract(3, 'month'),
        dayjs(time).subtract(2, 'month'),
        dayjs(time).subtract(1, 'month'),
        dayjs(time),
      ],
      data: [2, 4, 8, 1, 4, 7, 4],
      interval: 'month',
      formatter: (value) => {
        const day = dayjs(value).format('MMM').substring(0, 2).toUpperCase();
        return day;
      },
    },
    Main: functionalComponent(
      <div>
        <h4>Email Subscription</h4>
        <p>Last Campaign Performance</p>
      </div>
    ),
    Footer: functionalComponent(<div>updated 10 days ago</div>),
  },
  {
    key: 'CompletedTasks',
    style: {
      header: {
        backgroundColor: '#63b967',
      },
    },
    chartOptions: {
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
    Main: functionalComponent(
      <div>
        <h4>Completed Tasks</h4>
        <p>Last Campaign Performance</p>
      </div>
    ),
    Footer: functionalComponent(<div>campaign sent 26 minutes ago</div>),
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

<style scoped lang="scss">
.overlay-header-card {
  width: 30%;
}
</style>
