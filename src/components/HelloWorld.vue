<template>
  <v-container>
  
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  mounted() {
    // this.$store.dispatch("signIn", {
    //   email: "owner@owner.com",
    //   password: "password",
    // });
    console.log(this.$store.state.authData)
  },
};
</script>
