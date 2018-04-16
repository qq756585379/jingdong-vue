<template>
  <div id="jd">
    <!-- 搜索栏 -->
    <search-bar :Status="Status" v-if="searchBarVisilbe && cmsData"/>

  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBar from '@/pages/home/searchBar';

  export default {
    components: {
      SearchBar
    }
  };
</script>

<style scoped>

</style>
