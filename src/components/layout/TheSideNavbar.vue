<template>
  <p>VUE MD</p>
  <ev-menu v-model="menu" :items="menuItems" @change="onMenuChange" />
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  // ev-menu를 사용해서 side navigation bar + router
  name: 'TheNavbar',
  setup() {
    const menu = ref('menu');
    const menuItems = ref([
      {
        text: 'Dashoboard',
        value: 'Dashoboard',
        routeName: 'Dashboard',
        //iconClass: '',
      },
      {
        text: 'User Profile',
        value: 'UserProfile',
        routeName: 'UserProfile',
        //iconClass: '',
      },
      {
        text: 'Table List',
        value: 'TableList',
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
        value: 'UpgradeToPRO',
        //iconClass: '',
      },
    ]);

    const router = useRouter();

    const onMenuChange = (curMenu, prevMenu) => {
      if (curMenu.value !== prevMenu.value && curMenu.routeName)
        router.push({
          name: curMenu.routeName,
        });
    };

    return {
      menu,
      menuItems,

      onMenuChange,
    };
  },
};
</script>

<style></style>
