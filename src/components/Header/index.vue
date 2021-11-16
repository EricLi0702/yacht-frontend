<template>
  <v-app-bar app class="app-header" elevation="0" :color="appBarColor">
    <v-container>
      <v-row>
        <router-link :to="{ path: `/` }" class="text-decoration-none">
          <p class="text-h4 white--text mb-0">Logo</p>
        </router-link>
        <v-spacer></v-spacer>
        <div class="align-center d-flex justify-end">
          <router-link :to="{ name: 'home' }" class="mr-5 nav-link white--text"
            >Home</router-link
          >
          <router-link
            :to="{ name: 'rental' }"
            class="mr-5 nav-link white--text"
            >Rentals</router-link
          >
          <router-link
            :to="{ name: 'charter' }"
            class="mr-5 nav-link white--text"
            >Charter</router-link
          >
          <router-link :to="{ name: 'about' }" class="mr-5 nav-link white--text"
            >About Us</router-link
          >
          <router-link
            :to="{ name: 'contact' }"
            class="mr-5 nav-link white--text"
            >Contact Us</router-link
          >
          <v-spacer></v-spacer>

          <router-link
            v-if="isAuthenticated !== true"
            :to="{ name: 'login' }"
            class="mr-5 nav-link white--text"
            >Log In</router-link
          >
          <router-link
            v-if="isAuthenticated !== true"
            :to="{ name: 'register' }"
            class="mr-5 nav-link white--text"
            >Register</router-link
          >
          <Account v-if="isAuthenticated == true" />
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import Account from "../Account";
export default {
  components: {
    Account,
  },
  computed: mapGetters({
    isAuthenticated: "isAuthenticated",
    user: "authData",
  }),
  created() {
    console.log("this.isAuthenticated", this.isAuthenticated);
    console.log("this.authData", this.user);
  },
  props: {
    appBarColor: String,
  },
  data: () => ({
    isAuth: false,
  }),

  methods: {},
};
</script>

<style></style>
