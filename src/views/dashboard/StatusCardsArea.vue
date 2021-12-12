<template>
  <overlay-header-card
    v-for="statusCard in statusCards"
    :key="statusCard.key"
    class="overlay-header-card"
    :header="statusCard.header"
  >
    <template #header>
      <ev-icon
        class="header-icon"
        :icon="statusCard.icon"
        size="large"
      />
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

const statusCards = [
  {
    key: 'Revenue',

    header: {
      background: 'linear-gradient(60deg,#66bb6a,#43a047)',
      position: 'left',
    },

    icon: 'ev-icon-spark',
    Main: () => (
      <div class="main">
        <span class="name">Revenue</span>
        <br />
        <span class="status">$34,245</span>
      </div>
    ),
    Footer: () => (
      <div class="footer">
        <ev-icon icon="ev-icon-time-line" />
        Last 24 Hours
      </div>
    ),
  },
  {
    key: 'UsedSpace',

    header: {
      background: 'linear-gradient(60deg,#ffa726,#fb8c00)',
      position: 'left',
    },

    icon: 'ev-icon-spark',
    Main: () => (
      <div class="main">
        <span class="name">Revenue</span>
        <br />
        <span class="status">
          49/50<small style={{ fontSize: '65%' }}>GB</small>
        </span>
      </div>
    ),
    Footer: () => (
      <div style={{ color: '#9c27b0' }} class="footer">
        <ev-icon icon="ev-icon-time-line" />
        Get More Space...
      </div>
    ),
  },
  {
    key: 'FixedIssues',

    header: {
      background: 'linear-gradient(60deg,#ef5350,#e53935)',
      position: 'left',
    },

    icon: 'ev-icon-spark',
    Main: () => (
      <div class="main">
        <span class="name">Fixed Issues</span>
        <br />
        <span class="status">75</span>
      </div>
    ),
    Footer: () => (
      <div class="footer">
        <ev-icon icon="ev-icon-time-line" />
        Tracked from Github
      </div>
    ),
  },
  {
    key: 'Folowers',

    header: {
      background: 'linear-gradient(60deg,#26c6da,#00acc1)',
      position: 'left',
    },

    icon: 'ev-icon-spark',
    Main: () => (
      <div class="main">
        <span class="name">Folowers</span>
        <br />
        <span class="status">+245</span>
      </div>
    ),
    Footer: () => (
      <div class="footer">
        <ev-icon icon="ev-icon-time-line" />
        Just Updated
      </div>
    ),
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

  :deep(.main) {
    text-align: right;

    .name {
      font-size: 14px;
    }

    .status {
      color: black;
      line-height: 1.5em;
      font-size: 1.5625rem;
      font-weight: 300;
    }
  }

  :deep(.footer) {
    i {
      margin-right: 3px;
    }
  }
}
</style>
