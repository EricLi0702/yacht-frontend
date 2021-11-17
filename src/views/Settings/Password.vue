<template>
  <v-card :loading="isLoading" class="mx-auto" max-width="100%" tile>
    <template slot="progress">
      <v-progress-linear
        color="#fc8600"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title>Your Password</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        <v-text-field
          class="pt-0 mt-0"
          color="#fc8600"
          v-model="newPassword"
          label="New Password"
          hide-details
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
        ></v-text-field>
      </div>
      <div class="my-4 text-subtitle-1">
        <v-text-field
          class="pt-0 mt-0"
          color="#fc8600"
          v-model="confirmPassword"
          label="Confirm Password"
          hide-details
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show2 ? 'text' : 'password'"
          @click:append="show2 = !show2"
        ></v-text-field>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn color="#fc8600" text @click="update" :loading="isLoading">
        Update
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  scrollToTop: false,

  metaInfo() {
    return { title: "Settings" };
  },

  data: () => ({
    newPassword: "",
    confirmPassword: "",
    isLoading: false,
    show1: false,
    show2: false,
  }),

  computed: mapGetters({
    user: "authData",
  }),

  methods: {
    async update() {
      if (this.newPassword.trim() == "") {
        return this.$vToastify.error("Password is required");
      }
      if (this.newPassword.length < 8) {
        return this.$vToastify.error(
          "Length of password should be greater than 8"
        );
      }
      if (this.confirmPassword.trim() == "") {
        return this.$vToastify.error("Confirm Password is required");
      }
      if (this.newPassword != this.confirmPassword) {
        return this.$vToastify.error(
          "password and confirm password does not match"
        );
      }

      this.isLoading = true;
      let payload = {
        userId: this.user.id,
        newPassword: this.newPassword,
      };
      await this.$store
        .dispatch("updateUser", payload)
        .then((res) => {
          console.log(res);
          this.newPassword = "";
          this.confirmPassword = "";
        })
        .catch((err) => {
          console.log(err);
        });
      this.isLoading = false;
    },
  },
};
</script>
