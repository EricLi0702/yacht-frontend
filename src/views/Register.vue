<template>
  <v-container class="justify-center d-flex align-center h-100-vh">
    <v-card elevation="24" class="login-card">
      <v-card-title class="position-relative text-center">
        <p class="w-100 text-md-h4 font-weight-black text-h5 text-center mb-0">
          Sign Up
        </p>
        <v-btn
          icon
          class="position-absolute put-item-middle"
          style="left: 20px"
          href="/home"
        >
          <v-icon color="yellow accent-4" size="35">mdi-home</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-row>
        <v-col cols="12" md="7" class="hidden-sm-and-down">
          <v-img
            height="600"
            src="../assets/image/signup.jpg"
            class="rounded-bl-xl"
          ></v-img>
        </v-col>
        <v-col cols="12" md="5" class="py-16 px-8">
          <v-radio-group v-model="userType" row>
            <v-spacer></v-spacer>
            <v-radio
              label="User"
              value="user"
              color="yellow accent-4"
            ></v-radio>
            <v-spacer></v-spacer>
            <v-radio
              label="Owner"
              value="owner"
              color="yellow accent-4"
            ></v-radio>
            <v-spacer></v-spacer>
          </v-radio-group>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            v-if="userType == 'user'"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              color="yellow accent-4"
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

            <v-text-field
              v-model="confirmPassword"
              :append-icon="showConPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="confirmPasswordRules"
              :type="showConPass ? 'text' : 'password'"
              name="input-10-1"
              label="Confirm Password"
              hint="At least 8 characters"
              counter
              color="yellow accent-4"
              @click:append="showConPass = !showConPass"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="yellow accent-4"
              rounded
              block
              class="mt-5 ml-auto"
              @click="signUp"
            >
              Sign Up
            </v-btn>
            <div
              class="w-100 d-flex align-center justify-center text-center pt-3"
            >
              <p class="mb-0 text-caption grey--text text--darken-2">
                Do you already have account?
                <a href="/login" class="text-decoration-none">Login here.</a>
              </p>
            </div>
          </v-form>
          <div v-else>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                color="yellow accent-4"
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

              <v-text-field
                v-model="confirmPassword"
                :append-icon="showConPass ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="confirmPasswordRules"
                :type="showConPass ? 'text' : 'password'"
                name="input-10-1"
                label="Confirm Password"
                hint="At least 8 characters"
                counter
                color="yellow accent-4"
                @click:append="showConPass = !showConPass"
              ></v-text-field>
              <v-btn
                :disabled="!valid"
                color="yellow accent-4"
                rounded
                block
                class="mt-5 ml-auto"
                @click="signUp"
              >
                Sign Up
              </v-btn>
              <div
                class="
                  w-100
                  d-flex
                  align-center
                  justify-center
                  text-center
                  pt-3
                "
              >
                <p class="mb-0 text-caption grey--text text--darken-2">
                  Do you already have account?
                  <a href="/login" class="text-decoration-none">Login here.</a>
                </p>
              </div>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    userType: "user",
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be more than 8 characters",
    ],
    confirmPassword: "",
    confirmPasswordRules: [
      (v) => !!v || "Confirm Password is required",
      (v) => (v && v.length >= 8) || "Password must be more than 8 characters",
      // (v) => (v && v != this.password) || "Confirm password does not match",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    showPass: false,
    showConPass: false,
  }),
  watch: {
    userType(val) {
      console.log("userType:", val);
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.showPass = false;
      this.showConPass = false;
    },
  },

  methods: {
    signUp() {
      console.log("signup");
      if (this.password != this.confirmPassword) {
        return this.$vToastify.error("confirm password does not match");
      }
    },
  },
};
</script>

<style></style>
