<template>
  <overlay-header-card>
    <template #header> icon </template>
    <template #main>
      <div>
        <span>Revenue</span>
        <hr />
        <span>$34,245</span>
      </div>
    </template>
    <template #footer>
      <div>Last 24 Hours</div>
    </template>
  </overlay-header-card>
</template>

<script>
import OverlayHeaderCard from '../../components/OverlayHeaderCard.vue';

export default {
  name: 'StatusCardList',
  components: {
    OverlayHeaderCard,
  },
};
</script>

<style></style>
