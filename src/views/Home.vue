<template>
  <div>
    <section class="home-section">
      <video class="homeVideo" muted loop autoplay>
        <source :src="videoLink" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <!-- <div class="home-section-container">
        <h1>ARE YOU INTERESTED?</h1>
      </div> -->
    </section>
<<<<<<< HEAD
    <v-container>
      <section class="home-section d-flex">
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-img
          max-height="400"
          max-width="450"
          src="../assets/image/Rectangle 12.png"
        ></v-img>
        <v-spacer></v-spacer>
        <div class="w-30 p-5">
          <h2 class="">ABOUT US</h2>
          <p class="">
=======
    <section class="home-section">
      <v-row>
        <v-col class="float-right">
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-img
            max-height="400"
            max-width="450"
            src="../assets/image/Rectangle 12.png"
          ></v-img>
          <v-spacer></v-spacer>
        </v-col>
        <v-col>
          <h2>About Us</h2>
          <p>
>>>>>>> 7c40c7ec101d17da2520afb6c3b183cb5ebc6f4e
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </section>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
    videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    //   "https://player.vimeo.com/external/371636513.hd.mp4?s=a9084205a4de3a96b1af1cda3dc986f4f686963b&profile_id=175",
  }),
  mounted() {
    console.log("imported home page");
  },
};
</script>
