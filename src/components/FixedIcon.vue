<template>
  <div class="fixed-icon">
    <ev-icon 
      icon="ev-icon-gear" 
      size="large"
    />
  </div>
</template>

<script>
export default {
    name: 'FixedIcon'
}
</script>

<style scoped lang="scss">
  .fixed-icon{
    position: fixed;
    right: 0;
    width: 64px;
    padding: 10px;
    background: rgba(0,0,0,.3);
    color: #fff;
    z-index: 1024;
    border-radius: 8px 0 0 8px;
    text-align: center;
    top: 120px;
  }
</style>