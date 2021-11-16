<template>
  <v-app>
    <Header
      v-if="isShownHeader"
      :appBarColor="shouldYellow ? shouldAppBarColor : appBarColor"
    />
    <v-main class="pt-0">
      <router-view></router-view>
    </v-main>
    <Footer v-if="isShownFooter" />
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
    shouldYellow: false,
    shouldAppBarColor: "transparent",
    appBarColor: "transparent",
    isShownHeader: true,
    isShownFooter: true,
  }),
  mounted() {
    console.log("((((((CREATED");
    window.addEventListener("scroll", this.onScroll);
  },
  created() {
    console.log("RRRRR");
    console.log("++++++++++++CURRENT_PATH: ", this.currentPath.name);
    if (
      this.currentPath.name == "charter-detail" ||
      this.currentPath.name.includes("settings")
    ) {
      this.shouldYellow = true;
      this.shouldAppBarColor = "yellow accent-4";
    } else {
      this.shouldYellow = false;
      this.shouldAppBarColor = "transparent";
    }
    if (
      this.currentPath.name == "login" ||
      this.currentPath.name == "register"
    ) {
      this.isShownHeader = false;
      this.isShownFooter = false;
    } else {
      this.isShownHeader = true;
      this.isShownFooter = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  computed: {
    currentPath() {
      return this.$route;
    },
  },
  watch: {
    currentPath: {
      handler(val) {
        console.log(val);
        if (val.name == "charter-detail" || val.name.includes("settings")) {
          this.shouldYellow = true;
          this.shouldAppBarColor = "yellow accent-4";
        } else {
          this.shouldYellow = false;
          this.shouldAppBarColor = "transparent";
        }
        if (val.name == "login" || val.name == "register") {
          this.isShownHeader = false;
          this.isShownFooter = false;
        } else {
          this.isShownHeader = true;
          this.isShownFooter = true;
        }
      },
      deeper: true,
    },
  },
  methods: {
    onScroll() {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
      if (this.windowTop > 100) {
        this.appBarColor = "yellow accent-4";
      } else {
        this.appBarColor = "transparent";
      }
      if (this.windowTop > 600) {
        this.showGoTop = true;
      } else {
        this.showGoTop = false;
      }
    },
  },
};
</script>
