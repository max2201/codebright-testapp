<template>
  <div id="app">
    <div class="container">
    <Header/>
    <router-view/>
    <Footer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
  @import url('https://use.typekit.net/wru6knh.css');

  @font-face {
    font-family: 'sofia_probold';
    src: url('./fonts/sofia_pro_bold-webfont.woff2') format('woff2'),
    url('./fonts/sofia_pro_bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'sofia_promedium';
    src: url('./fonts/sofia_pro_medium-webfont.woff2') format('woff2'),
    url('./fonts/sofia_pro_medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'sofia_proregular';
    src: url('./fonts/sofia_pro_regular-webfont.woff2') format('woff2'),
    url('./fonts/sofia_pro_regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'sofia_prosemibold';
    src: url('./fonts/sofia_pro_semi_bold-webfont.woff2') format('woff2'),
    url('./fonts/sofia_pro_semi_bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html{
    scroll-behavior: smooth;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container{
    width: 100%;
    margin: 0 auto;
  }
</style>
