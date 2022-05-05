<template>
  <div>
    <PokemonHeader />
    <PokemonMain />
  </div>
</template>

<script>
import PokemonHeader from "@/components/PokemonHeader.vue";
import PokemonMain from "@/components/PokemonMain.vue";

export default {
  name: "PokemonComponent",
  components: {
    PokemonHeader,
    PokemonMain,
  },
};
</script>

<style>
</style>