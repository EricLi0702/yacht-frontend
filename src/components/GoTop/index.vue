<template>
  <a
    v-if="show"
    class="back2top-btn"
    href="#"
    data-aos="fade-up"
    data-aos-easing="linear"
  >
    <v-btn fab dark color="#ffd400">
      <v-icon>mdi-navigation</v-icon>
    </v-btn>
  </a>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data: () => ({
    windowTop: 0,
    show: false,
  }),
  mounted() {
    AOS.init();
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
      if (this.windowTop > 800) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
};
</script>

<style></style>
