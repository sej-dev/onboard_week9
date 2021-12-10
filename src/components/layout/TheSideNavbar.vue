<template>
  <div class="side-nav">
    <div class="logo-coantiner">
      <div class="logo-box">
        <img
          src="https://demos.creative-tim.com/vue-material-dashboard/img/vue-logo.c2a605fb.png"
          alt=""
        >
      </div>
      <span class="logo-name">VUE MD</span>
    </div>
    <ev-menu
      v-model="menu"
      :items="menuItems"
      @change="onMenuChange"
    />
  </div>
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
        iconClass: 'ev-icon-spark',
      },
      {
        text: 'User Profile',
        value: 'UserProfile',
        routeName: 'UserProfile',
        iconClass: 'ev-icon-spark',
      },
      {
        text: 'Table List',
        value: 'TableList',
        iconClass: 'ev-icon-spark',
      },
      {
        text: 'Typography',
        value: 'Typography',
        iconClass: 'ev-icon-spark',
      },
      {
        text: 'Icons',
        value: 'Icons',
        iconClass: 'ev-icon-spark',
      },
      {
        text: 'Maps',
        value: 'Maps',
        iconClass: 'ev-icon-spark',
      },
      {
        text: 'Notifications',
        value: 'Notifications',
        iconClass: 'ev-icon-spark',
      },
      {
        text: 'Upgrade To PRO',
        value: 'UpgradeToPRO',
        iconClass: 'ev-icon-spark',
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

<style scoped lang="scss">
.side-nav {
  padding: 20px;

  .logo-coantiner {
    display: flex;

    font-size: 18px;
    font-weight: 400;

    margin-bottom: 20px;

    .logo-box {
      width: 40px;
      height: 40px;
      background-color: #ffffff;

      border-radius: 50%;
      text-align: center;

      img {
        width: 55%;
        vertical-align: baseline;
      }
    }

    .logo-name {
      line-height: 40px;
      margin-left: 10px;
    }
  }

  .ev-menu-item {
    .ev-menu-title span {
      margin-left: 10px;
    }
  }
}
</style>
