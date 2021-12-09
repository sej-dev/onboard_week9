<template>
  <the-side-navbar class="side-navbar" />

  <div class="panel-right">
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
import TheFooter from './TheFooter.vue';
import TheHeader from './TheHeader.vue';
import TheSideNavbar from './TheSideNavbar.vue';

export default {
  components: { TheFooter, TheHeader, TheSideNavbar },
  name: 'SideNavLayout',
};
</script>

<style scoped lang="scss">
.side-navbar {
  background-color: #3e464c;
  color: #ffffff;

  display: inline-block;
  width: 260px;
  height: 100%;
}
.panel-right {
  padding: 25px;
  background-color: #eeeeee;

  display: inline-block;
  width: calc(100% - 260px);

  .header {
    color: #495057;

    min-height: 56px;
    padding: 10px 15px;
  }

  .main {
  }
}
</style>
