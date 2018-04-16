<template>
  <div class="searchBar">

  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchVisiblie: false,
        Keyword: '',
        searchHistoryData: [],
        searchRusultData: []
      };
    },
    props: {
      Status: {
        type: Boolean,
        required: true
      }
    }
  };
</script>

<style scoped>

</style>
