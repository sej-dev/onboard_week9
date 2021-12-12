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

<style lang="scss" scoped>
.flex-container {
  display: flex;

  /* flex-flow: v-bind('flexDirection') wrap; */
  flex-wrap: nowrap;
  flex-direction: v-bind('flexDirection');
  
  gap: 20px;

  & > :deep(*) {
    flex-grow: 1;
  }
}
</style>
