<template>
  <v-app>
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "@/assets/css/main.css";
export default {
  components: {
    Header,
    Footer
  },
  name: "App",
  data: () => ({
    //
  }),
};
</script>
