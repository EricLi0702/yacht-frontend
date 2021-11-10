<template>
  <v-container class="mt-5 justify-center d-flex">
    <v-card elevation="24" class="login-card">
      <h2 class="pa-5 text-center">Log in</h2>
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12" md="7">
          <v-img
            width="100%"
            height="600"
            src="../assets/image/login.jpg"
          ></v-img>
        </v-col>
        <v-col cols="12" md="5" class="py-16 px-8">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              :loading="isLoading"
              color="success"
              class="mr-4 mt-10"
              @click="login"
            >
              Login
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be more than 8 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    isLoading:false
  }),

  methods: {
    login() {
      console.log(this.email, this.password);
      if(this.email === '' || this.password === ''){
         return this.$vToastify.error(
          "please enter email or password"
        );
      }
      this.isLoading = true
      this.$store.dispatch("signIn", {
        email: "owner@owner.com",
        password: "password",
      });
      this.isLoading = false
    },
  },
};
</script>

<style></style>
