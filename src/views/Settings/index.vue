<template>
  <v-container class="pt-md-16 pt-14">
    <div class="row">
      <div class="col-md-3">
        <v-card
          class="mx-auto position-sticky"
          tile
          max-width="100%"
        >
          <v-list>
            <v-subheader
              style="font-size: 25px; font-weight: 'bold'; color: '#fc8600'"
              >Settings</v-subheader
            >
            <v-list-item-group v-model="selectedItem" color="#fc8600" mandatory>
              <v-list-item @click="navToProfile">
                <v-list-item-icon>
                  <v-icon v-text="'mdi-account'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="navToPassword">
                <v-list-item-icon>
                  <v-icon v-text="'mdi-lock-reset'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="navToYachts">
                <v-list-item-icon>
                  <v-icon v-text="'mdi-sail-boat'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Yachts</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </div>

      <div class="col-md-9">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  middleware: "auth",
  layout: "basic",
  computed: {
    currentPath() {
      return this.$route;
    },
  },

  created() {
    if (this.currentPath.name == "settings.profile") {
      this.selectedItem = 0;
    } else if (this.currentPath.name == "settings.password") {
      this.selectedItem = 1;
    } else if (this.currentPath.name == "settings.yachts") {
      this.selectedItem = 2;
    }
  },

  watch: {
    currentPath: {
      handler(val) {
        if (val.name == "settings.profile") {
          this.selectedItem = 0;
        } else if (val.name == "settings.password") {
          this.selectedItem = 1;
        } else if (val.name == "settings.yachts") {
          this.selectedItem = 2;
        }
      },
      deeper: true,
    },
  },

  data: () => ({
    selectedItem: 0,
  }),

  methods: {
    navToProfile() {
      this.$router.push({ name: "settings.profile" });
    },

    navToPassword() {
      this.$router.push({ name: "settings.password" });
    },

    navToYachts() {
      this.$router.push({ name: "settings.yachts" });
    },
  },
};
</script>

<style>
.settings-card .card-body {
  padding: 0;
}
</style>
