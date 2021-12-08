<template>
  <ev-menu v-model="menu" :items="menuItems" @change="menuChange" />
</template>

<script>
import { ref } from 'vue';

export default {
  // ev-menu를 사용해서 side navigation bar + router
  name: 'TheNavbar',
  setup() {
    const menu = ref('menu');
    const menuItems = ref([
      {
        text: 'Dashoboard',
        value: 'Dashoboard',
        //iconClass: '',
      },
      {
        text: 'User Profile',
        value: 'User Profile',
        //iconClass: '',
      },
      {
        text: 'Table List',
        value: 'Table List',
        //iconClass: '',
      },
      {
        text: 'Typography',
        value: 'Typography',
        //iconClass: '',
      },
      {
        text: 'Icons',
        value: 'Icons',
        //iconClass: '',
      },
      {
        text: 'Maps',
        value: 'Maps',
        //iconClass: '',
      },
      {
        text: 'Notifications',
        value: 'Notifications',
        //iconClass: '',
      },
      {
        text: 'Upgrade To PRO',
        value: 'Upgrade To PRO',
        //iconClass: '',
      },
    ]);

    return {
      menu,
      menuItems,
    };
  },
};
</script>

<style></style>
