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
    <v-container class="px-5">
      <v-row>
        <v-col>
          <v-select
            :items="yachtArr"
            label="YACHT NAME"
            dense
            outlined
            v-model="yachtName"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            :items="locationArr"
            label="LOCATION"
            dense
            outlined
            v-model="yachtLocation"
          ></v-select>
        </v-col>
        <v-col>
          <v-range-slider
            v-model="priceRange"
            :max="priceMax"
            :min="priceMin"
            hide-details
            class="align-center"
          >
            <template v-slot:prepend>
              <v-text-field
                :value="priceRange[0]"
                class="mt-0 pt-0"
                hide-details
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
          <v-btn depressed color="primary" @click="filterItemsFunc"> search </v-btn>
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
      yachtName:"",
      yachtLocation:"",
      priceMin: 0,
      priceMax: 1000000,
      priceRange: [0, 1000000],
      yachtArr: ["tset1", "test2", "test3", "test4", "test5"],
      locationArr: ["area1", "area2", "area3", "area4", "area5"],
    };
  },
  methods:{
    filterItemsFunc(){
      const payload = {}
      payload.yachtName = this.yachtName
      payload.yachtLocation = this.yachtLocation
      payload.priceRange = this.priceRange
      console.log(payload)
    }
  }
};
</script>

<style></style>
