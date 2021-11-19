<template>
  <v-container class="justify-center d-flex align-center h-100-vh">
    <v-card elevation="24" class="login-card">
      <v-card-title class="position-relative text-center">
        <p class="w-100 text-md-h4 font-weight-black text-h5 text-center mb-0">
          Log in
        </p>
        <v-btn
          icon
          class="position-absolute put-item-middle"
          style="right: 20px"
          href="/home"
        >
          <v-icon color="yellow accent-4" size="35">mdi-home</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12" md="5" class="py-16 px-8">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              color="yellow accent-4"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="showPass ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              color="yellow accent-4"
              @click:append="showPass = !showPass"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              :loading="isLoading"
              color="yellow accent-4"
              class="mt-5"
              @click="login"
              block
              rounded
            >
              Login
            </v-btn>
            <div
              class="w-100 d-flex align-center justify-center text-center pt-3"
            >
              <p class="mb-0 text-caption grey--text text--darken-2">
                Are you new here?
                <a href="/register" class="text-decoration-none"
                  >Register here.</a
                >
              </p>
            </div>
          </v-form>
        </v-col>
        <v-col cols="12" md="7" class="hidden-sm-and-down">
          <v-img
            height="600"
            src="../assets/image/login.jpg"
            class="rounded-br-xl"
          ></v-img>
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
    isLoading: false,
    showPass: false,
  }),

  methods: {
    async login() {
      console.log(this.email, this.password);
      if (this.email === "" || this.password === "") {
        return this.$vToastify.error("please enter email or password");
      }
      this.isLoading = true;
      await this.$store
        .dispatch("signIn", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });

      this.isLoading = false;
    },
  },
};
</script>

<style></style>
