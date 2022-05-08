<template>
  <select
    class="custom-select form-control me-2 w-50"
    @change="$emit('changeSearchCriteria')"
    @input="$emit('input', $event.target.value)"
  >
    <!-- :value="searchChoice" -->
    <!-- @select="$emit('select', $event.target.value)" -->
    <option value="1">Search by Album -></option>
    <option value="2">Search by Band -></option>
    <option value="3">Search by Year -></option>
    <option value="4">Search by Genre -></option>
  </select>
</template>

<script>
export default {
  name: "SpotifySelect",
};
</script>

<style>
</style>