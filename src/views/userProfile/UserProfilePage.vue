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
            <label class="input-me">About Me</label>
            <ev-text-field
              v-model="inputs.aboutMe"
              type="textarea"
            />
            <ev-button class="btn-update">
              UPDATE PROFILE
            </ev-button>
          </template>
        </overlay-header-card>

        <overlay-header-card
          class="overlay-header-card profile"
        >
          <template #header>
            <img
              class="header-img"
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </template>

          <template #main>
            <h6 class="title">
              CEO / Co-Founder
            </h6>
            <h4 class="name">
              Alec Thompson
            </h4>
            <p class="description">
              Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
            <ev-button
              shape="radius"
              class="btn-follow"
            >
              FOLLOW
            </ev-button>
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
      inputs
    };
  },
};
</script>

<style scoped lang="scss">
.flex-container{
  .ev-text-field{
    margin: 0 10px 20px 10px;
  }
  
  label.input-me{
    font-size: .6875rem;
    margin-left: 15px;
  }

  :deep(textarea) {
    padding: 10px 16px;
    resize: auto;
  }
}

.overlay-header-card {

  &.edit{

    .category{
      color: hsla(0,0%,100%,.62);
      font-size: 14px;
      margin-top: 10px;
    }

    .btn-update{
      background-color: #4caf50 !important;
      border: none !important;
      display: block;
      margin-left: auto; 
    }
  }

  &.profile{
    width: 30%;

    .header-img {
      max-width: 130px;
      max-height: 130px;
      border-radius: 50%;
      margin-top: -40px;

      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    
    .title{
      text-align: center;
      font-size: .75rem;
      margin-bottom: 10px;
    }
    .name{
      text-align: center;
      font-size: 1.125rem; 
      color: black;
      margin-bottom: 10px;
    }
    .description{
      text-align: center;
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 20px;
    }

    .btn-follow{
      background-color: #4caf50 !important;
      border: none !important;
      display: block;
      margin: auto;
    
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
