<template>
  <the-side-navbar class="side-navbar" />

  <div class="panel-right">
    <fixed-icon />

    <the-header class="header">
      <slot name="header" />
    </the-header>

    <div class="main">
      <slot name="main" />
    </div>

    <the-footer class="footer" />
  </div>
</template>

<script>
import TheFooter from '@/components/layout/TheFooter.vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheSideNavbar from '@/components/layout/TheSideNavbar.vue';
import FixedIcon from '@/components/FixedIcon.vue';

export default {
  name: 'SideNavLayout',
  components: { TheFooter, TheHeader, TheSideNavbar, FixedIcon },
};
</script>

<style scoped lang="scss">
.side-navbar {
  background-color: #3e464c;
  color: #ffffff;

  display: inline-block;
  width: 260px;
}
.panel-right {
  padding: 25px;
  background-color: #eeeeee;

  display: inline-block;
  width: calc(100% - 260px);

  .header {
    color: #495057;

    min-height: 56px;
  }
}
</style>
