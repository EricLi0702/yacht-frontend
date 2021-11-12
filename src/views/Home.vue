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
              <v-icon color="yellow accent-4" size="40"
                >mdi-play-circle-outline</v-icon
              >
            </v-btn>
          </div>
          <div class="banner-slider-img-con position-relative">
            <img
              src="../assets/image/home/banner-slider-img-2.png"
              alt=""
              class="banner-slider-img"
            />
            <v-btn fab icon class="position-absolute self-align-justify-center">
              <v-icon color="yellow accent-4" size="40"
                >mdi-play-circle-outline</v-icon
              >
            </v-btn>
          </div>
          <div class="banner-slider-img-con position-relative">
            <img
              src="../assets/image/home/banner-slider-img-3.png"
              alt=""
              class="banner-slider-img"
            />
            <v-btn fab icon class="position-absolute self-align-justify-center">
              <v-icon color="yellow accent-4" size="40"
                >mdi-play-circle-outline</v-icon
              >
            </v-btn>
          </div>
        </div>
      </div>
    </section>
    <v-container class="py-md-16 py-5">
      <v-row>
        <v-col cols="12" md="6" class="pa-md-10">
          <v-img
            class="w-100 h-100"
            src="../assets/image/home/about-us.png"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6" class="pa-md-10 d-flex align-center">
          <div>
            <p class="text-md-h4 text-h5 font-weight-black py-3">ABOUT US</p>
            <p class="grey--text text--darken-1 line-height-30">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <p class="text-md-h4 text-h5 font-weight-black text-uppercase">
          Yachts
        </p>
      </v-row>
      <v-row>
        <v-col v-for="(yacht, index) in yachtList" :key="index" cols="12" md="6" class="pa-md-3 pa-2">
          <div class="w-100 h-100">
            <v-hover v-slot="{ hover }">
              <v-card :elevation="hover ? 3 : 0" :class="{ 'on-hover': hover }">
                <v-img :src="yacht.img">
                  <div class="position-relative h-100 w-100 d-flex align-end">
                    <div class="px-md-5 px-2 pb-5 white--text">
                      <p class="text-h5 font-weight-bold text-left">
                        {{yacht.name}}
                      </p>
                      <div class="d-flex align-end">
                        <v-icon color="white" class="pr-3"
                          >mdi-sail-boat</v-icon
                        >
                        <p class="mb-0" style="width: 130px">Length</p>
                        <p
                          class="mb-0 text-body-1 font-weight-bold font-italic"
                        >
                          {{yacht.length}} Meter
                        </p>
                      </div>
                      <div class="d-flex align-end py-3">
                        <v-icon color="white" class="pr-3">mdi-tag</v-icon>
                        <p class="mb-0" style="width: 130px">Price per Week</p>
                        <p
                          class="mb-0 text-body-1 font-weight-bold font-italic"
                        >
                          {{yacht.pricePerWeek}}$
                        </p>
                      </div>
                      <div class="d-flex align-end">
                        <v-icon color="white" class="pr-3"
                          >mdi-calendar-month</v-icon
                        >
                        <p class="mb-0" style="width: 130px">Built Date</p>
                        <p
                          class="mb-0 text-body-1 font-weight-bold font-italic"
                        >
                          {{yacht.builtDate}}
                        </p>
                      </div>
                    </div>

                    <v-btn
                      :class="{ 'hover-show-btns': hover }"
                      color="rgba(255, 255, 255, 0)"
                      icon
                      large
                      class="position-absolute self-align-justify-center"
                    >
                      <v-icon
                        :class="{ 'hover-show-btns': hover }"
                        color="rgba(255, 255, 255, 0)"
                        size="40"
                      >
                        mdi-arrow-right
                      </v-icon>
                    </v-btn>
                  </div>
                </v-img>
              </v-card>
            </v-hover>
          </div>
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

    yachtList: [
      {
        name: 'Speed Boat 10',
        img: require('../assets/image/home/yacht1.png'),
        length: 320,
        pricePerWeek: 150,
        builtDate: '10-Oct-2016',
      },
      {
        name: 'Princess 18',
        img: require('../assets/image/home/yacht2.png'),
        length: 240,
        pricePerWeek: 1000,
        builtDate: '21-Sep-2021',
      },
      {
        name: 'Hercules 07',
        img: require('../assets/image/home/yacht3.png'),
        length: 450,
        pricePerWeek: 700,
        builtDate: '03-Jan-2019',
      },
      {
        name: 'Speed Boat 10',
        img: require('../assets/image/home/yacht4.png'),
        length: 290,
        pricePerWeek: 380,
        builtDate: '21-May-2020',
      },
    ]
  }),
  mounted() {
    console.log("imported home page");
  },
};
</script>
