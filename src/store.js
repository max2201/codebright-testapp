import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const URL = 'https://5cbef81d06a6810014c66193.mockapi.io/api/comments';

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
  },
  actions: {
    loadData({commit}) {
      Axios.get(URL).then((response) => {
        commit('updatePosts', response.data)
      })
    }
  },
});
