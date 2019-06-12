<template>
  <div class="wrapper">

    <h1 class="mainTitle">Comments</h1>


    <div class="commentsFlexWrap">

      <div class="commentsColumn">

        <div class="commentBlock" v-for="(post) in filterEvenPosts(posts)">
          <h2 class="commentTitle">{{post.id}}{{post.title}}</h2>
          <p class="commentBody">{{post.body}}</p>
          <router-link class="readButton" to="/comment">Read more</router-link>
        </div>

<!--                <div class="commentBlock">-->
<!--                  <h2 class="commentTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>-->
<!--                  <p class="commentBody">-->
<!--                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem-->
<!--                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer-->
<!--                    took a galley of type and scrambled it to make a type specimen book.-->
<!--                  </p>-->
<!--                  <router-link class="readButton" to="/comment">Read more</router-link>-->
<!--                </div>-->

<!--                <div class="commentBlock">-->
<!--                  <h2 class="commentTitle">Where does it come from?</h2>-->
<!--                  <p class="commentBody">-->
<!--                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots-->
<!--                    in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard-->
<!--                    McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more-->
<!--                    obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the-->
<!--                    word in classical literature, discovered the undoubtable source.-->
<!--                  </p>-->
<!--                  <router-link class="readButton" to="/comment">Read more</router-link>-->
<!--                </div>-->

<!--                <div class="commentBlock">-->
<!--                  <h2 class="commentTitle">If you are going to use a passage</h2>-->
<!--                  <p class="commentBody">-->
<!--                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't-->
<!--                    anything embarrassing hidden in the middle of text.-->
<!--                  </p>-->
<!--                  <router-link class="readButton" to="/comment">Read more</router-link>-->
<!--                </div>-->

      </div>

      <div class="commentsColumn">

        <div class="commentBlock" v-for="(post) in filterOddPosts(posts)">
          <h2 class="commentTitle">{{post.id}}{{post.title}}</h2>
          <p class="commentBody">{{post.body}}</p>
          <router-link class="readButton" to="/comment">Read more</router-link>
        </div>

<!--        <div class="commentBlock">-->
<!--          <h2 class="commentTitle">Why do we use it?</h2>-->
<!--          <p class="commentBody">-->
<!--            Itis a long established fact that a reader will be distracted by the readable-->
<!--            content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a-->
<!--            more-or-less normal distribution.-->
<!--          </p>-->
<!--          <router-link class="readButton" to="/comment">Read more</router-link>-->
<!--        </div>-->

<!--        <div class="commentBlock">-->
<!--          <h2 class="commentTitle">There are many variations of passages of Lorem Ipsum available.</h2>-->
<!--          <p class="commentBody">-->
<!--            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem-->
<!--            Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer-->
<!--            took a galley of type and scrambled it to make a type specimen book.-->
<!--          </p>-->
<!--          <router-link class="readButton" to="/comment">Read more</router-link>-->
<!--        </div>-->

<!--        <div class="commentBlock">-->
<!--          <h2 class="commentTitle">What is Lorem Ipsum?</h2>-->
<!--          <p class="commentBody">-->
<!--            There are many variations of passages of Lorem Ipsum available, but the majority-->
<!--            have suffered alteration in some form, by injected humour, or randomised words which don't look-->
<!--            even slightly believable.-->
<!--          </p>-->
<!--          <router-link class="readButton" to="/comment">Read more</router-link>-->
<!--        </div>-->

      </div>

    </div>

    <BackToHome/>
  </div>
</template>

<script>
import Vuex from 'vuex';
import BackToHome from '@/components/BackToHome';

export default {
  name: 'about',

  components: { BackToHome },

  computed:
    Vuex.mapState(['posts']),
    created() {
      this.$store.dispatch('loadData'); // dispatch loading
    },

  methods: {
    filterEvenPosts(posts) {
      return posts.filter(function (post) {
        if (posts.indexOf(post) % 2 === 0) {
          return post;
        }
      });
    },
    filterOddPosts(posts) {
      return posts.filter(function (post) {
        if (posts.indexOf(post) % 2 === 1) {
          return post;
        }
      });
    },
  },
};
</script>

<style scoped>

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
  .readButton {
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
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.24px;
    text-decoration: none;
  }

</style>
