<template>
  <div class="flex-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlexContainer',
};
</script>

<style scoped lnag="scss">
.flex-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>
