// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.headers.common["authorization"] =
  "Bearer " + localStorage.getItem("authData")?.accessToken;
// axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.headers.common["Accept"] = "application/json";
//to handle state
export default new Vuex.Store({
  state: {
    authData: localStorage.getItem("authData")
      ? JSON.parse(localStorage.getItem("authData"))
      : null,
    charterData: localStorage.getItem("charterData")
      ? JSON.parse(localStorage.getItem("charterData"))
      : null,
    allShipData: localStorage.getItem("allShipData")
      ? JSON.parse(localStorage.getItem("allShipData"))
      : null,
  },

  //to handle state
  getters: {
    authData: (state) => state.authData,
  },

  //to handle actions
  actions: {
    async signIn({ commit }, payload) {
      await axios
        .post("/auth/signin", payload)
        .then((res) => {
          console.log("res:", res);
          commit("setAuthData", res.data);
          localStorage.setItem("authData", JSON.stringify(res.data));
          localStorage.setItem("isAuthenticated", true);
        })
        .catch((err) => {
          console.log("signin error: ", err);
        });
    },
    async signUp({ commit }, payload) {
      await axios
        .post("/auth/signup", payload)
        .then((res) => {
          console.log(res);
          commit("setAuthData", res.data);
          localStorage.setItem("authData", JSON.stringify(res.data));
          localStorage.setItem("isAuthenticated", true);
        })
        .catch((err) => {
          console.log("signup error: ", err);
        });
    },
    async getCharter({ commit }, payload) {
      await axios
        .get("/chartYacht", { params: payload })
        .then((res) => {
          console.log(res);
          commit("setCharterData", res.data.data);
          // localStorage.setItem("charterData", JSON.stringify(res.data.data));
        })
        .catch((err) => {
          console.log("getcharter data error: ", err);
        });
    },
    async getAllShip({ commit }) {
      await axios
        .get("/yacht")
        .then((res) => {
          console.log("getAllShip: ", res.data);
          commit("setAllShipData", res.data.data);
          // localStorage.setItem("allShipData", JSON.stringify(res.data.data));
        })
        .catch((err) => {
          console.log("getAllShip: ", err);
        });
    },
  },

  //to handle mutations
  mutations: {
    setAuthData(state, authData) {
      state.authData = authData;
    },
    setCharterData(state, charterData) {
      state.charterData = charterData;
    },
    setAllShipData(state, allShipData) {
      state.allShipData = allShipData;
    },
  },
});
