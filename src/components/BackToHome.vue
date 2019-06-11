<template>
    <div class="backToHome">
      <h3 class="bottomTitle">Lorem Ipsum is text of the typesetting industry</h3>
      <nav-button buttonText="Back to homepage" whereToGo="/"/>
    </div>
</template>

<script>
import NavButton from './NavButton';
export default {
  name: 'BackToHome',
  components: { NavButton },
};
</script>

<style scoped>
  .bottomTitle {
    margin-top: 57px;
    margin-bottom: 19px;
    padding-right: 2px;
    font-size: 24px;
    opacity: 0.5;
    font-family: 'sofia_prosemibold', sans-serif;
    color: #111518;
    line-height: 72px;
  }
.backToHome{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}
</style>
