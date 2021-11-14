<template>
  <v-container fluid class="pt-md-16 pt-14">
    <v-container class="pt-0">
      <carousel
        :nav="true"
        :items="1"
        :dots="true"
        :margin="0"
        :loop="false"
        :autoplay="true"
        :autoplaySpeed="1500"
        :responsive="{
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
          1500: {
            items: 1,
          },
        }"
      >
        <v-img src="../assets/image/home/yacht1.png" max-height="500"></v-img>
        <v-img src="../assets/image/home/yacht2.png" max-height="500"></v-img>
        <v-img src="../assets/image/home/yacht3.png" max-height="500"></v-img>
        <v-img src="../assets/image/home/yacht4.png" max-height="500"></v-img>
      </carousel>
    </v-container>
    <v-container>

    </v-container>
  </v-container>
</template>

<script>
import carousel from "v-owl-carousel";
export default {
  components: {
    carousel,
  },
};
</script>

<style></style>
