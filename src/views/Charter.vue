<template>
  <div>
    <!-- <v-img src="../assets/image/charter1.jpg"></v-img> -->
    <v-carousel
      height="700"
      :show-arrows="false"
      hide-delimiter-background
      cycle
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-img :src="item.src"></v-img>
      </v-carousel-item>
    </v-carousel>
    <v-container class="charter-filter-con">
      <v-row>
        <v-col>
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
        <v-col>
          <v-autocomplete
            v-model="yachtLocation"
            :items="locationArr"
            color="#ffd400"
            outlined
            label="Location"
            placeholder="Start typing to select location"
            dense
            prepend-inner-icon="mdi-map-marker"
            hide-details
            return-object
            @change="changeLocation"
          ></v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            v-model="yachtName"
            :items="yachtArr"
            color="#ffd400"
            outlined
            label="Yacht Name"
            placeholder="Start typing to select yacht"
            dense
            prepend-inner-icon="mdi-sail-boat"
            hide-details
            return-object
            @change="changeLocation"
          ></v-autocomplete>
        </v-col>
        <v-col>
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
        <v-col>
          <v-select
            :items="guestArr"
            label="Guest"
            dense
            color="#ffd400"
            outlined
            hide-details
            prepend-inner-icon="mdi-account-multiple"
            v-model="guest"
            :menu-props="{ top: false, offsetY: true }"
          ></v-select>
        </v-col>
        <v-btn icon color="#ffd400" @click="filterItemsFunc" class="my-auto">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-row>
    </v-container>
    <v-container>
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
            <v-col>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      yachtName: "",
      yachtLocation: "",
      cabin: "",
      priceMin: 0,
      priceMax: 1000000,
      priceRange: [0, 1000000],
      cabinArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      guestArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      guest: -1,
      yachtArr: [
        "test1",
        "test2",
        "test3",
        "test4",
        "test5",
        "test6",
        "test7",
        "test8",
        "test9",
        "test10",
      ],
      locationArr: [
        "The Mediterranean",
        "Greece",
        "France",
        "Croatia",
        "Italy",
        "Malta",
        "Montenegro",
        "Spain",
        "Turkey",
        "Adriatic",
        "Indian Ocean",
        "Maldives",
        "Seychelles",
        "South Pacific",
        "French Polynesia",
        "Fiji",
        "South East Asia",
        "Thailand",
        "Bali",
        "Caribbean",
        "Bahamas",
        "Leeward Islands",
        "Windward Islands",
        "Greater Antilles",
        "North America",
        "Alaska",
        "New England",
        "Southeast Florida",
        "Australasia",
        "Australia",
        "New Zealand",
        "Northern Europe",
        "Norway",
        "Sweden",
        "United Kingdom",
        "The Baltic",
        "Central America",
        "Mexico",
        "Costa Rica",
        "Off the beaten track",
        "Antarctica",
        "Galapagos",
      ],
    };
  },
  methods: {
    filterItemsFunc() {
      const payload = {};
      payload.yachtName = this.yachtName;
      payload.yachtLocation = this.yachtLocation;
      payload.priceRange = this.priceRange;
      console.log(payload);
    },
  },
};
</script>

<style></style>
