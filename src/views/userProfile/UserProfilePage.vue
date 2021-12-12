<template>
  <left-side-nav-layout>
    <template #header>
      User Profile
    </template>

    <template #main>
      <flex-conatiner>
        <overlay-header-card
          class="overlay-header-card edit"
          :header="{ background: 'linear-gradient(60deg,#7fc582,#43a047)' }"
        >
          <template #header>
            <h4 class="title">
              Edit Profile
            </h4>
            <p class="category">
              Complete your profile
            </p>
          </template>

          <template #main>
            <flex-conatiner>
              <ev-text-field
                v-model="inputs.disabled"
                type="text"
                disabled
              />
              <ev-text-field
                v-model="inputs.userName"
                type="text"
              />
              <ev-text-field
                v-model="inputs.emailAddress"
                type="text"
              />
            </flex-conatiner>

            <flex-conatiner>
              <ev-text-field
                v-model="inputs.firstName"
                type="text"
              />
              <ev-text-field
                v-model="inputs.lastName"
                type="text"
              />
            </flex-conatiner>

            <flex-conatiner>
              <ev-text-field
                v-model="inputs.address"
                type="text"
              />
            </flex-conatiner>

            <flex-conatiner>
              <ev-text-field
                v-model="inputs.city"
                type="text"
              />
              <ev-text-field
                v-model="inputs.country"
                type="text"
              />
              <ev-number-field
                v-model="inputs.postalCode"
                type="text"
              />
            </flex-conatiner>
            <ev-text-field
              v-model="inputs.aboutMe"
              type="textarea"
            />
            <ev-button>UPDATE PROFILE</ev-button>
          </template>
        </overlay-header-card>

        <overlay-header-card
          class="overlay-header-card profile"
          :header="businessCard.header"
        >
          <template #header>
            <img
              class="header-img"
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </template>

          <template #main>
            <div class="md-card-content">
              <h6 class="category text-gray">
                CEO / Co-Founder
              </h6>
              <h4 class="card-title">
                Alec Thompson
              </h4>
              <p class="card-description">
                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love
                Rick Owens’ bed design but the back is...
              </p>
              <ev-button shape="radius">
                UPDATE PROFILE
              </ev-button>
            </div>
          </template>
        </overlay-header-card>
      </flex-conatiner>
    </template>
  </left-side-nav-layout>
</template>

<script>
import FlexConatiner from '@/components/container/FlexConatiner.vue';
import LeftSideNavLayout from '@/components/layout/page/LeftSideNavLayout.vue';
import OverlayHeaderCard from '@/components/OverlayHeaderCard.vue';
import { reactive } from 'vue';

const businessCard = {
  header: {
    backgroundColor: 'transparent',
    width: '130px',
  },
};

export default {
  name: 'UserProfilePage',
  components: {
    FlexConatiner,
    LeftSideNavLayout,
    OverlayHeaderCard,
  },
  setup() {
    const inputs = reactive({
      disabled: 'Company(disabled)',
      userName: 'User Name',
      emailAddress: 'Email Address',
      firstName: 'First Name',
      lastName: 'Last Name',
      address: 'Address',
      city: 'City',
      country: 'Country',
      postalCode: 'Postal Code',
      aboutMe: "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
    });
    
    return {
      businessCard,

      inputs
    };
  },
};
</script>

<style scoped lang="scss">
.overlay-header-card {
  
  &.edit{
    width: 70%;
  }

  &.profile{
    
    .header-img {
      max-width: 130px;
      max-height: 130px;
      border-radius: 50%;
      margin-top: -20px;
    }
  }  
}

</style>

<style lang="scss">
.ev-input, textarea{
  border: none !important;
  border-radius: 0 !important;
  border-bottom: 1px solid #b2b2b2 !important;
  padding: 5px;
  color: rgba(0,0,0,.42) !important;
}
</style>
