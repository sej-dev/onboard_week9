<template>
  <overlay-header-card class="overlay-header-card" v-for="statusCard in statusCards" :header="statusCard.header" :key="statusCard.key">
    <template #header>
      <ev-icon class="header-icon" :icon="statusCard.icon" size="large" />
    </template>

    <template #main>
      <component :is="statusCard.Main" />
    </template>

    <template #footer>
      <component :is="statusCard.Footer" />
    </template>
  </overlay-header-card>
</template>

<script>
import OverlayHeaderCard from '@/components/OverlayHeaderCard.vue';

import functionalComponent from '@/utils/functionalComponent.js';

const statusCards = [
  {
    key: 'Revenue',

    header: {
      backgroundColor: '#43a047',
      width: '30%',
      position: 'left',
    },

    icon: 'ev-icon-spark',
    Main: functionalComponent(
      <div class="main-content">
        <span class="name">Revenue</span>
        <br />
        <span class="status">$34,245</span>
      </div>
    ),
    Footer: functionalComponent(<div>Last 24 Hours</div>),
  },
  {
    key: 'UsedSpace',

    header: {
      backgroundColor: '#fc9309',
      width: '30%',
      position: 'left',
    },

    icon: 'ev-icon-spark',
    Main: functionalComponent(
      <div class="main-content">
        <span class="name">Revenue</span>
        <br />
        <span class="status">
          49/50<small>GB</small>
        </span>
      </div>
    ),
    Footer: functionalComponent(<div style={{ color: '#9c27b0' }}>Get More Space...</div>),
  },
  {
    key: 'Revenue',

    header: {
      backgroundColor: '#e9423e',
      width: '30%',
      position: 'left',
    },

    icon: 'ev-icon-spark',
    Main: functionalComponent(
      <div class="main-content">
        <span class="name">Fixed Issues</span>
        <br />
        <span class="status">75</span>
      </div>
    ),
    Footer: functionalComponent(<div>Tracked from Github</div>),
  },
  {
    key: 'Revenue',

    header: {
      backgroundColor: '#0db5ca',
      width: '30%',
      position: 'left',
    },

    icon: 'ev-icon-spark',
    Main: functionalComponent(
      <div class="main-content">
        <span class="name">Folowers</span>
        <br />
        <span class="status">+245</span>
      </div>
    ),
    Footer: functionalComponent(<div> Just Updated</div>),
  },
];

export default {
  name: 'StatusCardList',
  components: {
    OverlayHeaderCard,
  },
  setup() {
    return {
      statusCards,
    };
  },
};
</script>

<style lang="scss" scoped>
.overlay-header-card {
  width: 20%;

  .header {
    min-height: 70px;

    .header-icon {
      font-size: 36px !important;
      line-height: 56px;
      width: 56px;
      height: 56px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  :deep(.main-content) {
    text-align: right;

    .name {
      font-size: 14px;
    }

    .status {
      color: black;
      font-size: 1.5625rem;
      font-weight: 300;
    }
  }
}
</style>
