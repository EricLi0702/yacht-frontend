<template>
  <v-container fluid class="pt-md-16 pt-14">
    <v-container>
      <v-row>
        <v-col>
          <p
            class="
              text-h5 text-md-h3
              font-weight-bold
              grey--text
              text--darken-3 text-uppercase
            "
          >
            {{this.yachtData.name}}
          </p>
        </v-col>
      </v-row>
      <v-divider
        style="width: 60px; height: 5px !important; background-color: #ffd400"
      />
      <v-row class="pt-5">
        <v-col cols="12" md="5" class="d-flex align-start">
          <div>
            <div class="d-flex align-center">
              <p
                class="
                  text-uppercase
                  grey--text
                  text--darken-1 text-subtitle-1
                  font-weight-bold
                  min-width-100-px
                "
              >
                Length
              </p>
              <p class="">{{this.yachtData.length}} Meter</p>
            </div>
            <div class="d-flex align-center">
              <p
                class="
                  text-uppercase
                  grey--text
                  text--darken-1 text-subtitle-1
                  font-weight-bold
                  min-width-100-px
                "
              >
                Builder
              </p>
              <p class="text-uppercase">{{this.yachtData.shipYard}}</p>
            </div>
            <div class="d-flex align-center">
              <p
                class="
                  text-uppercase
                  grey--text
                  text--darken-1 text-subtitle-1
                  font-weight-bold
                  min-width-100-px
                "
              >
                Built/refit
              </p>
              <p>{{this.yachtData.built}}</p>
            </div>
            <div class="d-flex align-center">
              <p
                class="
                  text-uppercase
                  grey--text
                  text--darken-1 text-subtitle-1
                  font-weight-bold
                  min-width-100-px
                "
              >
                Guests
              </p>
              <p>
                157 <sub class="text-uppercase">(cruising)</sub> / {{this.yachtData.guest}}<sub
                  class="text-uppercase"
                  >(sleeping)</sub
                >
              </p>
            </div>
            <div class="d-flex align-start">
              <p
                class="
                  text-uppercase
                  grey--text
                  text--darken-1 text-subtitle-1
                  font-weight-bold
                  min-width-100-px
                "
              >
                Location
              </p>
              <div>
                <p>Summer: {{this.yachtData.region}}</p>
                <p>Winter: {{this.yachtData.region}}</p>
              </div>
            </div>
            <div class="d-flex align-start">
              <p
                class="
                  text-uppercase
                  grey--text
                  text--darken-1 text-subtitle-1
                  font-weight-bold
                  min-width-100-px
                "
              >
                Rate/Week
              </p>
              <div>
                <p>Summer: From ${{this.yachtData.price}} (Approx. $ 800,000)</p>
                <p>Winter: From ${{this.yachtData.price}} (Approx. $ 600,000)</p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
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
            <v-img
              src="../assets/image/home/yacht1.png"
              max-height="400"
            ></v-img>
            <v-img
              src="../assets/image/home/yacht2.png"
              max-height="400"
            ></v-img>
            <v-img
              src="../assets/image/home/yacht3.png"
              max-height="400"
            ></v-img>
            <v-img
              src="../assets/image/home/yacht4.png"
              max-height="400"
            ></v-img>
          </carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <p class="grey--text text--darken-1 line-height-30">
        Steeped in history, the legendary CHRISTINA O is the ideal setting to
        enjoy world-class entertainment, with friends and family. <br />
        Cruise in absolute comfort and style and offer your guests an
        unforgettable experience aboard an iconic yacht. <br />
        Whether you have experience of large yachts or not, you will appreciate
        the unique atmosphere and romantic power of this historic vessel, host
        to some of the world’s most influential people over the years. <br />
        Today available for charter, she remains the perfect setting for
        world-class entertaining, offering a unique opportunity to cruise in
        style and comfort. <br />
        She accommodates 34 guests in 17 staterooms.
      </p>
      <v-divider />
      <v-row class="ma-0">
        <v-col>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Built/Refit
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">1943/2015</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Builder
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">Canadian Vickers</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Length
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">99.06M (325'00")</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Beam
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">10.97M(36'00")</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Draft
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">4.26M(14'00")</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                GT
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">1,802</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Hull
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">Steel</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Stabilisers
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">-</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Engines
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">2X MAN(2,775HP)</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Generators
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">1X MAN(476KW)</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Cruising/Max speed
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">
                14 knots(cruising)/19knots(max)
              </p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Cruise Range
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">-</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Range
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">12,000NM</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Exterior Designer
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">Pinnau</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Interior Designer
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">Apostolos Molindris</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Classification
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">
                American Bureau of shipping(abs)
              </p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Flag
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">Malta</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider />
      <v-row class="ma-0">
        <v-col>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Staterooms
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">17</p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Guests
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">
                157(Cruising)/34(Sleeping)
              </p>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <p
                class="text-subtitle-2 text-uppercase grey--text text--darken-1"
              >
                Crew
              </p>
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="text-uppercase text-caption">38</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider />
      <v-row class="ma-0">
        <v-col>
          <v-row class="ma-0">
            <v-col>
              <p class="text-caption">
                * Yachts offered are subject to availability. The particulars
                are believed to be correct but are not guaranteed and may not be
                used for contractual purposes. Specification provided for
                information only.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import carousel from "v-owl-carousel";
export default {
  components: {
    carousel,
  },
  data:()=>({
    yachtData:null
  }),
  computed:{
    currentPath(){
      return this.$route
    }
  },
  created(){
    console.log('==================',this.currentPath)
    if(this.currentPath.params.yacht){
      this.yachtData = this.currentPath.params.yacht
    }
  }
};
</script>

<style></style>
