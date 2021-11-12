<template>
  <v-footer dark padless >
    <v-card class="flex" flat tile>
      <v-container fluid class="grey darken-4 py-16">
        <v-container>
          <v-row>
            <v-col cols="12" md="3">
              <p class="text--white font-weight-black text-uppercase text-h2 yellow--text text--accent-4">
                Logo
              </p>
              <div class="pt-3">
                <v-btn dark icon>
                  <v-icon color="yellow accent-4" size="24px">
                    mdi-twitter
                  </v-icon>
                </v-btn>
                <v-btn dark icon>
                  <v-icon color="yellow accent-4" size="24px">
                    mdi-facebook
                  </v-icon>
                </v-btn>
                <v-btn dark icon>
                  <v-icon color="yellow accent-4" size="24px">
                    mdi-instagram
                  </v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="d-flex flex-column pb-5">
                <div class="d-flex align-end  pb-1">
                  <v-icon color="grey darken-1" class="pr-3">mdi-phone</v-icon>
                  <p class="mb-0 grey--text text--darken-1 font-weight-bold">Contact No</p>
                </div>
                <p>0312-1234-56789</p>
              </div>
              <div class="d-flex flex-column pb-5">
                <div class="d-flex align-end  pb-1">
                  <v-icon color="grey darken-1" class="pr-3">mdi-email</v-icon>
                  <p class="mb-0 grey--text text--darken-1 font-weight-bold">Email Address</p>
                </div>
                <p>Info@something.com</p>
              </div>
              <div class="d-flex flex-column ">
                <div class="d-flex align-end  pb-1">
                  <v-icon color="grey darken-1" class="pr-3">mdi-map-marker</v-icon>
                  <p class="mb-0 grey--text text--darken-1 font-weight-bold">Location</p>
                </div>
                <p>Frankfurt town, Plot #128,Germany</p>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <p class="font-weight-bold">Contact No</p>
              <p class="grey--text text--darken-1 ">Luxury Yacht Sales</p>
              <p class="grey--text text--darken-1 ">Yachts For Sale</p>
              <p class="grey--text text--darken-1 ">Buy A Yacht</p>
              <p class="grey--text text--darken-1 ">Sell Your Yacht</p>
              <p class="grey--text text--darken-1 ">New To Market</p>
            </v-col>
            <v-col cols="12" md="3">
              <p class="font-weight-bold">Charter</p>
              <p class="grey--text text--darken-1 ">Luxury Yacht Charter</p>
              <p class="grey--text text--darken-1 ">Luxury Yachts For Charter</p>
              <p class="grey--text text--darken-1 ">Yacht Charter Destinations</p>
              <p class="grey--text text--darken-1 ">How To Charter A Yacht</p>
              <p class="grey--text text--darken-1 ">Yacht Charter Marketing</p>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <v-card-text class="py-4 white--text text-center black">
        &copy;{{ new Date().getFullYear() }} —
        <strong>somecompany, Inc. </strong>All rights reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style></style>
