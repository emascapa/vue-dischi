<template>
  <form class="d-flex align-items-center w-50">
    <!-- @submit.prevent="$emit('submitForm', searchString)" -->

    <input
      type="search"
      class="form-control"
      placeholder="Type here"
      :value="searchString"
      @input="$emit('input', $event.target.value)"
      @keyup="$emit('submitForm', searchString)"
    />

    <!-- <button type="submit" class="btn btn-secondary me-3">Search</button> -->
  </form>
</template>

<script>
export default {
  name: "SpotifySearch",
  props: {
    searchString: String,
    searchChoice: String,
  },
};
</script>

<style lang="scss" scoped>
</style>