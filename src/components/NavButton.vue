<template>
  <router-link class="homeButton" :to=whereToGo>{{buttonText}}</router-link>
</template>

<script>
export default {
  name: 'NavButton',
  props: ['buttonText', 'whereToGo'],
};
</script>

<style scoped>
  .homeButton {
    display: block;
    width: 212px;
    /*margin: 0 auto 100px;*/
    border: solid 1px #60e3a1;
    border-radius: 3px;
    font-family: 'sofia_proregular', sans-serif;
    color: #1d1e25;
    font-size: 16px;
    line-height: 53px;
    text-align: center;
    text-decoration: none;
  }
  .homeButton::before{
    content:url('../assets/Vector_Smart_Object1.png');
    margin-right: 15px;
  }
</style>
