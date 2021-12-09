<template>
  <side-nav-layout>
    <template #header>User Profile</template>

    <template #main>
      <flex-conatiner> </flex-conatiner>
    </template>
  </side-nav-layout>
</template>

<script>
import FlexConatiner from '../../components/layout/container/FlexConatiner.vue';
import SideNavLayout from '../../components/layout/SideNavLayout.vue';

export default {
  components: {
    FlexConatiner,
    SideNavLayout,
  },
  name: 'UserProfilePage',
  setup() {
    return {};
  },
};
</script>

<style></style>
