<template>
  <overlay-header-card class="overlay-header-card" v-for="statusCard in statusCards" :style="statusCard.style" :key="statusCard.key">
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
    style: {
      header: {
        backgroundColor: '#43a047',
        minHeight: '70px',
      },
    },
    icon: 'ev-icon-spark',
    Main: functionalComponent(
      <div>
        <span>Revenue</span>
        <br />
        <span>$34,245</span>
      </div>
    ),
    Footer: functionalComponent(<div>Last 24 Hours</div>),
  },
  {
    key: 'UsedSpace',
    style: {
      header: {
        backgroundColor: '#fc9309',
      },
    },
    icon: 'ev-icon-spark',
    Main: functionalComponent(
      <div>
        <span>Revenue</span>
        <br />
        <span>
          49/50<small>GB</small>
        </span>
      </div>
    ),
    Footer: functionalComponent(<div>Get More Space...</div>),
  },
  {
    key: 'Revenue',
    style: {
      header: {
        backgroundColor: '#e9423e',
      },
    },
    icon: 'ev-icon-spark',
    Main: functionalComponent(
      <div>
        <span>Fixed Issues</span>
        <br />
        <span>75</span>
      </div>
    ),
    Footer: functionalComponent(<div>Tracked from Github</div>),
  },
  {
    key: 'Revenue',
    style: {
      header: {
        backgroundColor: '#0db5ca',
      },
    },
    icon: 'ev-icon-spark',
    Main: functionalComponent(
      <div>
        <span>Folowers</span>
        <br />
        <span>+245</span>
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

<style lang="scss">
.overlay-header-card {
  .header {
    min-height: 70px;

    .header-icon {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      width: 100%;
    }
  }
}
</style>
