<template>
  <v-app>
    <v-app-bar app class="app-header">
      <v-row>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <router-link :to="{ path: 'home' }" class="mr-5 nav-link">Home</router-link>
        <router-link :to="{ path: 'rental' }" class="mr-5 nav-link">Rentals</router-link>
        <router-link :to="{ path: 'charter' }" class="mr-5 nav-link">Charter</router-link>
        <router-link :to="{ path: 'about' }" class="mr-5 nav-link">About Us</router-link>
        <router-link :to="{ path: 'contact' }" class="mr-5 nav-link">Contact Us</router-link>
        <v-spacer></v-spacer>
        <router-link :to="{ path: 'login' }" class="mr-5 nav-link">Log In</router-link>
        <router-link :to="{ path: 'register' }" class="mr-5 nav-link">Register</router-link>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import '@/assets/css/main.css';
export default {
  name: 'App',
  data: () => ({
    //
  }),
  
};
</script>
