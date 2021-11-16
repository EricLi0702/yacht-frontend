<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-avatar
        v-bind="attrs"
        v-on="on"
        v-if="user.name !== '' && user.avatar == '/'"
        color="#fc8600"
        size="40"
      >
        <span class="white--text headline">{{ user.name[0] }}</span>
      </v-avatar>
      <v-avatar v-bind="attrs" v-on="on" v-else size="40">
        <v-img :src="user.avatar"></v-img>
      </v-avatar>
    </template>
    <v-list>
      <v-list-item @click.prevent="navToProfile">
        <v-list-item-title class="justify-space-between d-flex align-center">
          <p class="mb-0">Settings</p>
          <v-icon color="#fc8600" size="25" right>mdi-cog-outline</v-icon>
        </v-list-item-title>
      </v-list-item>
      <v-list-item @click.prevent="logout">
        <v-list-item-title class="justify-space-between d-flex align-center">
          <p class="mb-0">Logout</p>
          <v-icon color="#fc8600" size="25" right
            >mdi-account-arrow-right-outline</v-icon
          >
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    isAuthenticated: "isAuthenticated",
    user: 'authData',
  }),
  created(){
    console.log("this.isAuthenticated", this.isAuthenticated)
    console.log("this.authData", this.authData)
  },
  methods: {
    async logout() {
      // Log out the user.
      localStorage.setItem("authData", null);
      localStorage.setItem("isAuthenticated", false);
      // await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$router.push({ name: "login" });
    },

    navToProfile() {
      this.$router.push({ path: "/settings" });
    },
  },
};
</script>

<style></style>
