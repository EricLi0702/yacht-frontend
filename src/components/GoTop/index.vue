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
  props: {
    show: Boolean,
    // eslint-disable-next-line vue/require-prop-type-constructor
    require: true,
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style></style>
