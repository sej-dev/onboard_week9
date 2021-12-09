<template>
  <ev-chart :data="chartData" :options="chartOptions" />
</template>

<script>
import { computed, reactive } from 'vue';

const THEME_COLOR = '#ffffff';

export default {
  name: 'Chart',
  props: {
    type: {
      required: true,
      type: String,
      validator(value) {
        return ['line', 'bar'].includes(value);
      },
    },
    labels: {
      type: Array,
      default() {
        return [];
      },
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    interval: {
      type: String,
      required: true,
    },
    formatter: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const chartData = reactive({
      series: {
        series1: {
          showLegend: false,
          color: THEME_COLOR,
          fillColor: THEME_COLOR,
        },
      },
      // TODO: 변동
      labels: props.labels,
      // TODO: 변동
      data: {
        series1: props.data,
      },
    });

    const axesXType = computed(() => {
      switch (props.type) {
        case 'line':
          return 'time';
        case 'bar':
          return 'step';
        default:
          return '';
      }
    });

    const chartOptions = reactive({
      type: props.type,

      tooltip: {
        use: false,
      },
      indicator: {
        use: false,
      },
      axesX: [
        {
          type: axesXType,
          showGrid: true,
          // TODO: 변동
          interval: props.interval,
          // TODO: 변동
          formatter: props.formatter,
          axisLineColor: THEME_COLOR,
          gridLineColor: THEME_COLOR,
          labelStyle: {
            color: THEME_COLOR,
          },
        },
      ],
      axesY: [
        {
          type: 'linear',
          showGrid: true,
          startToZero: true,
          axisLineColor: THEME_COLOR,
          gridLineColor: THEME_COLOR,
          labelStyle: {
            color: THEME_COLOR,
          },
        },
      ],
      labelStyle: {
        color: THEME_COLOR,
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
