// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.headers.common["authorization"] =
  "Bearer " + localStorage.getItem("authData")?.accessToken;
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
//to handle state
export default new Vuex.Store({
    state : {
        authData: localStorage.getItem('authData') ? JSON.parse(localStorage.getItem('authData')) : null
    },

    //to handle state
    getters : {
        authData: state => state.authData
    },

    //to handle actions
    actions : {
        signIn({commit}, payload) {
            axios.post("/auth/signin",payload).then((res) => {
                console.log("res:",res)
                commit("setAuthData", res.data);
                localStorage.setItem('authData',JSON.stringify(res.data))
                localStorage.setItem('isAuthenticated', true)
            });
            // console.log(commit,payload)
            // axios.get('/').then(res=>{
            //     console.log(res)
            // })
        },
    },

    //to handle mutations
    mutations : {
        setAuthData(state, authData) {
            state.authData = authData
        }
    }
});