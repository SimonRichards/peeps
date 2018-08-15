import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase/app'
import flamelink from 'flamelink'

Vue.use(Vuex);

Vue.config.productionTip = false

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCfE2IVfp28RO7PUfBXZzkMe7i0j8vR08I",
  authDomain: "peeps-68492.firebaseapp.com",
  databaseURL: "https://peeps-68492.firebaseio.com",
  projectId: "peeps-68492",
  storageBucket: "peeps-68492.appspot.com",
  messagingSenderId: "212840584027"
})

let cms = flamelink({ firebaseApp })

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    savePosts (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    savePosts ({ commit }, posts) {
      commit('savePosts', posts)
    }
  },
  getters: {
    cms: () => cms,
    posts: (state) => state.posts,
    firebase: () => firebaseApp
  }
});
