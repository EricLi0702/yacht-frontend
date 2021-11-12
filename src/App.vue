<template>
  <v-app>
    <Header :appBarColor="appBarColor"/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
    <GoTop :show="showGoTop" />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/assets/css/main.css";
import GoTop from "@/components/GoTop";
export default {
  components: {
    Header,
    Footer,
    GoTop,
  },
  name: "App",
  data: () => ({
    windowTop: 0,
    showGoTop: false,
    appBarColor: 'transparent',
  }),
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.SmoothVerticalScrolling();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
      if (this.windowTop > 100){
        this.appBarColor = "white";
      }else {
        this.appBarColor = "transparent"  
      }
      if (this.windowTop > 800) {
        this.showGoTop = true;
      } else {
        this.showGoTop = false;
      }
    },
    SmoothVerticalScrolling(e, time, where) {
      var eTop = e.getBoundingClientRect().top;
      var eAmt = eTop / 100;
      var curTime = 0;
      while (curTime <= time) {
        window.setTimeout(this.SVS_B, curTime, eAmt, where);
        curTime += time / 100;
      }
    },

    SVS_B(eAmt, where) {
      if (where == "center" || where == "") window.scrollBy(0, eAmt / 2);
      if (where == "top") window.scrollBy(0, eAmt);
    },
  },
};
</script>
