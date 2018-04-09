<template>
  <ul class="jd_footer">
    <li :class="['barIcon','home',$route.name==='home'?'active':'']" @click="$router.push('/home')"></li>
    <li :class="['barIcon','category',$route.name==='category'?'active':'']" @click="$router.push('/category')"></li>
    <li :class="['barIcon','find',$route.name==='find'?'active':'']" @click="$router.push('/find')"></li>
    <li :class="['barIcon','cart',$route.name==='shopcart'?'active':'']" @click="$router.push('/shopcart')"></li>
    <li :class="['barIcon','myHome',$route.name==='my'?'active':'']" @click="$router.push('/my')"></li>
  </ul>
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
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    .barIcon {
      flex: 1;
      text-align: center;
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      height: 100%;
      cursor: pointer;
      background: url('../../assets/images/footer/navbar.png') 0 0 no-repeat;
    }
    .home {
      background-position: 0% 0%;
      &.active {
        background-position: -1.585rem -0.02rem;
      }
    }
  }
</style>
