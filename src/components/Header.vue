<template>
  <div class="header">
    <img src="@/assets/logo.svg" alt="logo"/>
    <div class="menu">
      <router-link class="menu-item" to="/#aboutUs">About us</router-link>
      <router-link class="menu-item" to="/#writeComment">Write comment</router-link>
      <router-link class="menu-item" to="/about">Comments</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>

  .header {
    display: flex;
    margin: 49px 30px 0 50px;
    justify-content: space-between;
   }
  .menu {
    display: flex;
    width: 400px;
    justify-content: space-around;
    align-items: center;
  }
  .menu-item {
    transition: border 500ms ease;
    font-family: sofia_promedium, sans-serif;
    color: #111518;
    font-size: 14px;
    line-height: 48px;
    letter-spacing: 0.98px;
    text-transform: uppercase;
    text-decoration: none;
  }
  .menu-item:hover {
    border-top:2px solid #f9d10d;
  }

</style>
