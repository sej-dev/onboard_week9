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
    //console.dir(slots.default());
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
  flex-wrap: wrap;
  flex-direction: v-bind('flexDirection');

  gap: 20px;

  margin-bottom: 50px;

  & > :deep(*) {
    flex-grow: 1;
    flex-basis: 150px;
  }
}
</style>
