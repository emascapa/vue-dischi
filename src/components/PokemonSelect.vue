<template>
  <select
    class="custom-select form-control me-2 w-50"
    @change="$emit('changeSearchCriteria')"
    @input="$emit('input', $event.target.value)"
  >
    <!-- :value="searchChoice" -->
    <!-- @select="$emit('select', $event.target.value)" -->
    <option value="1">Search by Name -></option>
    <option value="2">Search by ID -></option>
  </select>
</template>

<script>
export default {
  name: "PokemonSelect",
};
</script>

<style>
</style>