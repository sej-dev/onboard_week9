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

    <button
      v-for="navigation in navigations"
      :key="navigation.text"
      :class="['nav-btn', activeNav === navigation.to ? 'active' : '']"
      :data-to="navigation.to"
      @click="onNavClick"
    >
      <!-- <ev-icon 
        :icon="navigation.icon"
        size="large"
      /> -->
      {{ navigation.text }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const navigations = [
  {
    text: 'Dashboard',
    to: 'Dashboard',
    icon: 'ev-icon-arrow-right2',
  },
  {
    text: 'User Profile',
    to: 'UserProfile',
    icon: 'ev-icon-arrow-right2',
  },
  {
    text: 'Table List',
    to: '#',
    icon: 'ev-icon-arrow-right2',
  },
  {
    text: 'Typography',
    to: '#',
    icon: 'ev-icon-arrow-right2',
  },
  {
    text: 'Icons',
    to: '#',
    icon: 'ev-icon-arrow-right2',
  },
  {
    text: 'Maps',
    to: '#',
    icon: 'ev-icon-arrow-right2',
  },
  {
    text: 'Notifications',
    to: '#',
    icon: 'ev-icon-arrow-right2',
  },
  {
    text: 'Upgrade To PRO',
    to: '#',
    icon: 'ev-icon-arrow-right2',
  },
];

export default {
  // ev-menu를 사용해서 side navigation bar + router
  name: 'TheNavbar',
  setup() {
    const router = useRouter();
    const activeNav = ref(navigations[0].text);

    const onNavClick = ({ target }) => {
      const { to } = target.dataset;
      if(to === '#') return;
      activeNav.value = to;
      router.push({ name: to });
    };

    return {
      navigations,
      activeNav,
      onNavClick
    };
  },
};
</script>

<style scoped lang="scss">
.side-nav {
  padding: 20px;
  background-color: #3e464c;

  .nav-btn {

    width: 100%;
    height: 50px;
    text-align: left;
    padding: 10px;
    margin: 10px 15px 0px 10px;
    color: #ffffff;
    background-color: #3e464c;

    &.active {
      background-color: #4caf50;
    }
  }

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
        vertical-align: -webkit-baseline-middle;
        height: auto;
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
