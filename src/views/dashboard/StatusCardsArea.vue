<template>
  <overlay-header-card v-for="statusCard in statusCards" :key="statusCard.key">
    <template #header> {{ statusCard.icon }} </template>
    <template #main>
      <component :is="statusCard.Main" />
    </template>
    <template #footer>
      <component :is="statusCard.Footer" />
    </template>
  </overlay-header-card>
</template>

<script>
import OverlayHeaderCard from '../../components/OverlayHeaderCard.vue';

import functionalComponent from '@/utils/functionalComponent.js';

const statusCards = [
  {
    key: 'Revenue',
    icon: '',
    Main: functionalComponent(
      <div>
        <span>Revenue</span>
        <hr />
        <span>$34,245</span>
      </div>
    ),
    Footer: functionalComponent(<div>Last 24 Hours</div>),
  },
  {
    key: 'UsedSpace',
    icon: '',
    Main: functionalComponent(
      <div>
        <span>Revenue</span>
        <hr />
        <span>
          49/50<small>GB</small>
        </span>
      </div>
    ),
    Footer: functionalComponent(<div>Get More Space...</div>),
  },
  {
    key: 'Revenue',
    icon: '',
    Main: functionalComponent(
      <div>
        <span>Fixed Issues</span>
        <hr />
        <span>75</span>
      </div>
    ),
    Footer: functionalComponent(<div>Tracked from Github</div>),
  },
  {
    key: 'Revenue',
    icon: '',
    Main: functionalComponent(
      <div>
        <span>Folowers</span>
        <hr />
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

<style></style>
