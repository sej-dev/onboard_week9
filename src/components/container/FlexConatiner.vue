<template>
  <div class="flex-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FlexContainer',
  props: {
    direction: {
      type: String,
      default() {
        return 'row';
      },
      validator(value) {
        return ['row', 'column'].includes(value);
      },
    },
  },
  setup(props) {
    return {
      flexDirection: props.direction,
    };
  },
};
</script>

<style scoped lnag="scss">
.flex-container {
  display: flex;
  flex-direction: v-bind('flexDirection');
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>
