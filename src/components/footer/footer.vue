<template>
  <ul class="jd_footer">
    <li>
      <a :class="['barIcon','home',$route.name==='home'?'active':'']" @click="$router.push('/home')"></a>
    </li>
    <li>
      <a :class="['barIcon','category',$route.name==='category'?'active':'']" @click="$router.push('/category')"></a>
    </li>
    <li>
      <a :class="['barIcon','find',$route.name==='find'?'active':'']" @click="$router.push('/find')"></a>
    </li>
    <li>
      <a :class="['barIcon','shopcart',$route.name==='shopcart'?'active':'']" @click="$router.push('/shopcart')"></a>
    </li>
    <li>
      <a :class="['barIcon','my',$route.name==='my'?'active':'']" @click="$router.push('/my')"></a>
    </li>
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
    height: 50px;
    line-height: 50px;
    border-top: solid 1px #ededed;
    box-shadow: 0 -1px 1px #ccc;
    color: #fff;
    background: #fff;
    text-align: center;
    li {
      flex: 1;
      text-align: center;
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      height: 100%;
      cursor: pointer;
      .barIcon {
        text-align: center;
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url('../../assets/images/footer/navbar.png') 0 0 no-repeat;
        background-size: auto 54px;
      }
      .home {
        background-position: -10px 0;
        &.active{
          background-position: -80px 0;
        }
      }
      .category {
        background-position: -150px 0;
        &.active{
          background-position: -220px 0;
        }
      }
      .find{
        background-position: -290px 0;
        &.active{
          background-position: -360px 0;
        }
      }
      .shopcart{
        background-position: -430px 0;
        &.active{
          background-position: -500px 0;
        }
      }
      .my{
        background-position: -570px 0;
        &.active{
          background-position: -640px 0;
        }
      }
    }
  }
</style>
