<template>
  <div class="jd_footer">
    <router-link :key="1" to="/a">
      <img src="../../assets/images/footer/a-home.png" alt="">
    </router-link>
    <router-link :key="2" to="/a">
      <img src="../../assets/images/footer/n-cart.png" alt="">
    </router-link>
    <router-link :key="3" to="/a">
      <img src="../../assets/images/footer/n-catergry.png" alt="">
    </router-link>
    <router-link :key="4" to="/a">
      <img src="../../assets/images/footer/n-find.png" alt="">
    </router-link>
    <router-link :key="5" to="/a">
      <img src="../../assets/images/footer/n-me.png" alt="">
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style rel="stylesheet/scss" lang="scss" scope>

  .jd_footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    display: flex;
    height: 54px;
    line-height: 54px;
    border-top: solid 1px #ededed;
    box-shadow: 0 -1px 1px #ccc;
    color: #fff;
    background: #fff;
    & > a {
      flex: 1;
      text-align: center;
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      height: 100%;
      &.router-link-active {
        color: red;
      }
      img {
        width: 75px;
      }
    }
  }
</style>
