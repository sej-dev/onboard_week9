<template>
  <div class="card">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="main">
      <slot name="main" />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card {
  background-color: white;
  border: 1px solid black;

  .header {
  }
  .main {
  }
  .footer {
  }
}
</style>
