<template>
  <div>
    <section class="home-section d-flex flex-column">
      <video class="homeVideo" muted loop autoplay>
        <source :src="videoLink" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1 d-flex flex-column justify-center">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <p class="text-md-h3 text-h4 white--text font-weight-bold">
                ARE YOU <br />
                INTERESTED?
              </p>
              <v-btn
                rounded
                dark
                color="yellow accent-4"
                class="text-capitalize"
                elevation="0"
              >
                Charter Now
              </v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <v-row>
                <v-col cols="12" md="4"></v-col>
                <v-col cols="12" md="8">
                  <p class="white--text text-md-h6">
                    to buy or rent a yacht for few years or months. you have
                    come to a perfect place. Different yachts at one place.
                  </p>
                  <v-icon color="white" size="40" class="mr-2"
                    >mdi-arrow-left-circle-outline</v-icon
                  >
                  <v-icon color="white" size="40"
                    >mdi-arrow-right-circle-outline</v-icon
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="flex-grow-1 d-flex flex-column justify-end">
        <div class="d-flex">
          <div class="banner-slider-img-con position-relative">
            <img
              src="../assets/image/home/banner-slider-img-1.png"
              alt=""
              class="banner-slider-img"
            />
            <v-btn fab icon class="position-absolute self-align-justify-center">
              <v-icon color="white" size="40">mdi-play-circle-outline</v-icon>
            </v-btn>
          </div>
          <div class="banner-slider-img-con position-relative">
            <img
              src="../assets/image/home/banner-slider-img-2.png"
              alt=""
              class="banner-slider-img"
            />
            <v-btn fab icon class="position-absolute self-align-justify-center">
              <v-icon color="white" size="40">mdi-play-circle-outline</v-icon>
            </v-btn>
          </div>
          <div class="banner-slider-img-con position-relative">
            <img
              src="../assets/image/home/banner-slider-img-3.png"
              alt=""
              class="banner-slider-img"
            />
            <v-btn fab icon class="position-absolute self-align-justify-center">
              <v-icon color="white" size="40">mdi-play-circle-outline</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </section>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="pl-md-8">
          <v-img
            class="w-100 h-100"
            src="../assets/image/Rectangle 12.png"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6" class=" pa-md-5">
          <p class="text-md-h3 text-h4 font-weight-black">ABOUT US</p>
          <p class=" grey--text text--darken-1">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled
          </p>
        </v-col>
      </v-row>
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
