<template>
  <div class="wrapper">

    <nav-button buttonText="Back to Comments" whereToGo="/comments" class="backToComments"/>
    <div v-if="loading">загрузка...</div>
    <div v-else>
      <h1 class="commentTitle">{{comment.title}}</h1>
      <p class="commentBody">{{comment.body}}</p>
    </div>
    <div class="separator"></div>
    <back-to-home/>

  </div>
</template>

<script>
  import Vuex from 'vuex';
  import BackToHome from '@/components/BackToHome';
  import NavButton from '@/components/NavButton';


  export default {
    name: 'comment',
    components: { NavButton, BackToHome },

    computed:
      Vuex.mapState(['comment', 'loading']),
    created() {
      const url = 'https://5cbef81d06a6810014c66193.mockapi.io/api/comments/' + this.$route.params.id;
      this.$store.dispatch('loadComment', url);
    },
  };
</script>
<!--todo: убрать плавный скролл-->
<!--todo: при переходе во все комменты вернуться в предыдущее положение скролла-->
<style scoped>
  .wrapper {
    margin: 68px 300px 0;
  }
  .commentTitle {
    color: #101417;
    font-family: 'sofia_probold','sans-serif';
    font-size: 48px;
    line-height: 58px;
    margin: 27px 0 40px;
  }
  .commentBody{
    color: #101417;
    font-family: 'sofia_proregular','sans-serif';
    font-size: 16px;
    line-height: 28px;
  }
  .separator{
    border-top: 1px solid #4a4d5e;
    opacity: 0.1;
    margin: 92px 0 15px;
  }
  .backToComments{
    text-decoration: underline;
    border: none;
    text-align: left;
  }
</style>
