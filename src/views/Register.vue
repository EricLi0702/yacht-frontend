<template>
  <v-container class="mt-5 justify-center d-flex">
    <v-card elevation="24" class="login-card">
      <h2 class="pa-5 text-center">Sign Up</h2>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" md="7">
          <v-img
            width="100%"
            height="600"
            src="../assets/image/signup.jpg"
          ></v-img>
        </v-col>
        <v-col cols="12" md="5" class="py-16 px-8">
          <v-radio-group v-model="userType" row>
            <v-spacer></v-spacer>
            <v-radio label="User" value="user"></v-radio>
            <v-spacer></v-spacer>
            <v-radio label="Owner" value="owner"></v-radio>
            <v-spacer></v-spacer>
          </v-radio-group>
          <v-form ref="form" v-model="valid" lazy-validation v-if="userType =='user'">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="showPass ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="showPass = !showPass"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              :append-icon="showConPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="confirmPasswordRules"
              :type="showConPass ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="showConPass = !showConPass"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4 mt-10"
              @click="signUp"
            >
              Sign Up
            </v-btn>
          </v-form>
          <div v-else>
            <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

             <v-text-field
              v-model="password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="showPass ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="showPass = !showPass"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              :append-icon="showConPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="confirmPasswordRules"
              :type="showConPass ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="showConPass = !showConPass"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4 mt-10"
              @click="signUp"
            >
              Sign Up
            </v-btn>
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
    userType:'user',
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be more than 8 characters",
    ],
    confirmPassword:"",
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
    showPass:false,
    showConPass:false,
  }),
  watch:{
    userType(val){
      console.log('userType:',val)
      this.email = ''
      this.password = ''
      this.confirmPassword = ''
      this.showPass = false
      this.showConPass = false

    }
  },

  methods: {
    signUp() {
      console.log('signup')
      if(this.password != this.confirmPassword){
        return this.$vToastify.error(
          "confirm password does not match"
        );
      }
      
    },
  },
};
</script>

<style></style>
