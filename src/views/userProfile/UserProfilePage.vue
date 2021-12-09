<template>
  <side-nav-layout>
    <template #header>User Profile</template>

    <template #main>
      <flex-conatiner>
        <overlay-header-card>
          <template #header>
            <h4 class="title">Edit Profile</h4>
            <p class="category">Complete your profile</p>
          </template>

          <template #main>
            <ev-text-field v-model="disabled" type="text" disabled />
            <ev-text-field v-model="userName" type="text" />
            <ev-text-field v-model="emailAddress" type="text" />
            <ev-text-field v-model="firstName" type="text" />
            <ev-text-field v-model="lastName" type="text" />
            <ev-text-field v-model="address" type="text" />
            <ev-text-field v-model="city" type="text" />
            <ev-text-field v-model="country" type="text" />
            <ev-text-field v-model="postalCode" type="text" />
            <ev-text-field v-model="aboutMe" type="textarea" />
            <ev-button>UPDATE PROFILE</ev-button>
          </template>
        </overlay-header-card>

        <overlay-header-card>
          <template #header>
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg" />
          </template>

          <template #main>
            <div class="md-card-content">
              <h6 class="category text-gray">CEO / Co-Founder</h6>
              <h4 class="card-title">Alec Thompson</h4>
              <p class="card-description">
                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love
                Rick Owens’ bed design but the back is...
              </p>
              <ev-button shape="radius">UPDATE PROFILE</ev-button>
            </div>
          </template>
        </overlay-header-card>
      </flex-conatiner>
    </template>
  </side-nav-layout>
</template>

<script>
import FlexConatiner from '@/components/layout/container/FlexConatiner.vue';
import SideNavLayout from '@/components/layout/SideNavLayout.vue';
import OverlayHeaderCard from '@/components/OverlayHeaderCard.vue';

export default {
  components: {
    FlexConatiner,
    SideNavLayout,
    OverlayHeaderCard,
  },
  name: 'UserProfilePage',
  setup() {
    return {};
  },
};
</script>

<style></style>
