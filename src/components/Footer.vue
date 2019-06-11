<template>
  <div class="footer">
    <p class="contacts">mail@mailtest.com<br/>+30-6977664062</p>
    <p class="copyright ">Copyright © 2019 Test All Rights Reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 50px 21px;
    height: 102px;
    background-color: #1d1e25;
  }
  .contacts {
    font-family: sofia_proregular, sans-serif;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
  }
  .copyright {
    padding-bottom: 18px;
    font-family: Poppins, sans-serif;
    color: #4a4d5e;
    font-size: 13px;
    line-height: 26px;
    font-weight: 500;
  }

</style>
