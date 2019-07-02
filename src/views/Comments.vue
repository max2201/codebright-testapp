<template>
  <div class="wrapper">

    <h1 class="mainTitle">Comments</h1>
    <div class="commentsFlexWrap">

      <div class="commentsColumn">
        <div class="commentBlock" v-for="(comment) in filterEvenComments(comments)">
          <h2 class="commentTitle">{{comment.title}}</h2>
          <p class="commentBody">{{comment.body}}</p>
          <div class="buttonsWrapper">
            <router-link class="button" :to="{ name: 'comment', params: { id: comment.id }}">Read more</router-link>
            <button class="button updButton" @click="showModal = true, editingComment=comment">update comment</button>
            <button class="button delButton" @click.prevent="deleteComment(comment.id)">delete comment</button>
          </div>
        </div>
      </div>

      <div class="commentsColumn">
        <div class="commentBlock" v-for="(comment) in filterOddComments(comments)">
          <h2 class="commentTitle">{{comment.title}}</h2>
          <p class="commentBody">{{comment.body}}</p>
          <div class="buttonsWrapper">
            <router-link class="button" :to="{ name: 'comment', params: { id: comment.id }}">Read more</router-link>
            <button class="button updButton" @click="showModal = true, editingComment=comment">update comment</button>
            <button class="button delButton" @click.prevent="deleteComment(comment.id)">delete comment</button>
          </div>
        </div>
      </div>

    </div>
    <BackToHome/>
    <modal v-if="showModal" @close="showModal = false, editingComment=null" :editingComment=editingComment></modal>
  </div>
</template>

<script>
import Vuex from 'vuex';
import BackToHome from '@/components/BackToHome';
import Modal from '../components/Modal';

export default {
  name: 'comments',
  data() {
    return {
      showModal: false,
      editingComment: {
        title: '',
        body: '',
        id: '',
      },
    };
  },
  components: { Modal, BackToHome },
  computed:
    Vuex.mapState(['comments', 'loading']),
  created() {
    this.$store.dispatch('loadComments'); // dispatch loading
  },

  methods: {
    deleteComment(id) {
      this.$store.dispatch('deleteComment', id);
    },

    filterEvenComments(comments) {
      return comments.filter(function (comment) {
        if (comments.indexOf(comment) % 2 === 0) {
          return comment;
        }
      });
    },
    filterOddComments(comments) {
      return comments.filter(function (comment) {
        if (comments.indexOf(comment) % 2 === 1) {
          return comment;
        }
      });
    },
  },
};
</script>

<style scoped>
  .buttonsWrapper{
    display: flex;
    justify-content: space-between;
  }
  .mainTitle {
    margin-top: 69px;
    margin-left: 181px;
    font-family: 'sofia_prosemibold', sans-serif;
    color: #111518;
    font-size: 70px;
    line-height: 72px;
  }
  .commentsFlexWrap {
    display: flex;
    width: 1006px;
    margin-top: 87px;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
  }
  .commentsColumn {
    width: 483px;
  }
  .commentBlock {
    margin-bottom: 40px;
    padding: 44px 30px 40px;
    border-radius: 3px;
    box-shadow: 7px 11px 30px rgba(17, 21, 24, 0.04);
  }
  .commentTitle {
    font-family: 'open-sans', sans-serif;
    color: #333;
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    word-wrap: break-word;
  }
  .commentBody {
    margin-top: 16px;
    margin-bottom: 23px;
    font-size: 14px;
    font-family: 'open-sans', sans-serif;
    color: #888;
    line-height: 24px;
    word-wrap: break-word;
  }
  .button {
    display: block;
    width: 150px;
    height: 55px;
    padding: 21px 32px 21px 34px;
    border-radius: 3px;
    background-color: #60e3a1;
    font-family: 'sofia_proregular', sans-serif;
    color: #111518;
    font-size: 16px;
    line-height: 11px;
    text-align: center;
    letter-spacing: 0.24px;
    text-decoration: none;
    border: none;
  }
  .updButton{
    background-color: #ffeda5;
    padding: 0 26px 0 34px;
    width: 130px;
  }
  .delButton{
    background-color: #ff8b8d;
    padding: 0 26px 0 34px;
    width: 130px;
  }
</style>
