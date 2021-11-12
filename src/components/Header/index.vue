<template>
  <v-app-bar app class="app-header" elevation="0" :color="appBarColor">
    <v-row>
      <router-link :to="{ path: `/` }">
        <p class="text-h4 text--white">Logo</p>
      </router-link>
      <v-spacer></v-spacer>
      <div class="align-center d-flex justify-end">
        <router-link :to="{ path: 'home' }" class="mr-5 nav-link"
          >Home</router-link
        >
        <router-link :to="{ path: 'rental' }" class="mr-5 nav-link"
          >Rentals</router-link
        >
        <router-link :to="{ path: 'charter' }" class="mr-5 nav-link"
          >Charter</router-link
        >
        <router-link :to="{ path: 'about' }" class="mr-5 nav-link"
          >About Us</router-link
        >
        <router-link :to="{ path: 'contact' }" class="mr-5 nav-link"
          >Contact Us</router-link
        >
        <v-spacer></v-spacer>
        <router-link :to="{ path: 'login' }" class="mr-5 nav-link"
          >Log In</router-link
        >
        <router-link :to="{ path: 'register' }" class="mr-5 nav-link"
          >Register</router-link
        >
      </div>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  props:{
    appBarColor: String,
  },
  methods: {
  
  },
};
</script>

<style></style>
