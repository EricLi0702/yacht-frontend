<template>
  <v-app-bar app class="app-header" elevation="0" :color="appBarColor">
    <v-container>
      <v-row>
        <router-link :to="{ path: `/` }" class="text-decoration-none">
          <p class="text-h4 white--text mb-0">Logo</p>
        </router-link>
        <v-spacer></v-spacer>
        <div class="align-center d-flex justify-end">
          <router-link :to="{ path: 'home' }" class="mr-5 nav-link white--text"
            >Home</router-link
          >
          <router-link
            :to="{ path: 'rental' }"
            class="mr-5 nav-link white--text"
            >Rentals</router-link
          >
          <router-link
            :to="{ name: 'charter' }"
            class="mr-5 nav-link white--text"
            >Charter</router-link
          >
          <router-link :to="{ path: 'about' }" class="mr-5 nav-link white--text"
            >About Us</router-link
          >
          <router-link
            :to="{ path: 'contact' }"
            class="mr-5 nav-link white--text"
            >Contact Us</router-link
          >
          <v-spacer></v-spacer>
          <router-link :to="{ path: 'login' }" class="mr-5 nav-link white--text"
            >Log In</router-link
          >
          <router-link
            :to="{ path: 'register' }"
            class="mr-5 nav-link white--text"
            >Register</router-link
          >
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    appBarColor: String,
  },
  methods: {},
};
</script>

<style></style>
