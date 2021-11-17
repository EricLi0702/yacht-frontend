<template>
  <div>
    <!-- <v-img src="../assets/image/charter1.jpg"></v-img> -->
    <carousel
            :nav="false"
            :items="1"
            :dots="false"
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
            <v-img v-for="(item, i) in items" :key="i" :src="item.src"></v-img>
          </carousel>
    
    <v-container fluid class="charter-filter-con d-md-flex align-end elevation-5">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-range-slider
              v-model="priceRange"
              :max="priceMax"
              :min="priceMin"
              color="#ffd400"
              hide-details
              class="align-center"
            >
              <template v-slot:prepend>
                <v-text-field
                  :value="priceRange[0]"
                  class="mt-0 pt-0"
                  hide-details
                  color="#ffd400"
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(priceRange, 0, $event)"
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  :value="priceRange[1]"
                  class="mt-0 pt-0"
                  color="#ffd400"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(priceRange, 1, $event)"
                ></v-text-field>
              </template>
            </v-range-slider>
          </v-col>
          <v-col cols="12" md="6">
            <v-autocomplete
              v-model="yachtLocation"
              :items="locationArr"
              color="#ffd400"
              outlined
              label="Where"
              placeholder="Start typing to select location"
              dense
              prepend-inner-icon="mdi-map-marker"
              hide-details
              return-object
              @change="changeLocation"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
            <v-autocomplete
              v-model="searchYear"
              :items="yearArr"
              color="#ffd400"
              outlined
              label="Year"
              placeholder="Start typing to select Year"
              dense
              prepend-inner-icon="mdi-calendar-arrow-right"
              hide-details
              return-object
              @change="changeYear"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="2">
            <v-autocomplete
              v-model="searchMonth"
              :items="monthArr"
              color="#ffd400"
              item-text="name"
              item-value="value"
              outlined
              label="Month"
              placeholder="Start typing to select Month"
              dense
              prepend-inner-icon="mdi-calendar-arrow-right"
              hide-details
              return-object
              @change="changeMonth"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="2">
            <v-autocomplete
              v-model="searchWeek"
              :items="weekArr"
              color="#ffd400"
              outlined
              item-text="name"
              item-value="value"
              label="Week"
              placeholder="Start typing to select week"
              dense
              prepend-inner-icon="mdi-calendar-arrow-right"
              hide-details
              return-object
              @change="changeWeek"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="3">
            <v-autocomplete
              v-model="yachtType"
              :items="yachtArr"
              color="#ffd400"
              outlined
              label="Yacht Type"
              placeholder="Start typing to select yacht"
              dense
              prepend-inner-icon="mdi-sail-boat"
              hide-details
              return-object
              @change="changeYachtName"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              :items="cabinArr"
              label="Cabin"
              dense
              color="#ffd400"
              outlined
              hide-details
              prepend-inner-icon="mdi-cabin-a-frame"
              v-model="cabin"
              :menu-props="{ top: false, offsetY: true }"
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
      <div class="px-md-0 px-3 pt-3">
        <v-btn
          :block="$vuetify.breakpoint.mdAndUp ? false : true"
          class="text-capitalize mb-4"
          elevation="0"
          color="#ffd400"
          @click="filterItemsFunc"
        >
          <v-icon left>mdi-magnify</v-icon>
          Search
        </v-btn>
      </div>
    </v-container>
    <v-container class="mt-16">
      <v-row class="mb-1 ma-0">
        <p
          class="text-h5 text-md-h3 font-weight-bold grey--text text--darken-3"
        >
          Yachts for charter
        </p>
      </v-row>
      <v-divider
        style="width: 60px; height: 5px !important; background-color: #ffd400"
      />
      <v-row class="pt-8 ma-0">
        <p class="grey--text text--darken-1 line-height-30">
          Fraser offers a large fleet of luxury yachts for charter around the
          world. We specialise in crewed motor and sailing charter yachts and
          can assist you in the choice of yacht. Our charter brokers are
          experts, thanks to their in-depth knowledge, they will make your dream
          holiday become a reality. Browse the selection of stunning yachts for
          charter with Fraser and take the first step towards the holiday of a
          lifetime.
        </p>
      </v-row>
      <v-divider />
      <v-row class="ma-0 pt-3">
        <v-col cols="12" md="6">
          <p class="text-uppercase grey--text text--darken-3 font-weight-bold">
            All in the detail
          </p>
          <p class="grey--text text--darken-1 line-height-30">
            Here at Fraser we understand that details are important, which is
            why we assure you that all of the yachts in our fleet are in
            immaculate condition and are run by the most experienced,
            professional and friendly crew in the industry. From giving tips on
            the best places to eat, to the best diving spots, to making sure
            your favourite wine label is on board, our team make every effort to
            ensure that every tiny detail is taken care of to create your ideal
            vacation.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <p class="text-uppercase grey--text text--darken-3 font-weight-bold">
            Find the perfect charter yacht
          </p>
          <p class="grey--text text--darken-1 line-height-30">
            There are a range of yachts to choose from to suit your
            requirements, ranging from 30m to over 100m. Elegant sailing yachts,
            high performance motor yachts, yachts with expansive deck spaces and
            yachts with armadas of water toys – Fraser has access to over 1,000
            luxury charter yachts around the world; the ideal yacht is waiting
            for you to come aboard. Use our search tool above to browse the
            fleet according to your criteria. Search for a motor yacht or
            sailing yacht, search by length, builder, number of guests and
            price. Alternatively, contact us with your enquiry.
          </p>
        </v-col>
        <v-col cols="12">
          <p class="text-uppercase grey--text text--darken-3 font-weight-bold">
            FOR COMPARISON PURPOSES ONLY
          </p>
          <p class="grey--text text--darken-1 line-height-30">
            FOR SOME USERS PRICES SHOWN BELOW ARE CONVERTED INTO EUROS BY
            DEFAULT.
          </p>

          <p class="grey--text text--darken-1 line-height-30">
            You can select your preferred currency below or click any yachts to
            see the accurate CHARTER LISTING CURRENCY.
          </p>
        </v-col>
      </v-row>
      <v-divider />
      <v-row class="ma-0 pt-3">
        <v-col cols="12">
          <p class="text-uppercase grey--text text--darken-3 font-weight-bold">
            Yacht for charter
          </p>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col
              v-for="(yacht, index) in yachtList"
              :key="index"
              cols="12"
              md="4"
              class="pa-md-3 pa-2"
            >
              <div class="w-100 h-100">
                <v-hover v-slot="{ hover }">
                  <v-card
                    :elevation="hover ? 3 : 0"
                    :class="{ 'on-hover': hover }"
                  >
                    <v-img
                      :src="require('../assets/image/home/' + yacht.images[0])"
                    >
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
                      <div
                        class="position-relative h-100 w-100 d-flex align-end"
                      >
                        <v-btn
                          :class="{ 'hover-show-btns': hover }"
                          color="rgba(255, 255, 255, 0)"
                          icon
                          large
                          class="position-absolute self-align-justify-center"
                          @click="navToDetail(yacht)"
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
                    <div
                      class="
                        px-md-5 px-2
                        pb-5
                        white--text
                        pt-5
                        bg-yellow-transparent
                        w-100
                      "
                    >
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
                          {{ yacht.price }}$
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
                          {{ yacht.built }}
                        </p>
                      </div>
                      <div class="d-flex align-end">
                        <v-icon color="white" class="pr-3"
                          >mdi-map-marker</v-icon
                        >
                        <p class="mb-0" style="width: 130px">Location</p>
                        <p
                          class="mb-0 text-body-1 font-weight-bold font-italic"
                        >
                          {{ yacht.region }}
                        </p>
                      </div>
                      <div class="d-flex align-end">
                        <v-icon color="white" class="pr-3"
                          >mdi-cabin-a-frame</v-icon
                        >
                        <p class="mb-0" style="width: 130px">Cabin</p>
                        <p
                          class="mb-0 text-body-1 font-weight-bold font-italic"
                        >
                          {{ yacht.cabin }}
                        </p>
                      </div>
                      <div class="d-flex align-end">
                        <v-icon color="white" class="pr-3"
                          >mdi-human-male-male</v-icon
                        >
                        <p class="mb-0" style="width: 130px">Guest</p>
                        <p
                          class="mb-0 text-body-1 font-weight-bold font-italic"
                        >
                          {{ yacht.guest }}
                        </p>
                      </div>
                      <v-btn
                        color="yellow accent-4"
                        class="mt-2"
                        rounded
                        elevation="3"
                        block
                      >
                        Make Offer / Buy
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  monthArr,
  weekArr,
  cabinArr,
  guestArr,
  yachtArr,
  seasonArr,
  locationArr,
} from "../constants";
import carousel from "v-owl-carousel";
export default {
  components: {
    carousel,
  },
  data() {
    return {
      monthArr: monthArr,
      weekArr: weekArr,
      cabinArr: cabinArr,
      guestArr: guestArr,
      yachtArr: yachtArr,
      seasonArr: seasonArr,
      locationArr: locationArr,
      items: [
        {
          src: require("../assets/image/charter1.jpg"),
        },
        {
          src: require("../assets/image/charter2.jpg"),
        },
        {
          src: require("../assets/image/charter3.jpg"),
        },
        {
          src: require("../assets/image/charter4.jpg"),
        },
        {
          src: require("../assets/image/charter5.jpg"),
        },
        {
          src: require("../assets/image/charter6.jpg"),
        },
      ],
      season: "",
      yachtType: "",
      yachtLocation: "",
      cabin: "",
      priceMin: 1,
      priceMax: 100000000,
      priceRange: [1, 100000000],
      guest: "",
      yearArr: [],
      yachtList: [
        {
          name: "Speed Boat 10",
          img: require("../assets/image/home/yacht1.png"),
          length: 320,
          price: 150,
          built: "10-Oct-2016",
        },
        {
          name: "Princess 18",
          img: require("../assets/image/home/yacht2.png"),
          length: 240,
          price: 1000,
          built: "21-Sep-2021",
        },
        {
          name: "Hercules 07",
          img: require("../assets/image/home/yacht3.png"),
          length: 450,
          price: 700,
          built: "03-Jan-2019",
        },
        {
          name: "Speed Boat 10",
          img: require("../assets/image/home/yacht4.png"),
          length: 290,
          price: 380,
          built: "21-May-2020",
        },
      ],
      searchYear: -1,
      searchMonth: -1,
      searchWeek: -1,
    };
  },
  async created() {
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
      this.yearArr.push(currentYear + i);
    }
    await this.$store.dispatch("getAllShip");
    this.yachtList = this.$store.state.allShipData;
    console.log("=====", this.yachtList);
  },
  methods: {
    async filterItemsFunc() {
      const payload = {};
      payload.yachtType = this.yachtType;
      payload.yachtLocation = this.yachtLocation;
      payload.priceRange = this.priceRange;
      payload.cabin = this.cabin;
      payload.season = this.season;
      payload.when = `${this.searchYear}-${this.searchMonth}-${this.searchWeek}`;
      // payload.guest = this.guest;
      console.log("+++++++++++++++++++", payload);
      await this.$store.dispatch("getCharter", payload);
      console.log("------", this.$store.state.charterData);
      this.yachtList = this.$store.state.charterData;
    },

    navToDetail(yacht) {
      console.log("yacht", yacht);
      this.$router.push({ name: "charter-detail", params: { yacht: yacht } });
    },
    changeLocation() {},
    changeYachtName() {},
    changeYear() {},
    changeMonth(val) {
      this.searchMonth = val.value;
    },
    changeWeek(val) {
      this.searchWeek = val.value;
    },
  },
};
</script>

<style></style>
