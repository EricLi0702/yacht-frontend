<template>
  <div class="bg-light-blue">
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
                  <v-btn icon class="mr-2" large>
                    <v-icon color="white" size="40"
                      >mdi-arrow-left-circle-outline</v-icon
                    >
                  </v-btn>
                  <v-btn icon large>
                    <v-icon color="white" size="40"
                      >mdi-arrow-right-circle-outline</v-icon
                    >
                  </v-btn>
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
    <v-container class="pb-16">
      <v-row>
        <p class="text-md-h4 text-h5 font-weight-black text-uppercase">
          Yachts
        </p>
      </v-row>
      <v-row>
        <v-col
          v-for="(yacht, index) in yachtList"
          :key="index"
          cols="12"
          md="6"
          class="pa-md-3 pa-2"
        >
          <div class="w-100 h-100">
            <v-hover v-slot="{ hover }">
              <v-card :elevation="hover ? 3 : 0" :class="{ 'on-hover': hover }">
                <v-img :src="yacht.img">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <div class="position-relative h-100 w-100 d-flex align-end">
                    <div class="px-md-5 px-2 pb-5 white--text">
                      <p class="text-h5 font-weight-bold text-left">
                        {{ yacht.name }}
                      </p>
                      <div class="d-flex align-end">
                        <v-icon color="white" class="pr-3"
                          >mdi-sail-boat</v-icon
                        >
                        <p class="mb-0" style="width: 130px">Length</p>
                        <p
                          class="mb-0 text-body-1 font-weight-bold font-italic"
                        >
                          {{ yacht.length }} Meter
                        </p>
                      </div>
                      <div class="d-flex align-end py-3">
                        <v-icon color="white" class="pr-3">mdi-tag</v-icon>
                        <p class="mb-0" style="width: 130px">Price per Week</p>
                        <p
                          class="mb-0 text-body-1 font-weight-bold font-italic"
                        >
                          {{ yacht.pricePerWeek }}$
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
                          {{ yacht.builtDate }}
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
    <v-container fluid>
      <v-row>
        <v-img src="../assets/image/home/wave.png"> </v-img>
      </v-row>
      <v-row class="bg-white pb-16">
        <v-container class="bg-white">
          <v-row>
            <v-col cols="12" md="6" class="d-flex align-center">
              <div class="d-flex flex-column">
                <p
                  class="
                    text-md-h4 text-h5
                    font-weight-black
                    text-uppercase
                    py-3
                  "
                >
                  Features
                </p>
                <div class="d-flex align-start">
                  <v-icon size="40" color="yellow accent-4" class="pr-3"
                    >mdi-sail-boat</v-icon
                  >
                  <div>
                    <p class="font-weight-bold mb-0 pt-3 pb-2">
                      Longest Yachts
                    </p>
                    <p class="grey--text text--darken-1 line-height-30">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
                <div class="d-flex align-start">
                  <v-icon size="40" color="yellow accent-4" class="pr-3"
                    >mdi-currency-btc</v-icon
                  >
                  <div>
                    <p class="font-weight-bold mb-0 pt-3 pb-2">
                      Buy Using Bitcoin
                    </p>
                    <p class="grey--text text--darken-1 line-height-30">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
                <div class="d-flex align-start">
                  <v-icon size="40" color="yellow accent-4" class="pr-3"
                    >mdi-tag</v-icon
                  >
                  <div>
                    <p class="font-weight-bold mb-0 pt-3 pb-2">
                      Resell Further when Needed
                    </p>
                    <p class="grey--text text--darken-1 line-height-30">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                src="../assets/image/home/feature-rightside-img.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            src="../assets/image/home/instagram-logo-text.png"
            max-width="200"
          ></v-img>
          <p class="text-uppercase text-md-h4 text-h5 font-weight-black">
            Photos from instagram
          </p>
          <p class="grey--text text--darken-1 line-height-30 py-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div class="d-flex align-center mb-10">
            <v-img
              src="../assets/image/home/instagram-logo-img.png"
              class="mr-3"
              max-width="34"
              width="34"
              height="34"
            ></v-img>
            <p class="text-h6 mb-0">@something</p>
          </div>
          <v-btn
            rounded
            class="text-capitalize"
            color="yellow accent-4"
            elevation="0"
          >
            Follow Now
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-end">
          <v-row>
            <v-col cols="12" md="4" class="d-flex align-end">
              <v-row>
                <v-col cols="12" md="6"></v-col>
                <v-col cols="12" md="6">
                  <v-img
                    src="../assets/image/home/instagram-img5.png"
                    class="rounded-lg"
                    :max-width="$vuetify.breakpoint.mdAndUp ? '150' : ''"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6">
                  <v-img
                    src="../assets/image/home/instagram-img4.png"
                    class="rounded-lg"
                    :max-width="$vuetify.breakpoint.mdAndUp ? '150' : ''"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6">
                  <v-img
                    src="../assets/image/home/instagram-img3.png"
                    class="rounded-lg"
                    :max-width="$vuetify.breakpoint.mdAndUp ? '150' : ''"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="8">
              <v-img
                src="../assets/image/home/instagram-img1.png"
                class="rounded-lg"
                :max-width="$vuetify.breakpoint.mdAndUp ? '300' : ''"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="12">
          <v-row>
            <v-col cols="12" md="3"></v-col>
            <v-col cols="12" md="3" class="d-flex align-end">
              <v-row>
                <v-col cols="12" md="6">
                  <v-img
                    src="../assets/image/home/instagram-img9.png"
                    class="rounded-lg"
                    :max-width="$vuetify.breakpoint.mdAndUp ? '150' : ''"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6">
                  <v-img
                    src="../assets/image/home/instagram-img8.png"
                    class="rounded-lg"
                    :max-width="$vuetify.breakpoint.mdAndUp ? '150' : ''"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6"></v-col>
                <v-col cols="12" md="6">
                  <v-img
                    src="../assets/image/home/instagram-img10.png"
                    class="rounded-lg"
                    :max-width="$vuetify.breakpoint.mdAndUp ? '150' : ''"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="3">
              <v-img
                src="../assets/image/home/instagram-img2.png"
                class="rounded-lg"
                :max-width="$vuetify.breakpoint.mdAndUp ? '300' : ''"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3">
              <v-row>
                <v-col cols="12">
                  <v-img
                    src="../assets/image/home/instagram-img6.png"
                    class="rounded-lg"
                    :max-width="$vuetify.breakpoint.mdAndUp ? '150' : ''"
                  ></v-img>
                </v-col>
                <v-col cols="12">
                  <v-img
                    src="../assets/image/home/instagram-img7.png"
                    class="rounded-lg"
                    :max-width="$vuetify.breakpoint.mdAndUp ? '100' : ''"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0">
      <v-img src="../assets/image/home/contact-img.png" max-height="800">
        <img src="../assets/image/home/wave-under.png" class="w-100" alt="" />
        <p class="text-md-h4 text-h5 font-weight-black text-center">
          If you want to sale your boat? <br />
          we got you covered
        </p>
        <v-row class="w-100 ma-0 px-2" style="height: calc(100% - 200px)">
          <v-col
            cols="12"
            md="5"
            class="h-100 mx-auto d-flex flex-row align-center"
          >
            <div
              class="
                px-lg-5 px-2
                w-100
                d-flex
                flex-column
                align-center
                pt-16
                pb-5
                bg-transparent-white
                rounded-lg
              "
            >
              <v-text-field
                label="Your Name"
                placeholder="Please input your name"
                outlined
                class="w-100"
                color="yellow accent-4"
              ></v-text-field>
              <v-text-field
                label="Your Email"
                placeholder="Please input your email"
                outlined
                class="w-100"
                color="yellow accent-4"
              ></v-text-field>
              <v-text-field
                label="Boat Type"
                placeholder="Please input boat type"
                outlined
                class="w-100"
                color="yellow accent-4"
              ></v-text-field>
              <v-btn
                color="yellow accent-4"
                rounded
                x-large
                class="text-capitalize"
                elevation="0"
              >
                Submit
              </v-btn>
              <p class="pt-5">
                One of our Representative will contact you soon.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-img>
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
        name: "Speed Boat 10",
        img: require("../assets/image/home/yacht1.png"),
        length: 320,
        pricePerWeek: 150,
        builtDate: "10-Oct-2016",
      },
      {
        name: "Princess 18",
        img: require("../assets/image/home/yacht2.png"),
        length: 240,
        pricePerWeek: 1000,
        builtDate: "21-Sep-2021",
      },
      {
        name: "Hercules 07",
        img: require("../assets/image/home/yacht3.png"),
        length: 450,
        pricePerWeek: 700,
        builtDate: "03-Jan-2019",
      },
      {
        name: "Speed Boat 10",
        img: require("../assets/image/home/yacht4.png"),
        length: 290,
        pricePerWeek: 380,
        builtDate: "21-May-2020",
      },
    ],
  }),
  mounted() {
    console.log("imported home page");
  },
};
</script>
