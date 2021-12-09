<template>
  <ev-chart :data="chartData" :options="chartOptions" />
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'Chart',
  props: {
    labels: {
      type: Array,
    },
    data: {
      type: Array,
    },
    interval: {
      type: String,
    },
    formatter: {
      type: Function,
    },
  },
  setup(props) {
    const chartData = reactive({
      series: {
        series1: {
          showLegend: false,
          color: '#ffffff',
          fillColor: '#ffffff',
        },
      },
      // TODO: 변동
      labels: props.labels,
      // TODO: 변동
      data: {
        series1: props.data,
      },
    });
    const chartOptions = reactive({
      type: 'line',
      width: '100%',
      height: '100%',
      tooltip: {
        use: false,
      },
      indicator: {
        use: false,
      },
      axesX: [
        {
          type: 'time',
          showGrid: true,
          // TODO: 변동
          interval: props.interval,
          // TODO: 변동
          formatter: props.formatter,
          axisLineColor: '#ffffff',
          gridLineColor: '#ffffff',
          labelStyle: {
            color: '#ffffff',
          },
        },
      ],
      axesY: [
        {
          type: 'linear',
          showGrid: true,
          startToZero: true,
          axisLineColor: '#ffffff',
          gridLineColor: '#ffffff',
          labelStyle: {
            color: '#ffffff',
          },
        },
      ],
      labelStyle: {
        color: '#ffffff',
      },
    });

    return {
      chartData,
      chartOptions,
    };
  },
};
</script>

<style></style>
