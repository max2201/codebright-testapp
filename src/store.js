import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const URL = 'https://5cbef81d06a6810014c66193.mockapi.io/api/comments';

export default new Vuex.Store({
  state: {
    comments: [],
    comment: [],
    loading: true,
  },
  mutations: {
    updateComments(state, comments) {
      state.comments = comments;
    },
    updateComment(state, comment) {
      state.comment = comment;
    },
    changeLoadingState(state, loading) {
      state.loading = loading;
    },
    deleteComment(state, id) {
      state.comments = state.comments.filter(function (comment) {
        if (comment.id !== id) {
          return comment;
        }
      });
    },
  },
  actions: {
    loadComments({ commit }) {
      this.state.loading = true;
      Axios.get(URL).then((response) => {
        commit('updateComments', response.data);
        commit('changeLoadingState', false);
      });
    },
    loadComment({ commit }, url) {
      this.state.loading = true;
      Axios.get(url).then((response) => {
        commit('updateComment', response.data);
        commit('changeLoadingState', false);
      });
    },
    sendComment({ commit }, comment) {
      Axios.post('https://5cbef81d06a6810014c66193.mockapi.io/api/comments', comment)
        .then((response) => {
          // return alert('Comment send!');
        });
    },
    deleteComment({ commit }, commentid) {
      Axios.delete('https://5cbef81d06a6810014c66193.mockapi.io/api/comments/'+commentid).then((response) => {
        // commit('deleteComment', commentid);
        this.dispatch('loadComments');
      });
    },
    updateComment({ commit }, changeComment) {
      Axios.put('https://5cbef81d06a6810014c66193.mockapi.io/api/comments/'+changeComment.id, {body:changeComment.body, title:changeComment.title}).then((response) => {
        // commit('deleteComment', commentid);
        this.dispatch('loadComments');
      });
    },
  },
});
