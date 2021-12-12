<template>
  <div class="header">
    <div class="left">
      <slot />
    </div>
      
    <div class="right">
      <ev-text-field
        v-model="search"
        class="search"
        placeholder="Search"
        type="search"
        @search="onSearch"
      />
      <div class="icons">
        <router-link to="/dashboard">
          <ev-icon 
            icon="ev-icon-shard"
            size="large"
            @click="onDashboardIconClick"
          />
        </router-link>
        <ev-icon 
          icon="ev-icon-bell2"
          size="large"
        />
        <ev-icon 
          icon="ev-icon-user2"
          size="large"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TheHeader',
  components: {

  },
  setup(){
    const search = ref('');

    return {
      search,
    }
  }
};
</script>

<style scoped lang="scss">
  .header{
    color: #495057;
    font-size: 18px;
    font-weight: 300;

    margin-bottom: 50px;

    display: flex;
    justify-content: space-between;

    .left{
      
    }
    .right{
      width: 400px;
      display: flex;

      .search{
        width: 190px;
      }
      .icons{
        width: 190px;
        margin-left: 50px;
        display: flex;
        justify-content: space-evenly;
        
      }
    }
  }
</style>
