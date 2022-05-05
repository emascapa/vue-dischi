<template>
  <div>
    <SpotifyHeader />
    <SpotifyMain />
  </div>
</template>

<script>
import SpotifyHeader from "./SpotifyHeader.vue";
import SpotifyMain from "./SpotifyMain.vue";

export default {
  name: "SpotifyComponent",
  components: {
    SpotifyHeader,
    SpotifyMain,
  },
};
</script>

<style>
</style>